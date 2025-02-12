// for  Drivers Tables
export const freeDrivers = [
  {
    id: 1,
    name: "Juma Mwaura",
    completedrides: 100,
    photo: "/driverpic.svg",
    commissiondue: 650,
    availablefor: ["Rides"], // Single option
    vehicle: "KDS 004B",
    rating: 4.2,
    ratingphoto: "/rating.svg",
    pendingpayout: "ksh 2000",
  },
  {
    id: 2,
    name: "John Kamau",
    completedrides: 80,
    photo: "/driverpic.svg",
    commissiondue: 500,
    availablefor: ["Deliveries"], // Single option
    vehicle: "KAB 123C",
    rating: 4.0,
    ratingphoto: "/rating.svg",
    pendingpayout: "ksh 1800",
  },
  {
    id: 3,
    name: "Mary Wambui",
    completedrides: 120,
    photo: "/driverpic.svg",
    commissiondue: 700,
    availablefor: ["Rides", "Deliveries"], // Available for both
    vehicle: "KBC 456D",
    rating: 4.7,
    ratingphoto: "/rating.svg",
    pendingpayout: "ksh 2200",
  },
  {
    id: 4,
    name: "Peter Otieno",
    completedrides: 90,
    photo: "/driverpic.svg",
    commissiondue: 550,
    availablefor: ["Rides", "Deliveries"], // Available for both
    vehicle: "KCD 789E",
    rating: 4.1,
    ratingphoto: "/rating.svg",
    pendingpayout: "ksh 1600",
  },
];



export const freeColumns = [
  { header: "Name", accessor: "name" },
  { header: "Completed Rides", accessor: "completedrides" },
  { header: "Rating", accessor: "rating" },
  { header: "Commission Due", accessor: "commissiondue" },
  { header: "Pending Payout", accessor: "pendingpayout" },
  { header: "Vehicle", accessor: "vehicle" },
  { header: "Available For", accessor: "availablefor" },
];

export const occupiedDrivers = [
  {
    id: 5,
    name: "Jane Doe",
    completedrides: 50,
    photo: "/driverpic.svg",
    commissiondue: 300,
    currentorder: ["Deliveries"],
    vehicle: "KCS 123A",
    rating: 4.5,
    ratingphoto: "/rating.svg",
    pendingpayout: "ksh 1500",
  },
  {
    id: 6,
    name: "Lucy Akinyi",
    completedrides: 60,
    photo: "/driverpic.svg",
    commissiondue: 400,
    currentorder: ["Rides"],
    vehicle: "KDE 012F",
    rating: 4.3,
    ratingphoto: "/rating.svg",
    pendingpayout: "ksh 1200",
  },
  {
    id: 7,
    name: "James Omondi",
    completedrides: 70,
    photo: "/driverpic.svg",
    commissiondue: 450,
    currentorder: ["Deliveries"],
    vehicle: "KEF 345G",
    rating: 4.0,
    ratingphoto: "/rating.svg",
    pendingpayout: "ksh 1300",

  },
  {
    id: 8,
    name: "Grace Atieno",
    completedrides: 110,
    photo: "/driverpic.svg",
    commissiondue: 600,
    currentorder: ["Rides"],
    vehicle: "KFG 678H",
    rating: 4.6,
    ratingphoto: "/rating.svg",
    pendingpayout: "ksh 1900",
  },
];

export const occupiedColumns = [
  { header: "Name", accessor: "name" },
  { header: "Completed Rides", accessor: "completedrides" },
  { header: "Rating", accessor: "rating" },
  { header: "Commission Due", accessor: "commissiondue" },
  { header: "Pending Payout", accessor: "pendingpayout" },
  { header: "Vehicle", accessor: "vehicle" },
  { header: "Current Order", accessor: "currentorder" },
];
  
  export const offlineDrivers = [
    {
      id: 9,
      name: "John Kamau",
      completedrides: 80,
      photo: "/driverpic.svg",
      commissiondue: 500,
      Status: "Offline",
      vehicle: "KAB 123C",
      rating: 4.0,
      ratingphoto: "/rating.svg",
      pendingpayout: "ksh 1800",
      lastseen: "3 hours ago",
    },
    {
      id: 10,
      name: "Mary Wambui",
      completedrides: 120,
      photo: "/driverpic.svg",
      commissiondue: 700,
      Status: "Offline",
      vehicle: "KBC 456D",
      rating: 4.7,
      ratingphoto: "/rating.svg",
      pendingpayout: "ksh 2200",
      lastseen: "5 hours ago",
    },
    // Add more data here
  ];

  
