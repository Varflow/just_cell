export type Transport = {
  id: string;
  route: string;
  transport_num: string;
  name: string;
  route_time: string;
  terminal_num: string;
  driver: string;
  geolocation: string;
  drive_time: string;
  avg_speed: string;
  passenger_amount: number;
  payment_cash: any;
  payment_card: any;
  beneficiary_count: number;
  camera_link: string;
  status: string;
  created_at: string;
  next_to_date: string;
  notify?: string[];
};