import { ConsoleLogger } from '@nestjs/common';

export class EPISLogger extends ConsoleLogger {
  #appName = 'Company App';

  public setAppName(name: string): void {
    this.#appName = name;
  }

  override formatPid(pid: number): string {
    return `[${this.#appName}] ${pid}  - `;
  }

  static contextsToIgnore = [
    'InstanceLoader',
    'RoutesResolver',
    'RouterExplorer',
    'RabbitMQModule',
  ];

  override log(message: any, context?: string): void {
    if (!EPISLogger.contextsToIgnore.includes(context)) {
      if (typeof message === 'object') {
        message = JSON.stringify(message, null, 0);
      }

      super.log(message, context);
    }
  }

  override error(message: any, trace?: string, context?: string): void {
    if (typeof message === 'object') {
      // Minify JSON
      message = JSON.stringify(message, null, 0);
    }
    super.error(message, trace, context);
  }

  override warn(message: any, context?: string): void {
    if (typeof message === 'object') {
      // Minify JSON
      message = JSON.stringify(message, null, 0);
    }
    super.warn(message, context);
  }
}
