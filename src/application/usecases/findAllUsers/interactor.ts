import "reflect-metadata";
import { UsersRepository } from "@/domain/aggregatesModels/user/usersRepository";
import { inject, injectable } from "inversify";
import { FindAllUsersUsecase, FindAllUsersUsecaseRequest, FindAllUsersUsecaseResponse } from ".";

@injectable()
export class FindAllUsersInteractor implements FindAllUsersUsecase {
  private usersRepository: UsersRepository;

  public constructor(@inject('UsersRepository') usersRepository: UsersRepository) {
    this.usersRepository = usersRepository;
  }

  public async invoke(_request: FindAllUsersUsecaseRequest): Promise<FindAllUsersUsecaseResponse> {
    const users = await this.usersRepository.findAll();;
    return {
      data: users,
    }
  }
}