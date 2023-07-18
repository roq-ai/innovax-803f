import { StartupInterface } from 'interfaces/startup';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface ConnectionRequestInterface {
  id?: string;
  startup_id?: string;
  organization_id?: string;
  status: string;
  created_at?: any;
  updated_at?: any;

  startup?: StartupInterface;
  organization?: OrganizationInterface;
  _count?: {};
}

export interface ConnectionRequestGetQueryInterface extends GetQueryInterface {
  id?: string;
  startup_id?: string;
  organization_id?: string;
  status?: string;
}
