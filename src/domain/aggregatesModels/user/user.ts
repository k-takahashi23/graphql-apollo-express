import { AggregateRoot } from '@/domain/seedwork';

export interface User extends AggregateRoot {
  id: string;
  name: string;
  age: number;
}
