export interface IStripePaymentResultWebhook {
  id: string;
  object: string;
  api_version: string;
  created: number;
  data: Data;
  livemode: boolean;
  pending_webhooks: number;
  request: Request;
  type: string;
}

interface Data {
  object: ObjectData;
}

interface ObjectData {
  id: string;
  object: string;
  amount: number;
  amount_capturable: number;
  amount_details: AmountDetails;
  amount_received: number;
  application: any;
  application_fee_amount: number;
  automatic_payment_methods: any;
  canceled_at: any;
  cancellation_reason: any;
  capture_method: string;
  charges: Charges;
  client_secret: string;
  confirmation_method: string;
  created: number;
  currency: string;
  customer: any;
  description: string;
  invoice: any;
  last_payment_error: any;
  latest_charge: any;
  livemode: boolean;
  metadata: Metadata;
  next_action: any;
  on_behalf_of: any;
  payment_method: any;
  payment_method_configuration_details: any;
  payment_method_options: PaymentMethodOptions;
  payment_method_types: string[];
  processing: any;
  receipt_email: any;
  review: any;
  setup_future_usage: any;
  shipping: any;
  source: any;
  statement_descriptor: string;
  statement_descriptor_suffix: any;
  status: string;
  transfer_data: TransferData;
  transfer_group: any;
}

interface AmountDetails {
  tip: Tip;
}

interface Tip {}

interface Charges {
  object: string;
  data: any[];
  has_more: boolean;
  total_count: number;
  url: string;
}

interface Metadata {}

interface PaymentMethodOptions {
  card_present: CardPresent;
}

interface CardPresent {
  request_extended_authorization: boolean;
  request_incremental_authorization_support: boolean;
  routing: Routing;
}

interface Routing {
  requested_priority: any;
}

interface TransferData {
  destination: string;
}

interface Request {
  id: string;
  idempotency_key: string;
}
