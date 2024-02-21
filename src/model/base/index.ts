import { CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ulid } from 'ulid';

export abstract class AbstractEntity {
  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamptz',
  })
  createdAt?: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamptz',
  })
  updatedAt?: Date;
}

export function generateEntityId(idProperty: string, prefix?: string): string {
  if (idProperty) {
    return idProperty;
  }

  const id = ulid();
  prefix = prefix ? `${prefix}_` : '';
  return `${prefix}${id}`;
}

export interface IPaginationResponse<T> {
  data: T;
  page?: number;
  limit?: number;
  total?: number;
}
