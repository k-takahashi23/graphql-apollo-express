import { Entity } from "@/domain/seedwork";

export interface User extends Entity {
  id: string;
  name: string;
  age: number;
}