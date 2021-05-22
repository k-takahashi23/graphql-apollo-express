import { User } from ".";

export interface UsersRepository {
  findAll(): Promise<User[]>
}