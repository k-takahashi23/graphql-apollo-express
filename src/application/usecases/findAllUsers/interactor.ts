import 'reflect-metadata';
import { UsersRepository } from '@/domain/aggregatesModels/user/usersRepository';
import { inject, injectable } from 'inversify';
import {
  FindAllUsersUsecase,
  FindAllUsersUsecaseRequest,
  FindAllUsersUsecaseResponse,
} from '.';
import { TYPES } from '@/web/registories/inversify.types';

@injectable()
export class FindAllUsersInteractor implements FindAllUsersUsecase {
  private usersRepository: UsersRepository;

  public constructor(
    @inject(TYPES.UsersRepository) usersRepository: UsersRepository
  ) {
    this.usersRepository = usersRepository;
  }

  public async invoke(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _request: FindAllUsersUsecaseRequest
  ): Promise<FindAllUsersUsecaseResponse> {
    const users = await this.usersRepository.findAll();
    return {
      data: users,
    };
  }
}
