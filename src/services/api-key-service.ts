import { MedusaRequest, MedusaResponse, MedusaNextFunction } from "@medusajs/medusa";
import { TransactionBaseService } from "@medusajs/medusa";

// import { dataSource } from "@medusajs/medusa/dist/loaders/database";
// import { EntityManager } from "typeorm";
class MissingParameterError extends Error {
    required_parameter: string;
    constructor(parameterName){
        super(`Your request is missing the '${parameterName}' header, which is required for authentication. Please include your API key in the '${parameterName}' header of your request.`);
        this.name = "MissingParameterError";
        this.required_parameter = parameterName;
    }
}

class ApiKeyMiddleware extends TransactionBaseService {
    public constructor(container){
        super(container)
        console.log("Constructer loaded")
    }
    async validateApiKey(req: MedusaRequest, res: MedusaResponse, next: MedusaNextFunction){
        console.log("Validating API key...")
        const apiKey = req.headers["x-api-key"];
        req.scope.register({
            apiKey:{
                resolve: () => apiKey,
            },
        });
        if (!apiKey) {
            try {
                throw new MissingParameterError("x-api-key");
            } catch (error) {
                return res.status(400).json({ message: error.message, error: error.name, required_parameter: error.required_parameter});
            }
        }
        try {
            console.log("Creating manager...")
            const isValid = await this.atomicPhase_(async (manager) => {
              console.log("getting repository")
              const apiKeyRepository = manager.getRepository('publishable_api_key');
              console.log("finding record...")
              const apiKeyRecord = await apiKeyRepository.findOne({ where: { key: apiKey } });
              return !!apiKeyRecord;
            });
            if (!isValid) {
                return res.status(401).json({ message: "Invalid API key" });
            }
            next();
        }
        catch (error){
            console.error(error);
            return res.status(500).json({ message: "An error occured during API key validation."})
        }
    }
}
export default ApiKeyMiddleware;