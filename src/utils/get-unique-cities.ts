import { CityData } from "../types/city-types";


/**
 * удаляет повторы городов
 * @param cities гогода из респонса (апи иногда выдает повторы городов, поэтому фильтруем)
 * @returns
 */
export const getUniqueCitiesById = (cities: CityData[]) => {
  const ids = {} as {[key: number]: boolean};

  return cities.filter((item) => {
    const {id} = item;
    const result = !!ids[id];
    ids[id] = true;
    return !result
  })
}


export const getUniqueCitiesByNames = (cities: CityData[]) => {
  const names = {} as {[key: string]: boolean};

  return cities.filter((item) => {
    const {countryCode, name} = item;
    const fullName = countryCode + name;
    const result = !!names[fullName];
    names[fullName] = true;
    return !result
  })
}


export const getUniqueCities = (cities: CityData[]) => getUniqueCitiesByNames(getUniqueCitiesById(cities));
