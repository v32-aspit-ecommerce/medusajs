import { MedusaRequest, MedusaResponse, MedusaNextFunction, PublishableApiKey } from "@medusajs/medusa";
import { TransactionBaseService } from "@medusajs/medusa";
import { InjectEntityManager, MedusaContext } from "@medusajs/utils";
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
        console.log("Constructer loaded")
    }
    async validateApiKey( req: MedusaRequest, res: MedusaResponse, next: MedusaNextFunction) {
        // var apiKey = req.headers["x-api-key"].toString();
        var apiKey = "wdadswdas"
        console.log("Creating manager")
        const manager: EntityManager = req.scope.resolve("manager");
        const publishableApiKeyRepository = manager.getRepository(PublishableApiKey);
        const apiKeyRecord = await publishableApiKeyRepository.findOne({ where: { id: apiKey } });
        console.log("record found")
        console.log(apiKeyRecord)
        next();
    }
}
export default ApiKeyMiddleware;