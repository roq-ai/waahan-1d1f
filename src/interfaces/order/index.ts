import { UserInterface } from 'interfaces/user';
import { ClientInterface } from 'interfaces/client';
import { GetQueryInterface } from 'interfaces';

export interface OrderInterface {
  id?: string;
  status: string;
  customer_id?: string;
  client_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  client?: ClientInterface;
  _count?: {};
}

export interface OrderGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  customer_id?: string;
  client_id?: string;
}
