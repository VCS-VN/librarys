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
  E_COMMERCE_STORE_ORDER = 'e_commerce_store_order',
  E_COMMERCE_CUSTOMER_ORDER = 'e_commerce_customer_order',
  E_COMMERCE_CUSTOMER_BOOKING = 'e_commerce_customer_booking'
}

export enum WITHDRAW_TYPE {
  AIR_WALLEX = 'AIR_WALLEX',
}

export enum PAYOUT_RESOURCE {
  E_COMMERCE_STORE = 'e_commerce_store',
}

export enum REFUND_RESOURCE {
  E_COMMERCE_STORE = 'e_commerce_store',
}
