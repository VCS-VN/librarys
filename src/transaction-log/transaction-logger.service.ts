import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import dayjs from 'dayjs';
import { TransactionLogger } from './schemas/transaction-logger.schema';

type CreateLoggerRequest = {
  url?: string;
  title: string;
  header?: any;
  request: any;
  response: any;
  createdAt?: Date;
};

@Injectable()
export class TransactionLoggerService {
  constructor(
    @InjectModel(TransactionLogger.name, 'JSON_DB')
    private readonly messageModel: Model<TransactionLogger>,
  ) {}

  async create(data: CreateLoggerRequest) {
    if (!data.title) {
      data.title = data.title;
    }
    // data.createdAt = dayjs.utc().toDate();

    data.createdAt = dayjs().toDate();

    return this.messageModel.create(data);
  }
}
