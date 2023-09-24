import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class TransactionLogger {
  @Prop({
    type: String,
  })
  transactionId?: any;

  @Prop({
    type: Object,
  })
  data: any;

  @Prop({
    type: Date,
  })
  createdAt: Date;

  @Prop({
    title: String,
  })
  title: string;
}

export const TransactionLoggerSchema =
  SchemaFactory.createForClass(TransactionLogger);
