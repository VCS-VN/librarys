import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { Response } from 'express';

@Catch(RpcException)
export class RpcExceptionFilter implements ExceptionFilter {
  catch(exception: RpcException, host: ArgumentsHost) {
    const error: any = exception.getError();
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    switch (error.code) {
      case 1:
        return response.status(HttpStatus.BAD_REQUEST).json({
          message: error.details,
          statusCode: HttpStatus.BAD_REQUEST,
        });

      case 2:
        return response.status(HttpStatus.BAD_REQUEST).json({
          message: error.details,
          statusCode: HttpStatus.BAD_REQUEST,
        });

      case 3:
        return response.status(HttpStatus.BAD_REQUEST).json({
          message: error.details,
          statusCode: HttpStatus.BAD_REQUEST,
        });

      case 5:
        return response.status(HttpStatus.NOT_FOUND).json({
          message: error.details,
          statusCode: HttpStatus.NOT_FOUND,
        });

      case 10:
        return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          message: error.details,
          statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        });

      case 13:
        return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          message: error.details,
          statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        });

      case 16:
        return response.status(HttpStatus.UNAUTHORIZED).json({
          message: error.details,
          statusCode: HttpStatus.UNAUTHORIZED,
        });
    }

    response.json(error);
  }
}
