import { ENTITY_TYPE, STATUS } from '@/enum';

export interface IImageAsset {
  id?: string;
  entityId?: string;
  entityType?: ENTITY_TYPE;
  url?: string;
  status?: STATUS;
}
