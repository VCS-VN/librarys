import { IsOptional, IsString, IsUUID, ValidateIf } from 'class-validator';
import { Unit } from 'convert-units';

export class OptionModel {
  @IsUUID()
  id: string;

  @IsString()
  name: string;

  @IsOptional()
  @ValidateIf((o) => !o.valueType)
  valueType: Unit;
}
