import { Repository } from 'typeorm';
import { Credential } from './credential.entity';
export declare class CredentialsService {
    private credentialsRepository;
    constructor(credentialsRepository: Repository<Credential>);
    findOne(id: number): Promise<Credential | undefined>;
    findCredentialByEmail(email: string): Promise<Credential | undefined>;
}
