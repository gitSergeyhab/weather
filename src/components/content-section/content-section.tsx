import { DragEventHandler } from "react";
import { useDispatch } from "react-redux";
import { CitiesList } from "../cities-list/cities-list";
import { WeatherList } from "../weather-list/weather-list";
import { DragArea } from "../../const";
import { setDragArea } from "../../store/dnd-slice/dnd-slice";

export function CitiesContentSection () {
  const dispatch = useDispatch()

  const handleDragLeave: DragEventHandler = (evt) => {
    evt.preventDefault()

    const { relatedTarget, currentTarget } = evt
    if (relatedTarget instanceof Element && !currentTarget.contains(relatedTarget)) {
      console.log('CitiesContentSection handleDragLeave')
      dispatch(setDragArea(DragArea.None))
    }
  }

  return (
    <section
      className="weather-content__result"
      onDragLeave={handleDragLeave}
    >
      <h2 className="visually-hidden">Результаты сортировки</h2>
        <CitiesList/>
        <WeatherList/>
    </section>
  )

}
