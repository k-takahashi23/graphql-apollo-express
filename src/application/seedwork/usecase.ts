import { UsecaseRequest } from "./usecaseRequest";
import { UsecaseResponse } from "./usecaseResponse";

export interface Usecase<TRequest extends UsecaseRequest, TResponse extends UsecaseResponse> {
  invoke(request: UsecaseRequest): Promise<UsecaseResponse>;
}