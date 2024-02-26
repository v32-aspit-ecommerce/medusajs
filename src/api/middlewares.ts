import type { MiddlewaresConfig } from "@medusajs/medusa"
import { 
  MedusaNextFunction, 
  MedusaRequest, 
  MedusaResponse,
  PublishableApiKey
} from "@medusajs/medusa"
import { EntityManager } from "typeorm";

const apiKeyMiddleware = async (
  req: MedusaRequest,
  res: MedusaResponse,
  next: MedusaNextFunction) => {
    const apiKey = req.headers["x-api-key"].toString();
    if (!apiKey){
      return res.status(400).json({ error: "Missing API key in header", missing_field: "x-api-key" });
    }
    const manager: EntityManager = req.scope.resolve("manager");
    const publishableApiKeyRepository = manager.getRepository(PublishableApiKey);
    const apiKeyRecord = await publishableApiKeyRepository.findOne({ where: { id: apiKey } });
    if (apiKeyRecord == null) {
      return res.status(401).json({ error: "Invalid API key"}); 
    }
    if (apiKeyRecord.revoked_at != null || apiKeyRecord.revoked_by != null){
      return res.status(401).json({ error: "API key has been revoked"})
    }
    next();
  }

export const config: MiddlewaresConfig = {
  routes: [
    {
      matcher: "/store/*",
      middlewares: [apiKeyMiddleware],
    },
  ],
}