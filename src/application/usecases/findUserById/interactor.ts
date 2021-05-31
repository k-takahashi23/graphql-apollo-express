import 'reflect-metadata';
import { UsersRepository } from '@/domain/aggregatesModels/user/usersRepository';
import { inject, injectable } from 'inversify';
import {
  FindUserByIdUsecase,
  FindUserByIdUsecaseRequest,
  FindUserByIdUsecaseResponse,
} from '.';
import { TYPES } from '@/web/registories/inversify.types';

@injectable()
export class FindUserByIdInteractor implements FindUserByIdUsecase {
  private usersRepository: UsersRepository;

  public constructor(
    @inject(TYPES.UsersRepository) usersRepository: UsersRepository
  ) {
    this.usersRepository = usersRepository;
  }

  public async invoke(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    request: FindUserByIdUsecaseRequest
  ): Promise<FindUserByIdUsecaseResponse> {
    const user = await this.usersRepository.find(request.userId);
    return {
      data: user,
    };
  }
}
