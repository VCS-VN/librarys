import { TWILIO_CALL_DIRECTION } from '@/enum';
import { IConversation } from '.';

export interface ITwilioSMSWebhook {
  ToCountry: string;
  ToState: string;
  SmsMessageSid: string;
  NumMedia: string;
  ToCity: string;
  FromZip: string;
  SmsSid: string;
  FromState: string;
  SmsStatus: string;
  FromCity: string;
  Body: string;
  FromCountry: string;
  To: string;
  ToZip: string;
  NumSegments: string;
  MessageSid: string;
  AccountSid: string;
  From: string;
  ApiVersion: string;
}

export interface ITwilioCallWebhook {
  direction: TWILIO_CALL_DIRECTION;
  conversationId?: string;
  conversation: IConversation;
}
