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
