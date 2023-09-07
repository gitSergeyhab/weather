import { CityData, ICityItem } from "../types/city-types";

export const adaptServerCityToCityItem = (serverCity: CityData): ICityItem => ({
 cityName: serverCity.name,
 countryName: serverCity.country,
 id: serverCity.id,
 latitude: serverCity.latitude,
 longitude: serverCity.longitude
})
