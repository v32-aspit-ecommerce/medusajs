import type { MiddlewaresConfig } from "@medusajs/medusa"
import type { 
  MedusaNextFunction, 
  MedusaRequest, 
  MedusaResponse,
} from "@medusajs/medusa"
import { MedusaContainer } from 'medusa-interfaces'
import ApiKeyMiddleware from '../services/api-key-service';

const apiKeyMiddleware = async (
  req: MedusaRequest,
  res: MedusaResponse,
  next: MedusaNextFunction) => {
  const apiKeyMiddleware = new ApiKeyMiddleware(MedusaContainer);
  await apiKeyMiddleware.validateApiKey(req, res, next);
  }

export const config: MiddlewaresConfig = {
  routes: [
    {
      matcher: "/store/*",
      middlewares: [apiKeyMiddleware],
    },
  ],
}