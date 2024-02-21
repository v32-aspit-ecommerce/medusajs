import type { MiddlewaresConfig } from "@medusajs/medusa"
import type { 
  MedusaNextFunction, 
  MedusaRequest, 
  MedusaResponse,
} from "@medusajs/medusa"
import { MedusaContainer } from 'medusa-interfaces'
import { MedusaContext } from "@medusajs/utils";
import ApiKeyMiddleware from '../services/api-key-service';

const apiKeyMiddleware = async (
  req: MedusaRequest,
  res: MedusaResponse,
  next: MedusaNextFunction) => {
  const apiKeyMiddleware = new ApiKeyMiddleware(MedusaContainer);
  const apiKey = req.headers["x-api-key"].toString();
  await apiKeyMiddleware.validateApiKey(req, res, apiKey);
  }

export const config: MiddlewaresConfig = {
  routes: [
    {
      matcher: "/store/*",
      middlewares: [apiKeyMiddleware],
    },
  ],
}