import { FindAllUsersUsecase } from '@/application/usecases/findAllUsers';
import { container } from '@/web/registories'
import { TYPES } from '../registories/inversify.types';

export const queryResolver = {
  Query: {
    hello: async () => {
      return 'Hello World!';
    },
    users: async () => {
      const findAllUsersInteractor = container.get<FindAllUsersUsecase>(TYPES.FindAllUsersUsecase);
      const response = await findAllUsersInteractor.invoke({});
      return response.data;
    }
  },
};