export const offlineColumns = [
    { header: "Name", accessor: "name" },
    { header: "Completed Rides", accessor: "completedrides" },
    { header: "Rating", accessor: "rating" },
    { header: "Commission Due", accessor: "commissiondue" },
    { header: "Pending Payouts", accessor: "pendingpayout" },
    { header: "Last Seen", accessor: "lastseen" },
    { header: "Vehicle", accessor: "vehicle" },
  ];
  
  export const unapprovedDrivers = [
    {
      id: 11,
      name: "Daniel Kipchumba",
      photo: "/driverpic.svg",
      vehicleclass: "Car",
      propulsion: "Fuel",
      age: 28,
      location: "Nairobi",
      date: "Dec 30,2024 05.18",
      action:"Approve",
    },
    {
      id: 12,
      name: "Sarah Wanjiku",
      photo: "/driverpic.svg",
      vehicleclass: "Car",
      propulsion: "Electrical",
      age: 35,
      location: "Mombasa",
      date: "Jan 10,2025 11.18",
      action:"Approve",
    },
    {
      id: 13,
      name: "Michael Otieno",
      photo: "/driverpic.svg",
      vehicleclass: "Car",
      propulsion: "Fuel",
      age: 30,
      location: "Kisumu",
      date: "Jan 15,2025 09.00",
      action:"Approve",
    },
    {
      id: 14,
      name: "Esther Muthoni",
      photo: "/driverpic.svg",
      vehicleclass: "Motorbike",
      propulsion: "Electrical",
      age: 32,
      location: "Nakuru",
      date: "Jan 20,2025 14.30",
      action:"Approve",
    },
  ];
  
  export const unapprovedColumns = [
    { header: "Name", accessor: "name" },
    { header: "Vehicle Class", accessor: "vehicleclass" },
    { header: "Propulsion", accessor: "propulsion" },
    { header: "Age", accessor: "age" },
    { header: "Location", accessor: "location" },
    { header: "Date", accessor: "date" },
    { header: "Action", accessor: "action" },
  ];
  
  
  export const inactiveDrivers = [
    {
      id: 15,
      name: "James Omondi",
      completedrides: 60,
      photo: "/driverpic.svg",
      commissiondue: 400,
      Status: "Inactive",
      vehicle: "KCD 789E",
      rating: 4.1,
      ratingphoto: "/rating.svg",
      pendingpayout: "ksh 1200",
      lastseen: "Jan 14,2025 05:24",
      reason: "At rest",
    },
    {
      id: 16,
      name: "Grace Atieno",
      completedrides: 90,
      photo: "/driverpic.svg",
      commissiondue: 550,
      Status: "Inactive",
      vehicle: "KDE 012F",
      rating: 4.3,
      ratingphoto: "/rating.svg",
      lastseen: "Dec 14,2024 15:24",
      pendingpayout: "ksh 1600",
      reason: "Due to commission",
    },
    {
      id: 17,
      name: "Peter Otieno",
      completedrides: 70,
      photo: "/driverpic.svg",
      commissiondue: 450,
      Status: "Inactive",
      vehicle: "KEF 345G",
      rating: 4.0,
      ratingphoto: "/rating.svg",
      pendingpayout: "ksh 1300",
      lastseen: "Jan 15,2025 09:00",
      reason: "At rest",
    },
    {
      id: 18,
      name: "Lucy Akinyi",
      completedrides: 110,
      photo: "/driverpic.svg",
      commissiondue: 600,
      Status: "Inactive",
      vehicle: "KFG 678H",
      rating: 4.6,
      ratingphoto: "/rating.svg",
      pendingpayout: "ksh 1900",
      lastseen: "Jan 20,2025 14:30",
      reason: "Due to commission",
    },
  ];
  
  export const inactiveColumns = [
    { header: "Name", accessor: "name" },
    { header: "Completed Rides", accessor: "completedrides" },
    { header: "Rating", accessor: "rating" },
    { header: "Commission Due", accessor: "commissiondue" },
    { header: "Pending Payout", accessor: "pendingpayout" },
    { header: "Last Seen", accessor: "lastseen" },
    { header: "Vehicle", accessor: "vehicle" },
    { header: "Reason", accessor: "reason" },
  ];
  
  export const deletedDrivers = [
    {
      id: 19,
      name: "Daniel Kipchumba",
      completedrides: 70,
      photo: "/driverpic.svg",
      commissiondue: 450,
      Status: "Deleted",
      vehicle: "KEF 345G",
      rating: 4.0,
      ratingphoto: "/rating.svg",
      pendingpayout: "ksh 1300",
      date: "2023-08-15",
      reason: "Violation of Terms",
    },
    {
      id: 20,
      name: "Sarah Wanjiku",
      completedrides: 110,
      photo: "/driverpic.svg",
      commissiondue: 600,
      Status: "Deleted",
      vehicle: "KFG 678H",
      rating: 4.6,
      ratingphoto: "/rating.svg",
      pendingpayout: "ksh 1900",
      date: "2023-07-20",
      reason: "Account Deletion Request",
    },
    // Add more data here
  ];

  export const deletedColumns = [
    { header: "Name", accessor: "name" },
    { header: "Completed Rides", accessor: "completedrides" },
    { header: "Rating", accessor: "rating" },
    { header: "Commission Due", accessor: "commissiondue" },
    { header: "Pending Payout", accessor: "pendingpayout" },
    { header: "Date", accessor: "date" },
    { header: "Vehicle", accessor: "vehicle" },
    { header: "Reason", accessor: "reason" },
  ];
  
  export const blockedDrivers = [
    {
      id: 21,
      name: "Michael Otieno",
      completedrides: 85,
      photo: "/driverpic.svg",
      commissiondue: 500,
      Status: "Suspended",
      vehicle: "KGH 901I",
      rating: 4.2,
      ratingphoto: "/rating.svg",
      pendingpayout: "ksh 1400",
      reason: "Incomplete Details",
    },
    {
      id: 22,
      name: "Esther Muthoni",
      completedrides: 95,
      photo: "/driverpic.svg",
      commissiondue: 580,
      Status: "Declined Application",
      vehicle: "KHI 234J",
      rating: 4.4,
      ratingphoto: "/rating.svg",
      pendingpayout: "ksh 1700",
      reason: "Incomplete Details",
    },
    {
      id: 23,
      name: "Daniel Kipchumba",
      completedrides: 70,
      photo: "/driverpic.svg",
      commissiondue: 450,
      Status: "Declined Application",
      vehicle: "KEF 345G",
      rating: 4.0,
      ratingphoto: "/rating.svg",
      pendingpayout: "ksh 1300",
      reason: "Rudeness",
    },
    {
      id: 24,
      name: "Sarah Wanjiku",
      completedrides: 110,
      photo: "/driverpic.svg",
      commissiondue: 600,
      Status: "Suspended",
      vehicle: "KFG 678H",
      rating: 4.6,
      ratingphoto: "/rating.svg",
      pendingpayout: "ksh 1900",
      reason: "Rudeness",
    },
  ];
  
  export const blockedColumns = [
    { header: "Name", accessor: "name" },
    { header: "Completed Rides", accessor: "completedrides" },
    { header: "Rating", accessor: "rating" },
    { header: "Commission Due", accessor: "commissiondue" },
    { header: "Pending Payout", accessor: "pendingpayout" },
    { header: "Vehicle", accessor: "vehicle" },
    { header: "Status", accessor: "Status" },
    { header: "Reason", accessor: "reason" },
  ];
  //single driver tables
  export const ridesData = [
    {
      id: 1,
      route: "From Archives to Adams",
      tripCost: 1200,
      date: "22/07/2025",
      rating: 4.5,
      paymentMethod: "Mpesa",
      status: "Completed",
    },
    {
      id: 2,
      route: "From Westlands to Thika",
      tripCost: 800,
      date: "23/07/2025",
      rating: 3.8,
      paymentMethod: "Cash",
      status: "Ongoing",
    },
    {
      id: 3,
      route: "From Westlands to Thika",
      tripCost: 800,
      date: "23/07/2025",
      rating: 3.8,
      paymentMethod: "Cash",
      status: "Ongoing",
    },
    {
      id: 4,
      route: "From Westlands to Thika",
      tripCost: 800,
      date: "23/07/2025",
      rating: 3.8,
      paymentMethod: "Cash",
      status: "Cancelled",
    },
  ];
  
  export const ridesColumns = [
    { header: "Route", accessor: "route" },
    { header: "Trip Cost", accessor: "tripCost" },
    { header: "Date", accessor: "date" },
    { header: "Rating", accessor: "rating" },
    { header: "Payment Method", accessor: "paymentMethod" },
    { header: "Status", accessor: "status" },
  ];export const deliveriesData = [
    {
      id: 1,
      route: "From Archives to Adams",
      deliveryCost: 1500,
      date: "22/07/2025",
      rating: 4.2,
      paymentMethod: "Mpesa",
      status: "Completed",
    },
    {
      id: 2,
      route: "From Westlands to Thika",
      deliveryCost: 1000,
      date: "23/07/2025",
      rating: 3.5,
      paymentMethod: "Cash",
      status: "Ongoing",
    },
    {
      id: 3,
      route: "From Westlands to Thika",
      deliveryCost: 1000,
      date: "23/07/2025",
      rating: 3.5,
      paymentMethod: "Cash",
      status: "Ongoing",
    },
    {
      id: 4,
      route: "From Westlands to Thika",
      deliveryCost: 1000,
      date: "23/07/2025",
      rating: 3.5,
      paymentMethod: "Cash",
      status: "Ongoing",
    },
  ];
  
  export const deliveriesColumns = [
    { header: "Route", accessor: "route" },
    { header: "Delivery Cost", accessor: "deliveryCost" },
    { header: "Date", accessor: "date" },
    { header: "Rating", accessor: "rating" },
    { header: "Payment Method", accessor: "paymentMethod" },
    { header: "Status", accessor: "status" },
  ];

  export const disputesData = [
    {
      id: 1,
      photo: "/driverpic.svg",
      customer: "John Doe",
      tripCost: 1200,
      tripType: "Ride",
      route: "From Archives to Adams",
      date: "22/07/2025",
      comment: "Customer declined to pay",
    },
    {
      id: 2,
      
        photo: "/driverpic.svg",
        customer: "John Doe",
     
      tripCost: 1200,
      tripType: "Ride",
      route: "From Archives to Adams",
      date: "22/07/2025",
      comment: "Customer declined to pay",
    },
    {
      id: 3,
      
        photo: "/driverpic.svg",
        customer: "John Doe",
      
      tripCost: 1200,
      tripType: "Ride",
      route: "From Archives to Adams",
      date: "22/07/2025",
      comment: "Customer declined to pay",
    },
    {
      id: 4,
     
        photo: "/driverpic.svg",
        customer: "Jane Smith",
      
      tripCost: 800,
      tripType: "Parcel Delivery",
      route: "From Westlands to Thika",
      date: "23/07/2025",
      comment: "Driver took a longer route",
    },
  ];
  
  export const disputesColumns = [
    { header: "Customer", accessor: "customer" },
    { header: "Trip Cost", accessor: "tripCost" },
    { header: "Trip Type", accessor: "tripType" },
    { header: "Route", accessor: "route" },
    { header: "Date", accessor: "date" },
    { header: "Comment", accessor: "comment" },
  ];
  export const reviewsData = [
    {
      id: 1,
    
        photo: "/driverpic.svg",
        customer: "John Doe",
      
      tripCost: 1200,
      date: "22/07/2025",
      rating: 4.5,
      tip: 400,
      comment: "Driver was conversational",
    },
    {
      id: 2,
      
        photo: "/driverpic.svg",
        customer: "Jane Smith",
      
      tripCost: 800,
      date: "23/07/2025",
      rating: 3.8,
      tip: 200,
      comment: "Driver was late",
    },
    {
      id: 3,
      photo: "/driverpic.svg",
      customer: "Jane Smith",
      tripCost: 800,
      date: "23/07/2025",
      rating: 3.8,
      tip: 200,
      comment: "Driver was late",
    },
    {
      id: 4,
      photo: "/driverpic.svg",
      customer: "Jane Smith",
      tripCost: 800,
      date: "23/07/2025",
      rating: 3.8,
      tip: 200,
      comment: "Driver was late",
    },
  ];
  
  export const reviewsColumns = [
    { header: "Customer", accessor: "customer" },
    { header: "Trip Cost", accessor: "tripCost" },
    { header: "Date", accessor: "date" },
    { header: "Rating", accessor: "rating" },
    { header: "Tip", accessor: "tip" },
    { header: "Comment", accessor: "comment" },
  ];
  export const uploadedDocuments = [
    {
      id: 1,
      name: "Driver License",
      fileUrl: "/Rectangle 1040.png", 
    },
    {
      id: 2,
      name: "Proof of Insurance",
      fileUrl: "/Rectangle 1040.png", 
    },
    {
      id: 3,
      name: "License Plate",
      fileUrl: "/Rectangle 1040.png", 
    },
  ];
  // for  customer Tables
  export const OnlineCustomers = [
    {
      id: 1,
      name: "John Kamau",
      completedrides: 80,
      completeddeliveries: 80,
      photo: "/driverpic.svg",
      rating: "4.0",
      ratingphoto: "/rating.svg",
      inaride: "Yes",
    },
    {
      id: 2,
      name: "Alex Yeye",
      completedrides: 80,
      completeddeliveries: 80,
      photo: "/driverpic.svg",
      rating: "4.0",
      ratingphoto: "/rating.svg",
      inaride: "No",
    },
    // Add more data here
  ];

  
