import type { MiddlewaresConfig } from "@medusajs/medusa"
import { 
  MedusaNextFunction, 
  MedusaRequest, 
  MedusaResponse,
  PublishableApiKey,
  Logger
} from "@medusajs/medusa"
import { log } from "console";
import { EntityManager } from "typeorm";

// const printReq(req: MedusaRequest) {
//   const list = []
//   for (Headers in req.headers) {
// }

const loggerMiddleware = async(
  req: MedusaRequest,
  res: MedusaResponse,
  next: MedusaNextFunction
): Promise<void> => {
  const logger: Logger = req.scope.resolve("logger");
  // logger.setLogLevel("debug");
  // logger.debug(`request to ${req.url} with content headers: ${JSON.stringify(req.headers)} and params: ${JSON.stringify(req.params)}`)
  next()
}

const apiKeyMiddleware = async (
  req: MedusaRequest,
  res: MedusaResponse,
  next: MedusaNextFunction) => {
  const logger: Logger = req.scope.resolve("logger")
  logger.setLogLevel("warn")
    try {
    const apiKey = req.headers["x-api-key"].toString();
    const manager: EntityManager = req.scope.resolve("manager");
    const publishableApiKeyRepository = manager.getRepository(PublishableApiKey);
    const apiKeyRecord = await publishableApiKeyRepository.findOne({ where: { id: apiKey } });
    if (apiKeyRecord == null) {
      logger.warn(`API key ${apiKey} not found`);
      return res.status(401).json({ error: "Invalid API key"}); 
    }
    if (apiKeyRecord.revoked_at != null || apiKeyRecord.revoked_by != null){
      logger.warn(`API key ${apiKey} has been revoked`);
      return res.status(401).json({ error: "API key has been revoked"})
    }
    next();
  } catch (error) {
    if (error instanceof TypeError){
      logger.warn("Missing API key in header");
      return res.status(400).json({ error: "Missing API key in header", missing_field: "x-api-key" });
    }
    logger.error(`error authenticating API key: ${error}`);
    return res.status(500).json({ error: "Internal Server Error" });
  }
  }

export const config: MiddlewaresConfig = {
  routes: [
    {
      matcher: "/store/*",
      middlewares: [loggerMiddleware, apiKeyMiddleware],
    },
  ],
}