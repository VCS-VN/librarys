import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import dayjs from 'dayjs';
import { RequestLogger } from './schemas/request-logger.schema';

type CreateLoggerRequest = {
  url?: string;
  title: string;
  header?: any;
  request: any;
  response: any;
  createdAt?: Date;
};

@Injectable()
export class RequestLoggerService {
  constructor(
    @InjectModel(RequestLogger.name, 'JSON_DB')
    private readonly messageModel: Model<RequestLogger>,
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