export const OnlineColumnscustomers = [
    { header: "Name", accessor: "name" },
    { header: "Completed Rides", accessor: "completedrides" },
    { header: "Completed Deliveries", accessor: "completeddeliveries" },
    { header: "Rating", accessor: "rating" },
    { header: "In a Ride?", accessor: "inaride" },
  ];

  export const inactiveCustomers = [
    {
      id: 3,
      name: "John Kamau",
      completedrides: 80,
      photo: "/driverpic.svg",
      rating: "4.0",
      ratingphoto: "/rating.svg",
      reason: "Account Abandonment",
      lastseen: "Dec 30,2024 05:48",
    },
    {
      id: 4,
      name: "Alex Yeye",
      completedrides: 80,
      photo: "/driverpic.svg",
      rating: "4.0",
      ratingphoto: "/rating.svg",
      reason: "No booking",
      lastseen: "Dec 30,2024 05:48",
    },
    // Add more data here
  ];

  
export const inactiveColumnscustomers = [
    { header: "Name", accessor: "name" },
    { header: "Completed Rides", accessor: "completedrides" },
    { header: "Rating", accessor: "rating" },
    { header: "Last Seen", accessor: "lastseen" },
    { header: "Reason", accessor: "reason" },
  ];

  export const deletedCustomers = [
    {
      id: 5,
      name: "John Kamau",
      completedrides: 80,
      photo: "/driverpic.svg",
      rating: "4.0",
      ratingphoto: "/rating.svg",
      reason: "No longer using the account",
      date: "Dec 30,2024 05:48",
    },
    {
      id: 6,
      name: "Alex Yeye",
      completedrides: 80,
      photo: "/driverpic.svg",
      rating: "4.0",
      ratingphoto: "/rating.svg",
      reason: "No longer using the account",
      date: "Dec 30,2024 05:48",
    },
    // Add more data here
  ];

  
