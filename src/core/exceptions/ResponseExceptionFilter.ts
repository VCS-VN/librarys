import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { ERRORS } from '../errors';

@Catch(HttpException)
export class AllExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status = exception.status;

    switch (+status) {
      case 400:
        return response.code(200).send({
          errorCode: exception.response?.errorCode || '007',
          message: exception.response?.message || ERRORS['007'],
          result: null,
        });

      case 401:
        return response.status(200).send({
          errorCode: exception.response?.errorCode || '006',
          message: exception.response?.message || ERRORS['006'],
          result: null,
        });

      case 403:
        return response.code(200).send({
          errorCode: exception.response?.errorCode || '005',
          message: exception.response?.message || ERRORS['005'],
          result: null,
        });

      case 404:
        return response.code(200).send({
          errorCode: exception.response?.errorCode || '007',
          message: exception.response?.message || ERRORS['007'],
          result: null,
        });

      case 500:
        return response.code(200).send({
          errorCode: exception.response?.errorCode || '100',
          message: exception.response?.message || ERRORS['SERVER'],
          result: exception.response?.result,
        });

      case 502:
        return response.code(200).send({
          errorCode: exception.response?.errorCode || '100',
          message: exception.response?.message || ERRORS['SERVER'],
          result: exception.response?.result,
        });

      default:
        response.code(status).send({
          statusCode: status,
          message: exception.getResponse(),
        });
        break;
    }
  }
}
