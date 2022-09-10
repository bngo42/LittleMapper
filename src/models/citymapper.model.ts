type DirectionTimeType = 'arrive' | 'depart' | 'depart_approximate';
type DirectionVehicleType = 'bike' | 'bus' | 'bus_rapid_transit' | 'car' | 'ebike' | 'escooter' |
'ferry' | 'funicular' | 'gondola' | 'helicopter' | 'light_rail' | 'metro' | 'monorail' | 'motorscooter' |
'rail' | 'subway' | 'streetcar' | 'tram' | 'trolley' | 'trolleybus';

export enum DirectionTravelMode {
  Walk = 'walk',
  Transit = 'transit',
  SelfPiloted = 'self_piloted',
  OnDemand = 'on_demand'
}

export interface CM_DirectionApiResponse {
  routes: CM_DirectionRouteConfig[];
  language?: string;
}

interface CM_DirectionCoordinates {
  lat: number;
  lon: number;
}

interface CM_DirectionPrice {
  formatted: string;
  amount: string;
  currency: string;
}

export interface CM_DirectionLegsConfig {
  travel_mode?: DirectionTravelMode;
  duration_seconds?: number;
  path?: string;
  vehicle_types?: DirectionVehicleType[];
}

export interface CM_DirectionRouteConfig {
  start: { coordinates: CM_DirectionCoordinates; };
  end: { coordinates: CM_DirectionCoordinates; };
  duration_seconds: number;
  price: CM_DirectionPrice;
  legs: CM_DirectionLegsConfig[];
  signature: string;
  requested_time: string;
  requested_time_type: string;
}
