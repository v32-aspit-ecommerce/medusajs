import { AbstractFileService, Logger } from "@medusajs/medusa";
import { Stream } from "stream";
import {
    DeleteFileType,
    FileServiceGetUploadStreamResult,
    FileServiceUploadResult,
    GetUploadedFileType,
    UploadStreamDescriptorType,
} from "@medusajs/types"
import * as fs from "fs";

class LocalFileService extends AbstractFileService {
    protected serverUrl = process.env.serverUrl || "http://localhost:9000";
    protected publicPath = "uploads"
    protected protectedPath = "protected_uploads"
    protected logger_: Logger;

        // constructor({ logger }: InjectedDependencies) {
    //     super(logger)
    //     this.logger_ = logger;
    //     if (!fs.existsSync(this.publicPath)) {
    //         fs.mkdirSync(this.publicPath);
    //     }
    //     if (!fs.existsSync(this.protectedPath)) {
    //         fs.mkdirSync(this.protectedPath)
    //     }
    // }

    async getUploadStreamDescriptor({
        name,
        ext,
        isPrivate = true,
    }: UploadStreamDescriptorType
    ): Promise<FileServiceGetUploadStreamResult> {
        const filePath = `${isPrivate ?
            this.publicPath : this.protectedPath
            }/${name}.${ext}`

        const pass = new Stream.PassThrough()
        const writeStream = fs.createWriteStream(filePath)

        pass.pipe(writeStream)

        return {
            writeStream: pass,
            promise: Promise.resolve(),
            url: `${this.serverUrl}/${filePath}`,
            fileKey: filePath,
        }
    }
    async getDownloadStream({
        fileKey,
        isPrivate = true,
    }: GetUploadedFileType
    ): Promise<NodeJS.ReadableStream> {
        const filePath = `${isPrivate ?
            this.publicPath : this.protectedPath
            }/${fileKey}`
        const readStream = fs.createReadStream(filePath)

        return readStream
    }
    async getPresignedDownloadUrl({
        fileKey,
        isPrivate = true,
    }: GetUploadedFileType
    ): Promise<string> {
        // Local upload doesn't provide
        // support for presigned URLs,
        // so just return the file's URL.

        const filePath = `${isPrivate ?
            this.publicPath : this.protectedPath
            }/${fileKey}`
        return `${this.serverUrl}/${filePath}`
    }
    async upload(
        fileData: Express.Multer.File
    ): Promise<FileServiceUploadResult> {
        const filePath =
            `${this.publicPath}/${fileData.originalname}`
        fs.copyFileSync(fileData.path, filePath)
        return {
            url: `${this.serverUrl}/${filePath}`,
            key: filePath,
        }
    }
    async uploadProtected(
        fileData: Express.Multer.File
    ): Promise<FileServiceUploadResult> {
        const filePath =
            `${this.protectedPath}/${fileData.originalname}`
        fs.copyFileSync(fileData.path, filePath)
        return {
            url: `${this.serverUrl}/${filePath}`,
            key: filePath
        }
    }
    async delete(
        fileData: DeleteFileType
    ): Promise<void> {
        fs.rmSync(fileData.fileKey)
    }
}
export default LocalFileService;