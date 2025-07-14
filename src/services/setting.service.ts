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
  ): Promise<ISetting[]> {
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

    const [service, type, key] = configuration?.split('.');
    const foundSettings = dataSource?.filter((setting) => {
      if (key) {
        if (
          setting.service === service &&
          setting.type === type &&
          setting.key === key
        )
          return true;

        return false;
      }
      if (type) {
        if (setting.service === service && setting.type === type) return true;
        return false;
      }

      if (service) {
        if (setting.service === service) true;

        return false;
      }
      return false;
    });

    return foundSettings;
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

  async getJSONv2<T>(configuration: string): Promise<T> {
    try {
      const value = await this.getValue(configuration, '');

      return JSON.parse(value);
    } catch (e) {
      this.logger.error(e.message);
      throw e;
    }
  }

  async getValue(
    configString: string,
    defaultValue?: string | number,
  ): Promise<any> {
    const cachedData: ISetting[] = await this.cacheManager.get(
      SETTING_KEY.EPIS_SETTING,
    );

    if (!cachedData) {
      return defaultValue;
    }

    const appSetting = await this.getConfiguration(cachedData, configString);

    return appSetting[0]?.value || defaultValue;
  }

  async getThirdPartyValue(configString: string, defaultValue?: string) {
    const cachedData: ISetting[] = await this.cacheManager.get(
      SETTING_KEY.THIRD_PARTY_SETTING,
    );

    if (!cachedData) return defaultValue;
    const appSetting = await this.getConfiguration(cachedData, configString);

    return appSetting[0]?.value || defaultValue;
  }

  async getValues(configString: string): Promise<ISetting[]> {
    const cachedData: ISetting[] = await this.cacheManager.get(
      SETTING_KEY.THIRD_PARTY_SETTING,
    );
    if (!cachedData) {
      return [];
    }

    const appSetting = await this.getConfiguration(cachedData, configString);

    return appSetting;
  }

  async getThirdPartyValues(configString: string): Promise<ISetting[]> {
    const cachedData: ISetting[] = await this.cacheManager.get(
      SETTING_KEY.THIRD_PARTY_SETTING,
    );
    if (!cachedData) {
      return [];
    }

    const appSetting = await this.getConfiguration(cachedData, configString);

    return appSetting;
  }

  async getThirdPartyJSON<T>(configuration: string): Promise<T> {
    try {
      const value = await this.getThirdPartyValue(configuration, '');

      return JSON.parse(value);
    } catch (e) {
      this.logger.error(e.message);
      return null;
    }
  }
}
