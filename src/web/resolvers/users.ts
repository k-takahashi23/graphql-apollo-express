import { FindAllUsersUsecase } from '@/application/usecases/findAllUsers';
import { FindUserByIdUsecase } from '@/application/usecases/findUserById';
import { User } from '@/domain/aggregatesModels/user';
import { container } from '@/web/registories';
import { TYPES } from '../registories/inversify.types';

export const usersResolver = {
  Query: {
    users: async (): Promise<User[]> => {
      const findAllUsersInteractor = container.get<FindAllUsersUsecase>(
        TYPES.FindAllUsersUsecase
      );
      const response = await findAllUsersInteractor.invoke({});
      return response.data;
    },
    user: async (userId: string): Promise<User> => {
      const findUserByIdInteractor = container.get<FindUserByIdUsecase>(
        TYPES.FindUserByIdUsecase
      );
      const request = {
        userId: userId,
      };
      const response = await findUserByIdInteractor.invoke(request);
      return response.data;
    },
  },
};