export const deletedColumnscustomers = [
    { header: "Name", accessor: "name" },
    { header: "Completed Rides", accessor: "completedrides" },
    { header: "Rating", accessor: "rating" },
    { header: "Date", accessor: "date" },
    { header: "Reason", accessor: "reason" },
  ];

  export const blockedCustomers = [
    {
      id: 7,
      name: "John Kamau",
      completedrides: 80,
      photo: "/driverpic.svg",
      rating: "4.0",
      ratingphoto: "/rating.svg",
      reason: "Rudeness",
    },
    {
      id: 8,
      name: "Alex Yeye",
      completedrides: 80,
      photo: "/driverpic.svg",
      rating: "4.0",
      ratingphoto: "/rating.svg",
      reason: "A lot of Negative Reviews",
    },
    // Add more data here
  ];

  
export const blockedColumnscustomers = [
    { header: "Name", accessor: "name" },
    { header: "Completed Rides", accessor: "completedrides" },
    { header: "Rating", accessor: "rating" },
    { header: "Reason", accessor: "reason" },
  ];

   // for  rides Tables
   export const completedTrips = [
    {
      id: 1,
      driver: "John Kamau",
      customer:  "John Kamau",
      paymentmethod:  "Mpesa",
      tripcost:  1200,
      photo: "/driverpic.svg",
      rating: "4.0",
      ratingphoto: "/rating.svg",
      route: "From Archives to Adams",
      datecompleted: "Dec 30,2024 05:48",
    },
    {
      id: 2,
      driver: "Elis Goer",
      customer:  "Trump Tax",
      paymentmethod:  "Bank",
      tripcost:  1600,
      photo: "/driverpic.svg",
      rating: "4.0",
      ratingphoto: "/rating.svg",
      route: "From Archives to Adams",
      datecompleted: "Dec 30,2024 05:48",
    },
    {
      id: 3,
      driver: "Truew Chits",
      customer:  "Allan Dube",
      paymentmethod:  "Cash",
      tripcost:  1200,
      photo: "/driverpic.svg",
      rating: "4.0",
      ratingphoto: "/rating.svg",
      route: "From Archives to Adams",
      datecompleted: "Dec 30,2024 05:48",
    },
    // Add more data here
  ];

  
