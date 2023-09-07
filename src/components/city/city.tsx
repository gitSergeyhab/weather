import styled from "styled-components";
import { CitiesList } from "../cities-list/cities-list";
import { CityInput } from "../city-input/city-input";
import { TopButtonsPanel } from "../top-buttons-panel/top-buttons-panel";
import { WeatherList } from "../weather-list/weather-list";
import { CitiesContentSection } from "../content-section/content-section";

// const CityWrapper = styled.div`
//   display: flex;
//   flex-wrap: wrap;
// `


export function City () {
  return (
    <main>
    <section className="weather-app">
      <h1 className="visually-hidden">Прогноз погоды</h1>
      <div className="weather-app__content weather-content">
      <TopButtonsPanel/>
      <CitiesContentSection/>
    </div>
    </section>
    </main>
  )
}
