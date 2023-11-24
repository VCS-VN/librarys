export interface ICreateBusiness {
  externalBusinessId: string;
  name: string;
  description?: string;
  activationStatus?: string;
}

export interface IDoorDashBusiness {
  name: string;
  description: string;
  externalBusinessId: string;
  activationStatus: string;
  createdAt: Date;
  lastUpdatedAt: string;
  isTest: boolean;
  externalMetadata: {
    numberOfStores: string;
    clientEmail: string;
    clientPhoneMumber: string;
    externalStoreIds: string[];
  };
}
