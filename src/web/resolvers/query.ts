import { FindAllUsersInteractor } from '@/application/usecases/findAllUsers';
import { MockUsersRepository } from '@/infrastructure/repositories/usersRepository';

export const queryResolver = {
  Query: {
    hello: async () => {
      return 'Hello World!';
    },
    users: async () => {
      // TODO: DI
      const usersRepository = new MockUsersRepository();
      const findAllUsersInteractor = new FindAllUsersInteractor(usersRepository);
      const response = await findAllUsersInteractor.invoke({});
      return response.data;
    }
  },
};