export enum DOMAIN_STATUS {
  VERIFYING = 1,
  VERIFIED = 3,
}

export enum TEMPLATE_STATUS {
  PENDING = 1,
  DEPLOYING = 2,
  DEPLOYED = 3,
  INACTIVE = 4,
  ERROR = 1000,
}

export enum RENDER_STATUS {
  DEPLOYED = 2,
}

export enum PAGE_PROVIDER {
  RENDER = 'render',
}

export const BRANCH_PREFIX = 'template/';
