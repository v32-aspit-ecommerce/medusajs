import { TransactionBaseService } from "@medusajs/medusa";

class ApiKeyService extends TransactionBaseService{
    async validateApikey(apiKey: string): Promise<boolean>{
        const result = await this.manager_.query(`SELECT * FROM apikeys WHERE apikey = ${apiKey}`);
        if (result.length > 0){
            return true;
        }else{
            return false;
        }
    }
}
export { ApiKeyService };