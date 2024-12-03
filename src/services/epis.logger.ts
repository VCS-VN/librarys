import { ConsoleLogger } from '@nestjs/common';

export class EPISLogger extends ConsoleLogger {
  #appName = 'Company App';

  public setAppName(name: string): void {
    this.#appName = name;
  }

  override formatPid(pid: number): string {
    const service = process.env.APP_NAME;

    return `[${service}] [${this.context || this.#appName}] ${pid}  - `;
  }

  static contextsToIgnore = [
    'InstanceLoader',
    'RoutesResolver',
    'RouterExplorer',
    'RabbitMQModule',
  ];

  override log(message: any, context?: string): void {
    if (!EPISLogger.contextsToIgnore.includes(context)) {
      if (
        typeof message === 'object' &&
        process.env.NODE_ENV === 'production'
      ) {
        message = JSON.stringify(message);
      }

      super.log(message, context);
    }
  }

  override error(message: any, context?: string): void {
    if (!EPISLogger.contextsToIgnore.includes(context)) {
      if (
        typeof message === 'object' &&
        process.env.NODE_ENV === 'production'
      ) {
        message = JSON.stringify(message);
      }

      super.error(message, context);
    }
  }

  override warn(message: any, context?: string): void {
    if (!EPISLogger.contextsToIgnore.includes(context)) {
      if (
        typeof message === 'object' &&
        process.env.NODE_ENV === 'production'
      ) {
        message = JSON.stringify(message);
      }

      super.warn(message, context);
    }
  }
}
