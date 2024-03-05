import type{
    MedusaRequest,
    MedusaResponse,
    UserService,
} from "@medusajs/medusa"



// path = ../admin/file-service/
export const GET = async(
    req: MedusaRequest,
    res: MedusaResponse
) => {
    res.json({
        message: "hello, wordd"
    })
}
export const AUTHENTICATE = false