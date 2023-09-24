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
    private readonly transactionLoggerModel: Model<TransactionLogger>,
  ) {}

  async createTransactionLog(data: TransactionLogger) {
    return this.transactionLoggerModel.create(data);
  }
}
