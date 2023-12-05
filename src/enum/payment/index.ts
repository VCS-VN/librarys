export enum PAYMENT_TYPE {
  CASH = 'CASH',
  CARD = 'CARD',
  PAY_ON_DELIVERY = 'PAY_ON_DELIVERY',
  PAY_ON_DONE = 'PAY_ON_DONE',
  CREDIT_CARD = 'CREDIT_CARD',
  DEBIT_CARD = 'DEBIT_CARD',
  PAYPAL = 'PAYPAL',
  APPLE_PAY = 'APPLE_PAY',
  GOOGLE_PAY = 'GOOGLE_PAY',
  POS = 'POS',
}

export enum PAYMENT_RESOURCE {
  NORMAL = 'normal',
  STORE_ORDER = 'store-order',
  CUSTOMER_ORDER = 'customer-order',
  CUSTOMER_BOOKING = 'customer-booking',
  STORE_BOOKING = 'store-booking',
}

export enum WITHDRAW_TYPE {
  AIR_WALLEX = 'AIR_WALLEX',
}

export enum PAYOUT_RESOURCE {
  STORE = 'store',
}

export enum REFUND_RESOURCE {
  STORE_ORDER = 'store-order',
  CUSTOMER_ORDER = 'customer-order',
  CUSTOMER_BOOKING = 'customer-booking',
  STORE_BOOKING = 'store-booking',
}

export enum PAYMENT_PROVIDER {
  AIR_WALLEX = 'AIR_WALLEX',
  STRIPE = 'STRIPE',
}
