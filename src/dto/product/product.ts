import { STATUS } from '@/enum';
import {
  IsEnum,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  IsUUID,
  Min,
} from 'class-validator';

export class ProductModel {
  @IsUUID()
  id: string;

  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsObject()
  @IsOptional()
  metadata?: any;

  @IsEnum(STATUS)
  statusId: STATUS;

  @IsString()
  @IsOptional()
  sku?: string;

  @IsNumber()
  @Min(0)
  @IsOptional()
  height?: number;

  @IsNumber()
  @Min(0)
  @IsOptional()
  width?: number;

  @IsNumber()
  @Min(0)
  @IsOptional()
  length?: number;

  @IsNumber()
  @Min(0)
  @IsOptional()
  volume?: number;

  @IsOptional()
  hsCode?: string;

  @IsOptional()
  hsCodeId?: number;

  @IsOptional()
  unit?: string;

  @IsOptional()
  thirdPartyId?: string;

  @IsOptional()
  thirdPartyPlatform?: string;

  @IsOptional()
  image?: string;

  @IsOptional()
  variants?: any[];

  @IsOptional()
  isStockOption?: boolean;
}
