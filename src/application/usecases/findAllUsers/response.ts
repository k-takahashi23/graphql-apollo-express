import { UsecaseResponse } from "@/application/seedwork";
import { User } from "@/domain/aggregatesModels/user";

export interface FindAllUsersUsecaseResponse extends UsecaseResponse {
  data: User[];
}
