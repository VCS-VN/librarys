import { Inject, Injectable, Logger } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { ISetting, SETTING_KEY } from '..';

@Injectable()
export class EPISSettingService {
  private logger = new Logger(EPISSettingService.name);

  constructor(
    @Inject(CACHE_MANAGER)
    private readonly cacheManager: Cache,
  ) {}

  async getConfiguration(
    dataSource: ISetting[],
    configuration: string,
  ): Promise<ISetting> {
    if (!dataSource) {
      throw new Error(
        `No data source found. Please check you cache configuration. ${configuration}`,
      );
    }
    if (!configuration) {
      throw new Error(
        `No configuration found. Format: page.type.key ${configuration}`,
      );
    }
    if (configuration?.split('.').length !== 3) {
      throw new Error(
        `Invalid configuration. Format: page.type.key ${configuration}`,
      );
    }

    const [service, type, key] = configuration?.split('.');
    const findSetting = dataSource?.find((setting) => {
      if (
        key &&
        setting.key === key &&
        setting.type === type &&
        setting.service === service
      ) {
        return true;
      }
      if (type && setting.type === type && setting.service === service) {
        return true;
      }
      if (service && setting.service === service) {
        return true;
      }
      return false;
    });

    return findSetting;
  }

  async getJSON<T>(configuration: string): Promise<T> {
    try {
      const value = await this.getValue(configuration, '');

      return JSON.parse(value);
    } catch (e) {
      this.logger.error(e.message);
      return null;
    }
  }

  async getValue(
    configString: string,
    defaultValue?: string | number,
    dataSource?: SETTING_KEY,
  ): Promise<any> {
    const cachedData: ISetting[] = await this.cacheManager.get(
      dataSource || SETTING_KEY.EPIS_SETTING,
    );

    if (!cachedData) return defaultValue;
    const appSetting = await this.getConfiguration(cachedData, configString);

    return appSetting?.value || defaultValue;
  }

  async getThirdPartyValue(configString: string, defaultValue?: string) {
    const cachedData: ISetting[] = await this.cacheManager.get(
      SETTING_KEY.THIRD_PARTY_SETTING,
    );

    if (!cachedData) return defaultValue;
    const appSetting = await this.getConfiguration(cachedData, configString);

    return appSetting?.value || defaultValue;
  }

  async getThirdPartyJSON<T>(configuration: string): Promise<T> {
    try {
      const value = await this.getValue(configuration, '');

      return JSON.parse(value);
    } catch (e) {
      this.logger.error(e.message);
      return null;
    }
  }
}
