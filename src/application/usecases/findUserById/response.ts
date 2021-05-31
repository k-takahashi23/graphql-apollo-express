import { UsecaseResponse } from '@/application/seedwork';
import { User } from '@/domain/aggregatesModels/user';

export interface FindUserByIdUsecaseResponse extends UsecaseResponse {
  data: User;
}
