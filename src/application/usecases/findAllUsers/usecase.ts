import { Usecase } from "@/application/seedwork";
import { FindAllUsersUsecaseRequest, FindAllUsersUsecaseResponse } from ".";

export interface FindAllUsersUsecase
  extends Usecase<FindAllUsersUsecaseRequest, FindAllUsersUsecaseResponse> {
  invoke(
    request: FindAllUsersUsecaseRequest
  ): Promise<FindAllUsersUsecaseResponse>;
}
