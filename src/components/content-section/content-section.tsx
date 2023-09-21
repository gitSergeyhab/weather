import { DragEventHandler } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { CitiesList } from "../cities-list/cities-list";
import { WeatherList } from "../weather-list/weather-list";
import { DragArea } from "../../const/const";
import { setDragArea } from "../../store/dnd-slice/dnd-slice";
import { HiddenH2 } from "../common-styles/common";


const Section = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 2px 4px 0 4px;
`

export function CitiesContentSection () {
  const dispatch = useDispatch();
  console.log('CitiesContentSection')

  const handleDragLeave: DragEventHandler = (evt) => {
    evt.preventDefault()
    const { relatedTarget, currentTarget } = evt;
    if (relatedTarget instanceof Element && !currentTarget.contains(relatedTarget)) {
      dispatch(setDragArea(DragArea.None));
    }
  }

  const handleDragOver: DragEventHandler = (evt) =>  evt.preventDefault()

  return (
    <Section
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
    >
      <HiddenH2>Результаты сортировки</HiddenH2>
      <CitiesList/>
      <WeatherList/>
    </Section>
  )

}
