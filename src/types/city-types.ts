export interface CityData {
  id:          number;
  wikiDataId:  string;
  type:        string;
  city:        string;
  name:        string;
  country:     string;
  countryCode: string;
  region:      string;
  regionCode:  string;
  regionWdId:  string;
  latitude:    number;
  longitude:   number;
  population:  number;
}

export interface CityMetaData {
  currentOffset: number
  totalCount: 4
}

export interface CityResponseData {
  data: CityData[],
  metadata: CityMetaData,
}

export interface ICityItem {
  id: number,
  cityName: string,
  countryName: string,
  lat: number,
  lon: number,
}
