export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      _commentsTorides: {
        Row: {
          A: string
          B: string
        }
        Insert: {
          A: string
          B: string
        }
        Update: {
          A?: string
          B?: string
        }
        Relationships: [
          {
            foreignKeyName: "_commentsTorides_A_fkey"
            columns: ["A"]
            isOneToOne: false
            referencedRelation: "comments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "_commentsTorides_B_fkey"
            columns: ["B"]
            isOneToOne: false
            referencedRelation: "rides"
            referencedColumns: ["id"]
          },
        ]
      }
      addresses: {
        Row: {
          customer_id: string
          id: string
          location: string | null
          nickname: string | null
        }
        Insert: {
          customer_id: string
          id?: string
          location?: string | null
          nickname?: string | null
        }
        Update: {
          customer_id?: string
          id?: string
          location?: string | null
          nickname?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "addresses_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
        ]
      }
      application_rejections: {
        Row: {
          driver_id: string | null
          id: string
          reason: string
        }
        Insert: {
          driver_id?: string | null
          id?: string
          reason: string
        }
        Update: {
          driver_id?: string | null
          id?: string
          reason?: string
        }
        Relationships: [
          {
            foreignKeyName: "application_rejections_driver_id_fkey"
            columns: ["driver_id"]
            isOneToOne: false
            referencedRelation: "drivers"
            referencedColumns: ["id"]
          },
        ]
      }
      bank_payouts: {
        Row: {
          account_name: string
          account_number: string
          created_at: string
          driversId: string | null
          id: string
          is_default: boolean
        }
        Insert: {
          account_name: string
          account_number: string
          created_at?: string
          driversId?: string | null
          id?: string
          is_default?: boolean
        }
        Update: {
          account_name?: string
          account_number?: string
          created_at?: string
          driversId?: string | null
          id?: string
          is_default?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "bank_payouts_driversId_fkey"
            columns: ["driversId"]
            isOneToOne: false
            referencedRelation: "drivers"
            referencedColumns: ["id"]
          },
        ]
      }
      cards: {
        Row: {
          card_number: string
          customer_name: string | null
          id: string
          is_default: boolean
          user_id: string | null
        }
        Insert: {
          card_number: string
          customer_name?: string | null
          id?: string
          is_default?: boolean
          user_id?: string | null
        }
        Update: {
          card_number?: string
          customer_name?: string | null
          id?: string
          is_default?: boolean
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "cards_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_accounts"
            referencedColumns: ["id"]
          },
        ]
      }
      chat_rooms: {
        Row: {
          createdAt: string
          customer_id: string
          driver_id: string | null
          id: string
          name: string
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          customer_id: string
          driver_id?: string | null
          id?: string
          name: string
          updatedAt: string
        }
        Update: {
          createdAt?: string
          customer_id?: string
          driver_id?: string | null
          id?: string
          name?: string
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "chat_rooms_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "chat_rooms_driver_id_fkey"
            columns: ["driver_id"]
            isOneToOne: false
            referencedRelation: "drivers"
            referencedColumns: ["id"]
          },
        ]
      }
      comments: {
        Row: {
          body: string
          comment_type: Database["public"]["Enums"]["comment_type"]
          id: string
        }
        Insert: {
          body: string
          comment_type: Database["public"]["Enums"]["comment_type"]
          id?: string
        }
        Update: {
          body?: string
          comment_type?: Database["public"]["Enums"]["comment_type"]
          id?: string
        }
        Relationships: []
      }
      customers: {
        Row: {
          id: string
          location: unknown | null
          rating: number | null
          user_id: string
        }
        Insert: {
          id?: string
          location?: unknown | null
          rating?: number | null
          user_id: string
        }
        Update: {
          id?: string
          location?: unknown | null
          rating?: number | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "customers_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_accounts"
            referencedColumns: ["id"]
          },
        ]
      }
      discount: {
        Row: {
          customer_id: string | null
          id: string
          percentage: number | null
        }
        Insert: {
          customer_id?: string | null
          id?: string
          percentage?: number | null
        }
        Update: {
          customer_id?: string | null
          id?: string
          percentage?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "discount_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
        ]
      }
      driver_owed_commissions: {
        Row: {
          amount: number
          created_at: string
          driver_id: string | null
          id: string
          settlement_date: string | null
          status: Database["public"]["Enums"]["commission_status"]
        }
        Insert: {
          amount: number
          created_at?: string
          driver_id?: string | null
          id?: string
          settlement_date?: string | null
          status?: Database["public"]["Enums"]["commission_status"]
        }
        Update: {
          amount?: number
          created_at?: string
          driver_id?: string | null
          id?: string
          settlement_date?: string | null
          status?: Database["public"]["Enums"]["commission_status"]
        }
        Relationships: [
          {
            foreignKeyName: "driver_owed_commissions_driver_id_fkey"
            columns: ["driver_id"]
            isOneToOne: false
            referencedRelation: "drivers"
            referencedColumns: ["id"]
          },
        ]
      }
      driver_request_notifications: {
        Row: {
          body: string
          created_at: string
          id: string
          status: Database["public"]["Enums"]["notification_status"] | null
          title: string
          user_id: string | null
        }
        Insert: {
          body?: string
          created_at?: string
          id?: string
          status?: Database["public"]["Enums"]["notification_status"] | null
          title?: string
          user_id?: string | null
        }
        Update: {
          body?: string
          created_at?: string
          id?: string
          status?: Database["public"]["Enums"]["notification_status"] | null
          title?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "driver_request_notifications_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_accounts"
            referencedColumns: ["id"]
          },
        ]
      }
      drivers: {
        Row: {
          applied_on: string
          comission_due: number | null
          current_order: Database["public"]["Enums"]["current_order"] | null
          date_of_birth: string
          driver_license_back: string | null
          driver_license_front: string | null
          driver_license_number: string | null
          id: string
          id_back_image: string | null
          id_front_image: string | null
          in_transit: boolean | null
          is_available_for_deliveries: boolean | null
          is_available_for_rides: boolean | null
          is_online: boolean | null
          is_requested: boolean | null
          is_resting: boolean | null
          is_valid: boolean | null
          license_expiration_date: string | null
          location: unknown | null
          national_id: string | null
          rating: number | null
          requested_ride_id: string | null
          sex: Database["public"]["Enums"]["sex"]
          updated_at: string
          user_id: string | null
          verification_status:
            | Database["public"]["Enums"]["driver_status"]
            | null
        }
        Insert: {
          applied_on?: string
          comission_due?: number | null
          current_order?: Database["public"]["Enums"]["current_order"] | null
          date_of_birth: string
          driver_license_back?: string | null
          driver_license_front?: string | null
          driver_license_number?: string | null
          id?: string
          id_back_image?: string | null
          id_front_image?: string | null
          in_transit?: boolean | null
          is_available_for_deliveries?: boolean | null
          is_available_for_rides?: boolean | null
          is_online?: boolean | null
          is_requested?: boolean | null
          is_resting?: boolean | null
          is_valid?: boolean | null
          license_expiration_date?: string | null
          location?: unknown | null
          national_id?: string | null
          rating?: number | null
          requested_ride_id?: string | null
          sex: Database["public"]["Enums"]["sex"]
          updated_at?: string
          user_id?: string | null
          verification_status?:
            | Database["public"]["Enums"]["driver_status"]
            | null
        }
        Update: {
          applied_on?: string
          comission_due?: number | null
          current_order?: Database["public"]["Enums"]["current_order"] | null
          date_of_birth?: string
          driver_license_back?: string | null
          driver_license_front?: string | null
          driver_license_number?: string | null
          id?: string
          id_back_image?: string | null
          id_front_image?: string | null
          in_transit?: boolean | null
          is_available_for_deliveries?: boolean | null
          is_available_for_rides?: boolean | null
          is_online?: boolean | null
          is_requested?: boolean | null
          is_resting?: boolean | null
          is_valid?: boolean | null
          license_expiration_date?: string | null
          location?: unknown | null
          national_id?: string | null
          rating?: number | null
          requested_ride_id?: string | null
          sex?: Database["public"]["Enums"]["sex"]
          updated_at?: string
          user_id?: string | null
          verification_status?:
            | Database["public"]["Enums"]["driver_status"]
            | null
        }
        Relationships: [
          {
            foreignKeyName: "drivers_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_accounts"
            referencedColumns: ["id"]
          },
        ]
      }
      executives: {
        Row: {
          id: string
          user_id: string
        }
        Insert: {
          id?: string
          user_id: string
        }
        Update: {
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "executives_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_accounts"
            referencedColumns: ["id"]
          },
        ]
      }
      messages: {
        Row: {
          chat_room_id: string
          content: string
          createdAt: string
          id: string
          read: boolean
          sender: Database["public"]["Enums"]["sender"]
        }
        Insert: {
          chat_room_id: string
          content: string
          createdAt?: string
          id?: string
          read?: boolean
          sender: Database["public"]["Enums"]["sender"]
        }
        Update: {
          chat_room_id?: string
          content?: string
          createdAt?: string
          id?: string
          read?: boolean
          sender?: Database["public"]["Enums"]["sender"]
        }
        Relationships: [
          {
            foreignKeyName: "messages_chat_room_id_fkey"
            columns: ["chat_room_id"]
            isOneToOne: false
            referencedRelation: "chat_rooms"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications: {
        Row: {
          body: string
          created_at: string
          id: string
          status: Database["public"]["Enums"]["notification_status"] | null
          title: string
          user_id: string | null
        }
        Insert: {
          body?: string
          created_at?: string
          id?: string
          status?: Database["public"]["Enums"]["notification_status"] | null
          title?: string
          user_id?: string | null
        }
        Update: {
          body?: string
          created_at?: string
          id?: string
          status?: Database["public"]["Enums"]["notification_status"] | null
          title?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "notifications_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_accounts"
            referencedColumns: ["id"]
          },
        ]
      }
      operators: {
        Row: {
          id: string
          user_id: string
        }
        Insert: {
          id?: string
          user_id: string
        }
        Update: {
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "operators_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_accounts"
            referencedColumns: ["id"]
          },
        ]
      }
      payments: {
        Row: {
          access_code: string | null
          amount: number
          id: string
          payment_method: Database["public"]["Enums"]["payment_methods"] | null
          payment_status: Database["public"]["Enums"]["payment_status"] | null
          reference: string | null
          ride_id: string
        }
        Insert: {
          access_code?: string | null
          amount: number
          id?: string
          payment_method?: Database["public"]["Enums"]["payment_methods"] | null
          payment_status?: Database["public"]["Enums"]["payment_status"] | null
          reference?: string | null
          ride_id: string
        }
        Update: {
          access_code?: string | null
          amount?: number
          id?: string
          payment_method?: Database["public"]["Enums"]["payment_methods"] | null
          payment_status?: Database["public"]["Enums"]["payment_status"] | null
          reference?: string | null
          ride_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "payments_ride_id_fkey"
            columns: ["ride_id"]
            isOneToOne: false
            referencedRelation: "rides"
            referencedColumns: ["id"]
          },
        ]
      }
      phone_payments: {
        Row: {
          id: string
          is_default: boolean
          phone_number: string
          user_id: string | null
        }
        Insert: {
          id?: string
          is_default?: boolean
          phone_number: string
          user_id?: string | null
        }
        Update: {
          id?: string
          is_default?: boolean
          phone_number?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "phone_payments_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_accounts"
            referencedColumns: ["id"]
          },
        ]
      }
      phone_payouts: {
        Row: {
          driversId: string | null
          id: string
          is_default: boolean
          payout_method:
            | Database["public"]["Enums"]["phone_payout_method"]
            | null
          phone: string
        }
        Insert: {
          driversId?: string | null
          id?: string
          is_default?: boolean
          payout_method?:
            | Database["public"]["Enums"]["phone_payout_method"]
            | null
          phone: string
        }
        Update: {
          driversId?: string | null
          id?: string
          is_default?: boolean
          payout_method?:
            | Database["public"]["Enums"]["phone_payout_method"]
            | null
          phone?: string
        }
        Relationships: [
          {
            foreignKeyName: "phone_payouts_driversId_fkey"
            columns: ["driversId"]
            isOneToOne: false
            referencedRelation: "drivers"
            referencedColumns: ["id"]
          },
        ]
      }
      platform_owed_commissions: {
        Row: {
          amount: number
          created_at: string
          driver_id: string | null
          id: string
          settlement_date: string | null
          status: Database["public"]["Enums"]["commission_status"]
        }
        Insert: {
          amount: number
          created_at?: string
          driver_id?: string | null
          id?: string
          settlement_date?: string | null
          status?: Database["public"]["Enums"]["commission_status"]
        }
        Update: {
          amount?: number
          created_at?: string
          driver_id?: string | null
          id?: string
          settlement_date?: string | null
          status?: Database["public"]["Enums"]["commission_status"]
        }
        Relationships: [
          {
            foreignKeyName: "platform_owed_commissions_driver_id_fkey"
            columns: ["driver_id"]
            isOneToOne: false
            referencedRelation: "drivers"
            referencedColumns: ["id"]
          },
        ]
      }
      rides: {
        Row: {
          created_at: string
          customer_id: string | null
          customer_rating: number | null
          distance: number | null
          driver_id: string | null
          driver_rating: number | null
          driving_status: Database["public"]["Enums"]["driving_status"] | null
          dropoff_location: unknown | null
          dropoff_time: string | null
          id: string
          passengers: number | null
          pickup_location: unknown | null
          pickup_time: string | null
          status: Database["public"]["Enums"]["ride_status"]
          vehicle_id: string | null
        }
        Insert: {
          created_at?: string
          customer_id?: string | null
          customer_rating?: number | null
          distance?: number | null
          driver_id?: string | null
          driver_rating?: number | null
          driving_status?: Database["public"]["Enums"]["driving_status"] | null
          dropoff_location?: unknown | null
          dropoff_time?: string | null
          id?: string
          passengers?: number | null
          pickup_location?: unknown | null
          pickup_time?: string | null
          status?: Database["public"]["Enums"]["ride_status"]
          vehicle_id?: string | null
        }
        Update: {
          created_at?: string
          customer_id?: string | null
          customer_rating?: number | null
          distance?: number | null
          driver_id?: string | null
          driver_rating?: number | null
          driving_status?: Database["public"]["Enums"]["driving_status"] | null
          dropoff_location?: unknown | null
          dropoff_time?: string | null
          id?: string
          passengers?: number | null
          pickup_location?: unknown | null
          pickup_time?: string | null
          status?: Database["public"]["Enums"]["ride_status"]
          vehicle_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "rides_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "rides_driver_id_fkey"
            columns: ["driver_id"]
            isOneToOne: false
            referencedRelation: "drivers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "rides_vehicle_id_fkey"
            columns: ["vehicle_id"]
            isOneToOne: false
            referencedRelation: "vehicles"
            referencedColumns: ["id"]
          },
        ]
      }
      stops: {
        Row: {
          arrival_time: string | null
          departure_time: string | null
          id: string
          location: unknown | null
          ride_id: string
          stop_index: number
        }
        Insert: {
          arrival_time?: string | null
          departure_time?: string | null
          id?: string
          location?: unknown | null
          ride_id: string
          stop_index: number
        }
        Update: {
          arrival_time?: string | null
          departure_time?: string | null
          id?: string
          location?: unknown | null
          ride_id?: string
          stop_index?: number
        }
        Relationships: [
          {
            foreignKeyName: "stops_ride_id_fkey"
            columns: ["ride_id"]
            isOneToOne: false
            referencedRelation: "rides"
            referencedColumns: ["id"]
          },
        ]
      }
      supervisors: {
        Row: {
          id: string
          user_id: string
        }
        Insert: {
          id?: string
          user_id: string
        }
        Update: {
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "supervisors_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_accounts"
            referencedColumns: ["id"]
          },
        ]
      }
      user_accounts: {
        Row: {
          avatar_url: string | null
          bio: string | null
          created_at: string
          email: string | null
          fcm_token: string | null
          full_name: string | null
          id: string
          phone: string | null
          role: Database["public"]["Enums"]["role"]
          updated_at: string | null
        }
        Insert: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          email?: string | null
          fcm_token?: string | null
          full_name?: string | null
          id: string
          phone?: string | null
          role?: Database["public"]["Enums"]["role"]
          updated_at?: string | null
        }
        Update: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          email?: string | null
          fcm_token?: string | null
          full_name?: string | null
          id?: string
          phone?: string | null
          role?: Database["public"]["Enums"]["role"]
          updated_at?: string | null
        }
        Relationships: []
      }
      vehicle_classes: {
        Row: {
          base_fare: number | null
          cost_per_kilometre: number | null
          cost_per_minute: number | null
          cost_per_stop: number | null
          id: string
          name: string
          surge_multiplier: number
        }
        Insert: {
          base_fare?: number | null
          cost_per_kilometre?: number | null
          cost_per_minute?: number | null
          cost_per_stop?: number | null
          id?: string
          name: string
          surge_multiplier?: number
        }
        Update: {
          base_fare?: number | null
          cost_per_kilometre?: number | null
          cost_per_minute?: number | null
          cost_per_stop?: number | null
          id?: string
          name?: string
          surge_multiplier?: number
        }
        Relationships: []
      }
      vehicles: {
        Row: {
          back_view: string | null
          driver_id: string
          front_view: string | null
          id: string
          left_view: string | null
          license_plate: string | null
          license_plate_image: string | null
          make: string | null
          model: string | null
          proof_of_insurance: string | null
          propulsion: Database["public"]["Enums"]["propulsion"] | null
          psv_badge_url: string | null
          psv_expiration_date: string | null
          psv_number: string | null
          right_view: string | null
          vehicle_class_id: string | null
          year: string | null
        }
        Insert: {
          back_view?: string | null
          driver_id: string
          front_view?: string | null
          id?: string
          left_view?: string | null
          license_plate?: string | null
          license_plate_image?: string | null
          make?: string | null
          model?: string | null
          proof_of_insurance?: string | null
          propulsion?: Database["public"]["Enums"]["propulsion"] | null
          psv_badge_url?: string | null
          psv_expiration_date?: string | null
          psv_number?: string | null
          right_view?: string | null
          vehicle_class_id?: string | null
          year?: string | null
        }
        Update: {
          back_view?: string | null
          driver_id?: string
          front_view?: string | null
          id?: string
          left_view?: string | null
          license_plate?: string | null
          license_plate_image?: string | null
          make?: string | null
          model?: string | null
          proof_of_insurance?: string | null
          propulsion?: Database["public"]["Enums"]["propulsion"] | null
          psv_badge_url?: string | null
          psv_expiration_date?: string | null
          psv_number?: string | null
          right_view?: string | null
          vehicle_class_id?: string | null
          year?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "vehicles_driver_id_fkey"
            columns: ["driver_id"]
            isOneToOne: false
            referencedRelation: "drivers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "vehicles_vehicle_class_id_fkey"
            columns: ["vehicle_class_id"]
            isOneToOne: false
            referencedRelation: "vehicle_classes"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      change_user_password: {
        Args: {
          current_plain_password: string
          new_plain_password: string
        }
        Returns: Json
      }
      change_user_password_web: {
        Args: {
          new_plain_password: string
        }
        Returns: Json
      }
      get_coordinates: {
        Args: {
          row_id: string
          field_name: string
          table_name: string
        }
        Returns: Json
      }
      get_drivers_within_radius: {
        Args: {
          center_latitude: number
          center_longitude: number
          radius: number
          trip_type: string
        }
        Returns: Json
      }
      get_drivers_within_radius_development: {
        Args: {
          center_latitude: number
          center_longitude: number
          radius: number
          trip_type: string
        }
        Returns: Json
      }
      get_occupied_drivers: {
        Args: {
          page_number?: number
          page_size?: number
        }
        Returns: Json
      }
      get_online_drivers: {
        Args: {
          page_number?: number
          page_size?: number
        }
        Returns: Json
      }
      get_paginated_drivers: {
        Args: {
          page_number?: number
          page_size?: number
        }
        Returns: Json
      }
      get_ride_coordinates:
        | {
            Args: {
              ride_id: string
            }
            Returns: Json
          }
        | {
            Args: {
              ride_id: string
            }
            Returns: Json
          }
        | {
            Args: {
              row_id: string
              field_name: string
            }
            Returns: Json
          }
      get_ride_details: {
        Args: {
          ride_id: string
        }
        Returns: Json
      }
      get_unapproved_drivers: {
        Args: {
          page_number?: number
          page_size?: number
        }
        Returns: Json
      }
      get_unapproved_drivers_dev: {
        Args: {
          page_number?: number
          page_size?: number
        }
        Returns: Json
      }
      reset_user_password: {
        Args: {
          new_plain_password: string
        }
        Returns: Json
      }
    }
    Enums: {
      comment_type: "customer" | "driver"
      commission_status: "pending" | "paid" | "cancelled"
      current_order: "ride" | "delivery"
      driver_status:
        | "pending"
        | "approved"
        | "suspended"
        | "deleted"
        | "rejected"
      driving_status:
        | "driving_to_pickup"
        | "driving_to_first_stop"
        | "driving_to_second_stop"
        | "driving_to_destination"
        | "arrived_at_destination"
      notification_status: "pending" | "sent" | "failed"
      payment_methods: "cash" | "card" | "mpesa"
      payment_status: "pending" | "approved" | "rejected"
      phone_payout_method: "mpesa" | "airtel"
      propulsion: "fuel" | "electric"
      ride_status:
        | "pending"
        | "accepted"
        | "rejected"
        | "completed"
        | "cancelled"
      role: "customer" | "driver" | "executive" | "supervisor" | "operator"
      sender: "driver" | "customer"
      sex: "male" | "female"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
