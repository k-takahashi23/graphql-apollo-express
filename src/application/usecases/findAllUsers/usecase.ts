import { FindAllUsersUsecaseRequest, FindAllUsersUsecaseResponse } from ".";

export interface FindAllUsersUsecase {
  invoke(request: FindAllUsersUsecaseRequest): Promise<FindAllUsersUsecaseResponse>;
}
