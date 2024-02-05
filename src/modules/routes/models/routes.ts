export type Route = {
  id: string;
  name: string;
  transport_num: number;
  avg_speed: string;
  avg_time: string;
  country?: string;
  city?: string;
  cost?: string;
  places?: any[];
};
