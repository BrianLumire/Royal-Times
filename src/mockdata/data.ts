export const onlineDrivers = [
    {
      id: 1,
      name: "Juma Mwaura",
      completedrides: 100,
      photo: "/driverpic.svg",
      commissiondue: 650,
      Status: "Busy",
      vehicle: "KDS 004B",
      rating: "4.2 Stars",
      ratingphoto: "rating.svg",
      pendingpayout: "ksh 2000",
    },
    {
      id: 2,
      name: "Jane Doe",
      completedrides: 50,
      photo: "/driverpic.svg",
      commissiondue: 300,
      Status: "Free",
      vehicle: "KCS 123A",
      rating: "4.5 Stars",
      ratingphoto: "rating.svg",
      pendingpayout: "ksh 1500",
    },
    // Add more data here
  ];

  // Columns for Online Drivers Table
export const onlineColumns = [
    { header: "Name", accessor: "name" },
    { header: "Completed Rides", accessor: "completedrides" },
    { header: "Rating", accessor: "rating" },
    { header: "Commission Due", accessor: "commissiondue" },
    { header: "Pending Payout", accessor: "pendingpayout" },
    { header: "Vehicle", accessor: "vehicle" },
    { header: "Status", accessor: "Status" },
  ];
  
  export const offlineDrivers = [
    {
      id: 3,
      name: "John Kamau",
      completedrides: 80,
      photo: "/driverpic.svg",
      commissiondue: 500,
      Status: "Offline",
      vehicle: "KAB 123C",
      rating: "4.0 Stars",
      ratingphoto: "rating.svg",
      pendingpayout: "ksh 1800",
      lastseen: "3 hours ago",
    },
    {
      id: 4,
      name: "Mary Wambui",
      completedrides: 120,
      photo: "/driverpic.svg",
      commissiondue: 700,
      Status: "Offline",
      vehicle: "KBC 456D",
      rating: "4.7 Stars",
      ratingphoto: "rating.svg",
      pendingpayout: "ksh 2200",
      lastseen: "5 hours ago",
    },
    // Add more data here
  ];

  // Columns for Offline Drivers Table
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
      id: 5,
      name: "Peter Otieno",
      photo: "/driverpic.svg",
      vehicleclass: "Sedan",
      propulsion: "Petrol",
      age: 28,
      location: "Nairobi",
      date: "Dec 30,2024 05.18",
      actionsphoto: "/3 dot action.svg",
    },
    {
      id: 6,
      name: "Lucy Akinyi",
      photo: "/driverpic.svg",
      vehicleclass: "SUV",
      propulsion: "Diesel",
      age: 35,
      location: "Mombasa",
      date: "Jan 10,2025 11.18",
      actionsphoto: "/3 dot action.svg",
    },
    // Add more data here
  ];

  export const unapprovedColumns = [
    { header: "Name", accessor: "name" },
    { header: "Vehicle Class", accessor: "vehicleclass" },
    { header: "Propulsion", accessor: "propulsion" },
    { header: "Age", accessor: "age" },
    { header: "Location", accessor: "location" },
    { header: "Date", accessor: "date" },
    { header: "Actions", accessor: "actionsphoto" },
  ];
  
  export const inactiveDrivers = [
    {
      id: 7,
      name: "James Omondi",
      completedrides: 60,
      photo: "/driverpic.svg",
      commissiondue: 400,
      Status: "Inactive",
      vehicle: "KCD 789E",
      rating: "4.1 Stars",
      ratingphoto: "rating.svg",
      pendingpayout: "ksh 1200",
      lastseen: "Jan 14,2025 05:24",
      reason: "Account Suspended",
    },
    {
      id: 8,
      name: "Grace Atieno",
      completedrides: 90,
      photo: "/driverpic.svg",
      commissiondue: 550,
      Status: "Inactive",
      vehicle: "KDE 012F",
      rating: "4.3 Stars",
      ratingphoto: "rating.svg",
      lastseen: "Dec 14,2024 15:24",
      pendingpayout: "ksh 1600",
      reason: "Voluntary Deactivation",
    },
    // Add more data here
  ];

  export const inactiveColumns = [
    { header: "Name", accessor: "name" },
    { header: "Completed Rides", accessor: "completedrides" },
    { header: "Rating", accessor: "rating" },
    { header: "Commission Due", accessor: "commissiondue" },
    { header: "Pending Payout", accessor: "pendingpayout" },
    { header: "Last Seen", accessor: "pendingpayout" },
    { header: "Vehicle", accessor: "vehicle" },
    { header: "Reason", accessor: "reason" },
  ];
  
  export const deletedDrivers = [
    {
      id: 9,
      name: "Daniel Kipchumba",
      completedrides: 70,
      photo: "/driverpic.svg",
      commissiondue: 450,
      Status: "Deleted",
      vehicle: "KEF 345G",
      rating: "4.0 Stars",
      ratingphoto: "rating.svg",
      pendingpayout: "ksh 1300",
      date: "2023-08-15",
      reason: "Violation of Terms",
    },
    {
      id: 10,
      name: "Sarah Wanjiku",
      completedrides: 110,
      photo: "/driverpic.svg",
      commissiondue: 600,
      Status: "Deleted",
      vehicle: "KFG 678H",
      rating: "4.6 Stars",
      ratingphoto: "rating.svg",
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
      id: 11,
      name: "Michael Otieno",
      completedrides: 85,
      photo: "/driverpic.svg",
      commissiondue: 500,
      Status: "Blocked",
      vehicle: "KGH 901I",
      rating: "4.2 Stars",
      ratingphoto: "rating.svg",
      pendingpayout: "ksh 1400",
      reason: "Fraudulent Activity",
    },
    {
      id: 12,
      name: "Esther Muthoni",
      completedrides: 95,
      photo: "/driverpic.svg",
      commissiondue: 580,
      Status: "Blocked",
      vehicle: "KHI 234J",
      rating: "4.4 Stars",
      ratingphoto: "rating.svg",
      pendingpayout: "ksh 1700",
      reason: "Repeated Violations",
    },
    // Add more data here
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