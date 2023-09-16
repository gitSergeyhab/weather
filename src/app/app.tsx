import styled from "styled-components";
import { CitiesContentSection } from "../components/content-section/content-section";
import { TopButtonsPanel } from "../components/top-buttons-panel/top-buttons-panel";
import { VisuallyHidden } from "../components/common-styles/common";
import { MapComponent } from "../components/map-component/map-component";

const WeatherApp = styled.section`
  display: flex;
  width: 100%;
  min-width: 1080px;
  height: 100vh;
  min-height: 880px;
  overflow: hidden;
`

const HiddenHeader = styled.h1`
  ${VisuallyHidden}
`

const WeatherContent = styled.div`
  position: relative;
  z-index: 1;
  flex-shrink: 0;
  height: 100vh;
  min-height: 880px;
  overflow: hidden;
  background: var(--color-blue-lightest);
  box-shadow: 0 0 40px rgba(11, 23, 78, 0.5);
`


export function App () {
  return (
    <main>
      <WeatherApp >
        <HiddenHeader>Прогноз погоды</HiddenHeader>
        <WeatherContent>
          <TopButtonsPanel/>
          <CitiesContentSection/>
        </WeatherContent>
        <MapComponent/>
      </WeatherApp>
    </main>
  )
}
