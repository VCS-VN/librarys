import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class RequestLogger {
  @Prop({
    type: String,
  })
  title: string;

  @Prop({
    type: String,
  })
  url: string;

  @Prop({
    type: Object,
  })
  request: any;

  @Prop({
    type: Object,
  })
  response: any;

  @Prop({
    type: Object,
  })
  headers: any;

  @Prop({
    type: Date,
  })
  createdAt: Date;
}

export const RequestLoggerSchema = SchemaFactory.createForClass(RequestLogger);
