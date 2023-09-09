import { CityData } from "../types/city-types";


/**
 * удаляет повторы городов
 * @param cities гогода из респонса (апи иногда выдает повторы городов, поэтому фильтруем)
 * @returns
 */
export const getUniqueCities = (cities: CityData[]) => {
  const ids = {} as {[key: number]: boolean};

  return cities.filter((item) => {
    const {id} = item;
    const result = !!ids[id];
    ids[id] = true;
    return !result
  })

}
