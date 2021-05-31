import 'reflect-metadata';
import { User } from '@/domain/aggregatesModels/user';
import { UsersRepository } from '@/domain/aggregatesModels/user/usersRepository';
import { injectable } from 'inversify';

@injectable()
export class MockUsersRepository implements UsersRepository {
  public async findAll(): Promise<User[]> {
    const mockUsers = [
      {
        id: 'user1',
        name: 'aaa',
        age: 18,
      },
      {
        id: 'user2',
        name: 'bbb',
        age: 20,
      },
      {
        id: 'user3',
        name: 'ccc',
        age: 25,
      },
    ];
    return mockUsers;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async find(_id: string): Promise<User> {
    const mockUser = {
      id: 'user4',
      name: 'ddd',
      age: 28,
    };
    return mockUser;
  }
}
