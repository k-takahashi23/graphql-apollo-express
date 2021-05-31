import { AggregateRoot } from './aggregateRoot';

export interface Repository<T extends AggregateRoot> {
  findAll(): Promise<T[]>;
  find(id: string): Promise<T>;
}
