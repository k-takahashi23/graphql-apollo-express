import 'reflect-metadata';
import { Container } from 'inversify';
import { TYPES } from './inversify.types';
import {
  FindAllUsersInteractor,
  FindAllUsersUsecase,
} from '@/application/usecases/findAllUsers';
import { UsersRepository } from '@/domain/aggregatesModels/user';
import { MockUsersRepository } from '@/infrastructure/repositories';
import {
  FindUserByIdInteractor,
  FindUserByIdUsecase,
} from '@/application/usecases/findUserById';

const container = new Container();

// Usecases
container
  .bind<FindAllUsersUsecase>(TYPES.FindAllUsersUsecase)
  .to(FindAllUsersInteractor);
container
  .bind<FindUserByIdUsecase>(TYPES.FindUserByIdUsecase)
  .to(FindUserByIdInteractor);

// Repositories
container.bind<UsersRepository>(TYPES.UsersRepository).to(MockUsersRepository);

export { container };
