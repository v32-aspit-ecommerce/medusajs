import { MedusaRequest, MedusaResponse, MedusaNextFunction } from "@medusajs/medusa";


export const authenticateApikey = async (req: MedusaRequest, res: MedusaResponse, next: MedusaNextFunction) => {
    const apikey = req.headers["x-api-key"];
    // check if the api key is present
    if (!apikey){
        return res.status(400).json({ message: "No API key provided" });
    }
    try{
        // Resolve the ApiKeyService from the scope
        const apiKeyService = req.scope.resolve("apiKeyService");
        
        // Check if the key is valid
        const isValidKey = await apiKeyService.validateApikey(apikey);

        // return 401 if the key is invalid
        if (!isValidKey){
            return res.status(401).json({ message: "Invalid API key"})
        }
        next();
    } catch (error){
        console.error(error);
        res.status(500).json({ message: "Internal Server Error"})
    }
};