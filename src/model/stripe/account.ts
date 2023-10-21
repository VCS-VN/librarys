export interface CreateAccountModel {
  type?: 'custom' | 'express' | 'standard';
  email?: string;
  cardPayments?: string;
  transfers?: string;
  country?: string;
}

export interface AccountLinkModel {
  accountId?: string;
  type?:
    | 'account_onboarding'
    | 'account_update'
    | 'custom_account_update'
    | 'custom_account_verification';
  refreshURL?: string;
  returnURL?: string;
}

export interface BankAccountLinkModel {
  accountId?: string;
  token?: string;
}

export interface BankTokenModel {
  country: string;
  currency: string;
  accountHolderName: string;
  accountHolderType: 'company' | 'individual';
  routingNumber: string;
  accountNumber: string;
}