export const completedTripsColumns = [
    { header: "Driver", accessor: "driver" },
    { header: "Customer", accessor: "customer" },
    { header: "Payment Method", accessor: "paymentmethod" },
    { header: "Trip Cost", accessor: "tripcost" },
    { header: "Rating", accessor: "rating" },
    { header: "Route", accessor: "route" },
    { header: "Date Completed", accessor: "datecompleted" },
  ];

  export const cancelledTrips = [
    {
      id: 4,
      driver: "John Kamau",
      customer:  "John Kamau",
      paymentmethod:  "Mpesa",
      tripcost:  1200,
      photo: "/driverpic.svg",
      rating: "4.0",
      ratingphoto: "/rating.svg",
      route: "From Archives to Adams",
      date: "Dec 30,2024 05:48",
      reason: "Driver took too long",
    },
    {
      id: 5,
      driver: "Elis Goer",
      customer:  "Trump Tax",
      paymentmethod:  "Bank",
      tripcost:  1600,
      photo: "/driverpic.svg",
      rating: "4.0",
      ratingphoto: "/rating.svg",
      route: "From Archives to Adams",
      date: "Dec 30,2024 05:48",
      reason: "Driver took too long",
    },
    {
      id: 6,
      driver: "Truew Chits",
      customer:  "Allan Dube",
      paymentmethod:  "Cash",
      tripcost:  1200,
      photo: "/driverpic.svg",
      rating: "4.0",
      ratingphoto: "/rating.svg",
      route: "From Archives to Adams",
      date: "Dec 30,2024 05:48",
      reason: "Driver took too long",
    },
    // Add more data here
  ];

  
