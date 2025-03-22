export type Trip = {
  tripId: string;
  deviceId: string;
  vehicleId: string;
  startTimestamp: number;
  endTimestamp: number;
  startLocation: Location;
  endLocation: Location;
  totalDistance: number;
  avgSpeed: number;
  maxSpeed: number;
  drivingScore: number;
  driveStability: 'Poor' | 'Average' | 'Good' | 'Excellent';
  date: string;
  harshBreaking: number;
};

export type Location = {
  address: string;
  latitude: number;
  longitude: number;
};
