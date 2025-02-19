import { format } from 'date-fns';

export interface SupabaseDriver {
  applied_on: string;
  id: string;
  name: string;
  photo: string | null;
  rating: number | null;
  vehicle_class: string;
}

export interface UnapprovedDriver extends SupabaseDriver {
  vehicleclass: string;
  propulsion?: string;
  age?: number;
  location?: string;
  date: string;
  action?: string;
  [key: string]: unknown;
}

export interface DriverResponse {
  drivers: SupabaseDriver[]; // Matches the raw response from Supabase
  total_count: number;
}

export const transformUnapprovedDriver = (driver: SupabaseDriver): Driver => {
    const formattedDate = format(new Date(driver.applied_on), 'MMM dd, yyyy HH:mm');
  
    return {
      ...driver,
      id: driver.id,
      photo: driver.photo || '/default-photo.svg',
      // Convert rating from null to undefined if necessary:
      rating: driver.rating ?? undefined,
      vehicleclass: driver.vehicle_class,
      date: formattedDate,
      propulsion: "",
      age: undefined,
      location: "",
      action: "Approve",
    };
  };
  

  
  

export interface UnapprovedDriverParams {
  page_number: number;
  page_size: number;
}

// Define our UI's Driver interface (used in tables)
// This should match what the transformation function returns.
export interface Driver {
  id: string;
  photo: string;
  name: string;
  completedrides?: number;
  ratingphoto?: string;
  rating?: number;
  commissiondue?: number;
  pendingpayout?: string;
  vehicle?: string;
  availablefor?: string[];
  currentorder?: string[];
  lastseen?: string;
  vehicleclass?: string;
  propulsion?: string;
  age?: number;
  location?: string;
  date?: string;
  reason?: string;
  Status?: string;
  action?: string;
  [key: string]: unknown;
}
// @/types/YourTypes.ts
// @/types/DriverTypes.ts

export type CurrentOrder = "ride" | "delivery" | "none";
export type DriverStatus = "approved" | "suspended" | "pending";

export interface DriverData {
  id: string;
  user_id: string | null;
  applied_on: string;
  comission_due: number | null;
  current_order: CurrentOrder | null;
  date_of_birth: string;
  driver_license_back: string | null;
  driver_license_front: string | null;
  driver_license_number: string | null;
  driver_license_expiry?: string | null;
  national_id?: string | null;
  national_id_front?: string | null;
  national_id_back?: string | null;
  verification_status: DriverStatus | null;
  // Additional optional fields used in the layout:
  is_online?: boolean;
  rating?: number;
  sex?: string;
  created_at?: string;
  updated_at?: string;
  vehicle_id?: string;
}

export interface VehicleClassData {
  id: string;
  name: string;
  description?: string;
}

export interface VehicleData {
  id: string;
  driver_id: string;
  license_plate: string | null;
  license_plate_image: string | null;
  front_view: string | null;
  back_view: string | null;
  left_view: string | null;
  right_view?: string | null;
  make?: string | null;
  model?: string | null;
  year?: number | string | null;
  color?: string | null;
  mileage?: number;
  registration_date?: string;
  insurance_validity?: string;
  propulsion?: string;
  vehicle_classes: VehicleClassData | null;
}

export interface UserData {
  id: string;
  full_name: string | null;
  avatar_url: string | null;
  bio: string | null;
  email: string | null;
  phone: string | null;
  fcm_token: string | null;
  created_at: string;
  updated_at: string | null;
  role: "admin" | "driver" | "customer" | "executive" | "supervisor" | "operator";
}