export const cancelledTripsColumns = [
    { header: "Driver", accessor: "driver" },
    { header: "Customer", accessor: "customer" },
    { header: "Payment Method", accessor: "paymentmethod" },
    { header: "Trip Cost", accessor: "tripcost" },
    { header: "Route", accessor: "route" },
    { header: "Date", accessor: "date" },
    { header: "Reason", accessor: "reason" },
  ];

  export const liveTrips = [
    {
      id: 7,
      driver: "John Kamau",
      customer:  "John Kamau",
      paymentmethod:  "Mpesa",
      tripcost:  1200,
      photo: "/driverpic.svg",
      route: "Archives to Adams",
      noofstops: "2",
      pickuptime: "Dec 30,2024 05:48",
    },
    {
      id: 8,
      driver: "Elis Goer",
      customer:  "Trump Tax",
      paymentmethod:  "Bank",
      tripcost:  1600,
      photo: "/driverpic.svg",
      route: "Archives to Adams",
      noofstops: "2",
      pickuptime: "Dec 30,2024 05:48",
    },
    {
      id: 9,
      driver: "Truew Chits",
      customer:  "Allan Dube",
      paymentmethod:  "Cash",
      tripcost:  1200,
      photo: "/driverpic.svg",
      route: "Archives to Adams",
      noofstops: "2",
      pickuptime: "Dec 30,2024 05:48",
    },
    // Add more data here
  ];

  
