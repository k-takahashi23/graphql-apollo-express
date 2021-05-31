import { Usecase } from '@/application/seedwork';
import { FindUserByIdUsecaseRequest, FindUserByIdUsecaseResponse } from '.';

export interface FindUserByIdUsecase
  extends Usecase<FindUserByIdUsecaseRequest, FindUserByIdUsecaseResponse> {
  invoke(
    request: FindUserByIdUsecaseRequest
  ): Promise<FindUserByIdUsecaseResponse>;
}
