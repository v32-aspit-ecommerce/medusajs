import { dataSource } from "@medusajs/medusa/dist/loaders/database";
import { PublishableApiKey } from '../models/PublishableApiKey';

 

const PublishableApiKeyRepository = dataSource.getRepository(PublishableApiKey);

export default PublishableApiKeyRepository;