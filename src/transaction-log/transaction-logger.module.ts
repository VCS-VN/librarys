import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TransactionLoggerService } from './transaction-logger.service';
import {
  TransactionLogger,
  TransactionLoggerSchema,
} from './schemas/transaction-logger.schema';
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
          name: TransactionLogger.name,
          schema: TransactionLoggerSchema,
        },
      ],
      'JSON_DB',
    ),
  ],
  providers: [TransactionLoggerService],
  exports: [TransactionLoggerService],
})
export class TransactionLoggerModule {}
