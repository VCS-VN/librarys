import { CONTACT_MESSAGE_TYPE, ENTITY_TYPE, STATUS } from '@/enum';

export * from './webhook';

export interface IContact {
  id?: string;
  name?: string;
  entityId?: string;
  entityType?: ENTITY_TYPE;
  phone?: string;
  status?: STATUS;
  createdAt?: Date;
  updatedAt?: Date;
  conversations?: IConversation[];
}

export interface IConversation {
  id?: string;
  contactId?: string;
  entityId?: string;
  entityType?: ENTITY_TYPE;
  lastMessage?: string;
  status?: STATUS;
  createdAt?: Date;
  updatedAt?: Date;
  contact?: IContact;
  messages?: IContactMessage[];
}

export interface IContactMessage {
  id?: string;
  conversationId?: string;
  type?: CONTACT_MESSAGE_TYPE;
  content?: string;
  phoneNumber?: string;
  status?: STATUS;
  sender?: string;
  duration?: number;
  callDuration?: number;
  createdAt?: Date;
}
