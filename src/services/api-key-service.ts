import { MedusaRequest, MedusaResponse, MedusaNextFunction, PublishableApiKey } from "@medusajs/medusa";
import { TransactionBaseService } from "@medusajs/medusa";
import { InjectEntityManager, MedusaContext } from "@medusajs/utils";
// import { PublishableApiKey } from "../models/PublishableApiKey";
import { EntityManager, Repository } from "typeorm";

class MissingParameterError extends Error {
    required_parameter: string;
    constructor(parameterName) {
        super(`Your request is missing the '${parameterName}' header, which is required for authentication. Please include your API key in the '${parameterName}' header of your request.`);
        this.name = "MissingParameterError";
        this.required_parameter = parameterName;
    }
}

class ApiKeyMiddleware extends TransactionBaseService {
    protected publishableApiKeyRepository: Repository<PublishableApiKey>;
    public constructor(container) {
        console.log("loading constructor")
        super(container)
        // this.publishableApiKeyRepository = container.publishableApiKeyRepository;
        console.log("Constructer loaded")
    }
    async validateApiKey( req: MedusaRequest, res: MedusaResponse, apiKey) {
        console.log("Creating manager")
        const manager: EntityManager = req.scope.resolve("manager");
        const publishableApiKeyRepository = manager.getRepository(PublishableApiKey);
        const apiKeyRecord = await publishableApiKeyRepository.findOne({ where: { id: apiKey } });
        console.log("record found")
        console.log(apiKeyRecord)
    }
    // async validateApiKey(apiKey){

    //     this.atomicPhase_(async(manager) => {
    //         const apiKeyRepository = manager.withRepository(this.publishableApiKeyRepository);
    //         const apiKeyRecord = await this.publishableApiKeyRepository.findOne({ where: {id : apiKey} });
    //         console.log("Record found");
    //     })

    // }

    // @InjectEntityManager()
    // async validateApiKey(apiKey: string, @MedusaContext() context) {
    //     console.log("Creating manager")
    //     const manager = context.transactionManager;
    //     console.log("Manager created");
    //     const isValid = await manager.transaction(async (transactionManager) => {
    //         console.log("Getting repository..")
    //         const apiKeyRepository = transactionManager.getRepository("publishable_api_key");
    //         console.log("Finding record...");
    //         const apiKeyRecord = await apiKeyRepository.findOne({ where: { id: apiKey } });
    //         console.log("Record found");
    //         return !!apiKeyRecord
    //     })
    // }

}
export default ApiKeyMiddleware;