export const liveTripsColumns = [
    { header: "Driver", accessor: "driver" },
    { header: "Customer", accessor: "customer" },
    { header: "Trip Cost", accessor: "tripcost" },
    { header: "No of Stops", accessor: "noofstops" },
    { header: "Payment Method", accessor: "paymentmethod" },
    { header: "Pick up Time", accessor: "pickuptime" },
    { header: "Route", accessor: "route" },
  ];

  // for  parcel deliveries Tables

  export const liveDeliveries = [
    {
      id: 1,
      driver: "John Kamau",
      customer:  "John Kamau",
      recepient:  "Simon Ndungu",
      deliverycost:  1200,
      photo: "/driverpic.svg",
      route: "From Archives to Adams",
      distance: "5.5 Kilometres",
    },
    {
      id: 2,
      driver: "John Kamau",
      customer:  "John Kamau",
      recepient:  "Simon Ndungu",
      deliverycost:  1200,
      photo: "/driverpic.svg",
      route: "From Archives to Adams",
      distance: "5.5 Kilometres",
    },
   
    // Add more data here
  ];

  
export const liveDeliveriesColumns = [
    { header: "Driver", accessor: "driver" },
    { header: "Customer", accessor: "customer" },
    { header: "Recepient", accessor: "recepient" },
    { header: "Delivery Cost", accessor: "deliverycost" },
    { header: "Route", accessor: "route" },
    { header: "Distance", accessor: "distance" },
  
  ];

  export const completedDeliveries = [
    {
      id: 3,
      driver: "John Kamau",
      sender:  "Brian Lumire",
      recepient:  "Simon Ndungu",
      deliverycost:  1200,
      paymentmethod:  "Cash",
      rating: "4.0",
      ratingphoto: "/rating.svg",
      photo: "/driverpic.svg",
      route: "From Archives to Adams",
      distance: "5.5 Kilometres",
      date: "Dec 30,2024 05:48",
    },
    {
      id: 4,
      driver: "John Kamau",
      sender:  "Brian Lumire",
      recepient:  "Simon Ndungu",
      deliverycost:  1200,
      paymentmethod:  "Mpesa",
      rating: "4.0",
      ratingphoto: "/rating.svg",
      photo: "/driverpic.svg",
      route: "From Archives to Adams",
      distance: "5.5 Kilometres",
      date: "Dec 30,2024 05:48",
    },
    {
      id: 5,
      driver: "Thn Kamau",
      sender:  "Brian Lumire",
      recepient:  "Simon Ndungu",
      deliverycost:  1200,
      paymentmethod:  "Bank",
      rating: "4.0",
      ratingphoto: "/rating.svg",
      photo: "/driverpic.svg",
      route: "From Archives to Adams",
      distance: "5.5 Kilometres",
      date: "Dec 30,2024 05:48",
    },
   
    // Add more data here
  ];

  
export const completedDeliveriesColumns = [
    { header: "Driver", accessor: "driver" },
    { header: "Sender", accessor: "sender" },
    { header: "Recepient", accessor: "recepient" },
    { header: "Delivery Cost", accessor: "deliverycost" },
    { header: "Payment Method", accessor: "paymentmethod" },
    { header: "Rating", accessor: "rating" },
    { header: "Route", accessor: "route" },
    { header: "Distance", accessor: "distance" },
    { header: "Date", accessor: "date" },
  
  ];

  export const cancelledDeliveries = [
    {
      id: 6,
      driver: "Tony Kamau",
      customer:  "Peter Njenga",
      paymentmethod:  "Bank",
      reason:  "Driver took too long",
      photo: "/driverpic.svg",
      route: "From Archives to Adams",
      date: "Dec 30,2024 05:48",
    },
    {
      id: 7,
      driver: "Tony Kamau",
      customer:  "Peter Njenga",
      paymentmethod:  "Bank",
      reason:  "Driver took too long",
      photo: "/driverpic.svg",
      route: "From Archives to Adams",
      date: "Dec 30,2024 05:48",
    },
   
    // Add more data here
  ];

  
export const cancelledDeliveriesColumns = [
    { header: "Driver", accessor: "driver" },
    { header: "Customer", accessor: "customer" },
    { header: "Payment Method", accessor: "paymentmethod" },
    { header: "Route", accessor: "route" },
    { header: "Date", accessor: "date" },  
    { header: "Reason", accessor: "reason" },
  ];