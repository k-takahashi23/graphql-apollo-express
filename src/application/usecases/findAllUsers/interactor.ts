import { FindAllUsersUsecase, FindAllUsersUsecaseRequest, FindAllUsersUsecaseResponse } from ".";

export class FindAllUsersInteractor implements FindAllUsersUsecase {
  public async invoke(_request: FindAllUsersUsecaseRequest): Promise<FindAllUsersUsecaseResponse> {
    return {
      data: [
        {
          id: 'aaa',
          name: 'aaa',
          age: 18,
        },
        {
          id: 'aaa',
          name: 'aaa',
          age: 18,
        },
        {
          id: 'aaa',
          name: 'aaa',
          age: 18,
        }
      ],
    }
  }
}