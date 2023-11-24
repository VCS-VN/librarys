export interface ICreateBusiness {
  externalBusinessId: string;
  name: string;
  description: string;
  activationStatus?: string;
}
export interface IDoorDashBusiness {
  name?: string;
  description?: string;
  externalBusinessId?: string;
  activationStatus?: string;
  createdAt?: Date;
  lastUpdatedAt?: string;
  isTest?: boolean;
  externalMetadata?: {
    numberOfStores?: string;
    clientEmail?: string;
    clientPhoneNumber?: string;
    externalStoreIds?: string[];
  };
}

export interface ICreateDoorDashStore {
  externalStoreId: string;
  name: string;
  phoneNumber: string;
  address: string;
}

export interface IDoorDashStore {
  name?: string;
  externalBusinessId?: string;
  externalStoreId?: string;
  phoneNumber?: string;
  address?: string;
  status?: string;
  is_test?: string;
  created_at?: Date;
  last_updated_at?: Date;
}
