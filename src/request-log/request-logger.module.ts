import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  RequestLogger,
  RequestLoggerSchema,
} from './schemas/request-logger.schema';
import { RequestLoggerService } from './request-logger.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.JSON_DB_URL, {
      connectionName: 'JSON_DB',
    }),
    MongooseModule.forFeature(
      [
        {
          name: RequestLogger.name,
          schema: RequestLoggerSchema,
        },
      ],
      'JSON_DB',
    ),
  ],
  providers: [RequestLoggerService],
  exports: [RequestLoggerService],
})
export class RequestLoggerModule {}
