import { JwtService } from '@nestjs/jwt';
import { CredentialsService } from 'src/credentials/credentials.service';
type SigInUserType = {
    email: string;
    password: string;
};
export declare class AuthService {
    private jwtService;
    private credentialsService;
    constructor(jwtService: JwtService, credentialsService: CredentialsService);
    signIn({ email, password }: SigInUserType): Promise<any>;
}
export {};
