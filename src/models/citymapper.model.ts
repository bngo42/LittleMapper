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

interface CM_DirectionUpdatableDetailDepartures {
  type: string;
  service_id: string;
  frequency_seconds_range?: number[];
  time_status: string;
  headsign?: string;
  short_name?: string;
  scheduled_time?: string;
}
interface CM_DirectionUpdatableDetailStatuses {
  type: string;
  service_ids: string[];
}

interface CM_DirectionUpdatableDetail {
  leg_departure_time: string;
  leg_arrival_time: string;
  departures?: CM_DirectionUpdatableDetailDepartures[];
  live_departure_availability?: string;
  statuses?: CM_DirectionUpdatableDetailStatuses[];
}

interface CM_DirectionExitConfig {
  id: string;
  stop_id: string;
  coordinates: CM_DirectionCoordinates;
  name?: string;
  short_name?: string;
}

interface CM_DirectionWalkDetailsStation {
  recommended_exit: CM_DirectionExitConfig;
  alternate_exits?: CM_DirectionExitConfig[];
  duration_seconds: number;
}

interface CM_DirectionLegsServicesImages {
  url: string;
  width: number;
  height: number;
  ui_role: string;
  replaces_name?: boolean;
  id?: string;
  name?: string;
  is_generic?: boolean;
}

interface CM_DirectionLegsServicesBrandConfig {
  id: string;
  name: string;
  images: CM_DirectionLegsServicesImages[];
}

interface CM_DirectionLegsServicesConfig {
  id: string;
  name: string;
  vehicle_types: string[];
  brand: CM_DirectionLegsServicesBrandConfig;
  images: CM_DirectionLegsServicesImages[];
  color: string;
  background_color: string;
  text_color: string;
}

interface CM_DirectionLegsStopsConfig {
  id: string;
  name: string;
  coordinates: CM_DirectionCoordinates;
}

interface CM_DirectionLegsBestBoardingSections {
  front: boolean;
  middle: boolean;
  back: boolean;
}

export interface CM_DirectionLegsConfig {
  travel_mode?: string;
  duration_seconds?: number;
  path?: string;
  vehicle_types?: DirectionVehicleType[];
  updatable_detail?: CM_DirectionUpdatableDetail;
  station_walk_type?: string;
  walk_details_enter_station?: CM_DirectionWalkDetailsStation;
  walk_details_exit_station?: CM_DirectionWalkDetailsStation;
  services?: CM_DirectionLegsServicesConfig[];
  stops?: CM_DirectionLegsStopsConfig[];
  best_boarding_sections?: CM_DirectionLegsBestBoardingSections;
  direction_description?: string;
}

export interface CM_DirectionRouteConfig {
  start: { coordinates: CM_DirectionCoordinates; };
  end: { coordinates: CM_DirectionCoordinates; };
  distance_meters?: number;
  duration_seconds: number;
  duration_accuracy?: string;
  price: CM_DirectionPrice;
  legs: CM_DirectionLegsConfig[];
  signature: string;
  requested_time?: string;
  requested_time_type: string;
  route_departure_time?: string;
  route_arrival_time?: string;
}
