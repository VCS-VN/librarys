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
  ];

  override log(message: any, context?: string): void {
    console.log('🚀 ~ EPISLogger ~ overridelog ~ context:', context);
    if (!EPISLogger.contextsToIgnore.includes(context)) {
      super.log.apply(this, message);
    }
  }
}
