import { FindAllUsersInteractor } from '@/application/usecases/findAllUsers';

export const queryResolver = {
  Query: {
    hello: async () => {
      return 'Hello World!';
    },
    users: async () => {
      const findAllUsersInteractor = new FindAllUsersInteractor();
      const response = await findAllUsersInteractor.invoke({});
      return response.data;
    }
  },
};