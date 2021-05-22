import { User } from "@/domain/aggregatesModels/user"

export interface FindAllUsersUsecaseResponse {
  data: User[];
}
