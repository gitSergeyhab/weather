import { TopButtonsPanel } from "../top-buttons-panel/top-buttons-panel";
import { CitiesContentSection } from "../content-section/content-section";



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
