import { useDispatch, useSelector } from "react-redux"
import { DragEventHandler } from "react";
import { ReducerType } from "../../store/store"
import { CityItem } from "../city-item/city-item";
import { contentSlice } from "../../store/content-slice/content-slice";
import { DragArea } from "../../const";
import { setDragArea } from "../../store/dnd-slice/dnd-slice";



export function CitiesList () {

  const {cities} = useSelector((state: ReducerType) => state[contentSlice.name]);
  const citiesElements = cities.map((item) => <CityItem key={item.id} city={item}/>)

  const dispatch = useDispatch()

  const handleDragEnter: DragEventHandler = (evt) => {
    evt.preventDefault()
    dispatch(setDragArea(DragArea.Cities))
  }
  // const handleDragLeave: DragEventHandler = (evt) => {
  //   const {currentTarget, relatedTarget} = evt
  //   if (relatedTarget instanceof Element && !currentTarget.contains(relatedTarget)) {
  //     console.log('CitiesList; handleDragLeave')
  //     dispatch(setDragArea(DragArea.None))
  //   }

  // }

  return (
    <div
      className="weather-content__small-cards"
      onDragEnter={handleDragEnter}
      // onDragLeave={handleDragLeave}
    >
      {citiesElements}
    </div>
  )
}
