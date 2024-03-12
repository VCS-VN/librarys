import { Inject, Injectable } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { ISetting, SETTING_KEY } from '..';

@Injectable()
export class EPISSettingService {
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

    const [page, type, key] = configuration?.split('.');
    const findSetting = dataSource?.find(
      (setting) =>
        setting.service === page &&
        setting.type === type &&
        setting.key === key,
    );

    return findSetting;
  }

  async getConfigurationValue(
    configString: string,
    defaultValue: string | number,
  ): Promise<string | number> {
    const cachedData: ISetting[] = await this.cacheManager.get(
      SETTING_KEY.EPIS_SETTING,
    );

    if (!cachedData) return defaultValue;
    const appSetting = await this.getConfiguration(cachedData, configString);

    return appSetting?.value || defaultValue;
  }
}
