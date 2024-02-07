import type { MiddlewaresConfig } from "@medusajs/medusa"
import type { 
  MedusaNextFunction, 
  MedusaRequest, 
  MedusaResponse,
} from "@medusajs/medusa"
import { authenticateApikey } from "src/services/apikey_authentication";

const storeMiddleware = async (
  req: MedusaRequest, 
  res: MedusaResponse, 
  next: MedusaNextFunction
) => {
  // do something
  await authenticateApikey(req, res, next)
  // next()
}

export const config: MiddlewaresConfig = {
  routes: [
    {
      matcher: "/store/*",
      middlewares: [storeMiddleware, authenticateApikey],
    },
  ],
}