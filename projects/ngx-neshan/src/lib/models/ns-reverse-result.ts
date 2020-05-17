import { NsAddress } from './ns-address';

export class NsReverseResult {
  status: string;
  formatted_address: string;
  route_name: string;
  route_type: string;
  neighbourhood: string;
  city: string;
  state: string;
  place?: any;
  municipality_zone: string;
  in_traffic_zone: boolean;
  in_odd_even_zone: boolean;
  addresses: NsAddress[];
}
