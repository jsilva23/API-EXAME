import { CredentialRole } from './credential_role';
import { Admin } from 'src/admins/admin.entity';
import { Author } from 'src/authors/author.entity';
import { User } from 'src/users/user.entity';
export declare class Credential {
    id: number;
    email: string;
    passwordHash: string;
    role: CredentialRole;
    credentialableType: 'admin' | 'author' | 'user';
    credentialableId: number;
    admin: Admin;
    author: Author;
    user: User;
    createdAt: Date;
    updatedAt: Date;
}
