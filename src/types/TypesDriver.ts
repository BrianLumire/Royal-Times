// These types can be defined in a separate file (e.g. DriverResponseTypes.ts) and imported here
export interface OccupiedDriverRaw {
    id: string;
    name: string;
    photo: string;
    completed_rides: number;
    rating: number;
    commission_due: number;
    pending_payouts: number;
    license_plate: string;
    current_trip: string;
  }
  
  export interface OccupiedDriverResponse {
    drivers: OccupiedDriverRaw[];
    total_count: number;
  }
  
  export interface OnlineDriverRaw {
    id: string;
    name: string;
    photo: string;
    completed_rides: number;
    rating: number;
    commission_due: number;
    pending_payouts: number;
    license_plate: string;
    is_available_for_deliveries: boolean;
    is_available_for_rides: boolean;
  }
  
  export interface OnlineDriverResponse {
    drivers: OnlineDriverRaw[];
    total_count: number;
  }
  