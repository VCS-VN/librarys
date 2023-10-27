export interface IAirwallexPaymentResultWebhook {
  id: string;
  name: string;
  account_id: string;
  customerId: string;
  data: IAirwallexDataPaymentResult;
  created_at: string;
  createdAt: string;
  version: string;
  sourceId: string;
}

export interface IAirwallexDataPaymentResult {
  object: Object;
}

export interface IAirwallexObjectPaymentResult {
  amount: number;
  base_amount: number;
  captured_amount: number;
  created_at: string;
  currency: string;
  descriptor: string;
  id: string;
  latest_payment_attempt: LatestPaymentAttempt;
  merchant_order_id: string;
  payment_method_options: PaymentMethodOptions;
  request_id: string;
  risk_control_options: RiskControlOptions;
  status: string;
  updated_at: string;
}

export interface LatestPaymentAttempt {
  amount: number;
  authentication_data: AuthenticationData;
  authorization_code: string;
  captured_amount: number;
  created_at: string;
  currency: string;
  device: Device;
  id: string;
  merchant_order_id: string;
  payment_intent_id: string;
  payment_method: PaymentMethod;
  provider_original_response_code: string;
  provider_transaction_id: string;
  refunded_amount: number;
  settle_via: string;
  status: string;
  updated_at: string;
}

export interface AuthenticationData {
  avs_result: string;
  cvc_code: string;
  cvc_result: string;
  ds_data: DsData;
  fraud_data: FraudData;
}

export interface DsData {
  cavv: string;
  eci: string;
  enrolled: string;
  frictionless: string;
  liability_shift_indicator: string;
  pa_res_status: string;
  retry_count_for_auth_decline: number;
  version: string;
  xid: string;
}

export interface FraudData {
  action: string;
  score: string;
}

export interface Device {
  cookies_accepted: string;
  device_id: string;
  host_name: string;
  http_browser_type: string;
  ip_address: string;
  ip_network_address: string;
}

export interface PaymentMethod {
  card: Card;
  type: string;
}

export interface Card {
  billing: Billing;
  bin: string;
  brand: string;
  card_type: string;
  cvc_check: string;
  expiry_month: string;
  expiry_year: string;
  fingerprint: string;
  is_commercial: boolean;
  issuer_country_code: string;
  issuer_name: string;
  last4: string;
  name: string;
  number_type: string;
}

export interface Billing {
  first_name: string;
  last_name: string;
}

export interface PaymentMethodOptions {
  card: Card2;
}

export interface Card2 {
  risk_control: RiskControl;
  three_ds_action: string;
}

export interface RiskControl {
  skip_risk_processing: boolean;
  three_domain_secure_action: string;
  three_ds_action: string;
}

export interface RiskControlOptions {
  skip_risk_processing: boolean;
  tra_applicable: boolean;
}
