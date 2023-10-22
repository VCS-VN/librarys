import {
  ArgumentsHost,
  BadRequestException,
  Catch,
  ExceptionFilter,
  HttpStatus,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
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
        throw new BadRequestException(error.details);
        // return response.status(HttpStatus.EXPECTATION_FAILED).json({
        //   message: error.details,
        //   statusCode: HttpStatus.BAD_REQUEST,
        // });

      case 2:
        throw new BadRequestException(error.details);
        // return response.status(HttpStatus.EXPECTATION_FAILED).json({
        //   message: error.details,
        //   statusCode: HttpStatus.EXPECTATION_FAILED,
        // });

      case 3:
        throw new BadRequestException(error.details);
        // return response.status(HttpStatus.BAD_REQUEST).json({
        //   message: error.details,
        //   statusCode: HttpStatus.BAD_REQUEST,
        // });

      case 5:
        throw new NotFoundException(error.details);
        // return response.status(HttpStatus.NOT_FOUND).json({
        //   message: error.details,
        //   statusCode: HttpStatus.NOT_FOUND,
        // });

      case 10:
        throw new InternalServerErrorException(error.details);
        // return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        //   message: error.details,
        //   statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        // });

      case 13:
        throw new InternalServerErrorException(error.details);
        // return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        //   message: error.details,
        //   statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        // });

      case 16:
        throw new UnauthorizedException(error.details);
        // return response.status(HttpStatus.UNAUTHORIZED).json({
        //   message: error.details,
        //   statusCode: HttpStatus.UNAUTHORIZED,
        // });
    }

    response.json(error);
  }
}
