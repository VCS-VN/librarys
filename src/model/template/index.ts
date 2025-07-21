import { TEMPLATE_STATUS } from '@/enum';

export interface ITemplate {
  _id: string;
  code: string;
  entity_id: string;
  template_branch?: string;
  repository_url?: string;
  status: TEMPLATE_STATUS;
  deleted: boolean;
  deleted_at?: Date;
  created_at?: Date;
  modified_at?: Date;
  created_by?: string;
  modified_by?: string;
  deleted_by?: string;
  render: Partial<ITemplateRender>;
}

export interface ITemplateRender {
  id: string;
  url: string;
  deploy_id: string;
  domains: Partial<ITemplateRenderDomain>[];
}

export interface ITemplateRenderDomain {
  id: string;
  url: string;
  status: (typeof TEMPLATE_STATUS)[keyof typeof TEMPLATE_STATUS];
}
