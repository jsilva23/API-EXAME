import { AuthService } from './auth.service';
import { SignInDTO } from './sigin.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signIn(signInDTO: SignInDTO): Promise<any>;
}
