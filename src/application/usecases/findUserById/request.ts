import { UsecaseRequest } from '@/application/seedwork';

export interface FindUserByIdUsecaseRequest extends UsecaseRequest {
  userId: string;
}
