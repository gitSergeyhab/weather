import { CitiesList } from "../cities-list/cities-list";
import { WeatherList } from "../weather-list/weather-list";

export function CitiesContentSection () {
  return (
    <section className="weather-content__result">
      <h2 className="visually-hidden">Результаты сортировки</h2>
        <CitiesList/>
        <WeatherList/>
    </section>
  )

}
