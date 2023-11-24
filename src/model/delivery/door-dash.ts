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
