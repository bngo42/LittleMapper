export enum LocationPointType {
  Start = 'start',
  End = 'end'
}

export interface LocationApiResponse {
  attribution: string;
  features: LocationFeature[];
  filters: { type: LocationType }
  licence: string;
  limit: number;
  query: string;
  type: string;
  version: string;
}

export interface LocationFeature {
  type: string;
  geometry: {
    type: string;
    coordinates: number[];
  },
  properties: {
    city: string;
    citycode: string;
    context: string;
    housenumber: string;
    id: string;
    importance: number;
    label: string;
    name: string;
    postcode: string;
    score: number;
    street: string;
    type: string;
    x: number;
    y: number;
  }
}

export type LocationType = 'housenumber' | 'street' | 'locality' | 'municipality';
