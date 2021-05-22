import 'reflect-metadata'
import { Container } from 'inversify'
import { TYPES } from './inversify.types'
import {
  FindAllUsersInteractor,
  FindAllUsersUsecase,
} from '@/application/usecases/findAllUsers'
import { UsersRepository } from '@/domain/aggregatesModels/user'
import { MockUsersRepository } from '@/infrastructure/repositories'

const container = new Container()

// Usecases
container
  .bind<FindAllUsersUsecase>(TYPES.FindAllUsersUsecase)
  .to(FindAllUsersInteractor)

// Repositories
container.bind<UsersRepository>(TYPES.UsersRepository).to(MockUsersRepository)

export { container }
