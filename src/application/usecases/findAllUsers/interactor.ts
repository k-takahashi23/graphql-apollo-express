import { UsersRepository } from "@/domain/aggregatesModels/user/usersRepository";
import { FindAllUsersUsecase, FindAllUsersUsecaseRequest, FindAllUsersUsecaseResponse } from ".";

export class FindAllUsersInteractor implements FindAllUsersUsecase {
  private usersRepository: UsersRepository;

  public constructor(usersRepository: UsersRepository) {
    this.usersRepository = usersRepository;
  }

  public async invoke(_request: FindAllUsersUsecaseRequest): Promise<FindAllUsersUsecaseResponse> {
    const users = await this.usersRepository.findAll();;
    return {
      data: users,
    }
  }
}