import { useDispatch } from "react-redux"
import { DragEventHandler } from "react";
import { toast } from "react-toastify";
import { CityItem } from "../city-item/city-item";
import { DragArea } from "../../const/const";
import { setDragArea } from "../../store/dnd-slice/dnd-slice";
import { ContentCards } from "../common-styles/content-cards";
import { useFilteredCities } from "../../hooks/use-filtered-cities";


export function CitiesList() {
  const dispatch = useDispatch()
  const {filteredCities, isError} = useFilteredCities();

  if (isError) {
    toast.error('Ошибка сервера загрузки городов. Попробуйте позжу');
  }

  const citiesElements = filteredCities.map((item) => <CityItem city={item} key={item.id}/>)

  const handleDragEnter: DragEventHandler = (evt) => {
    evt.preventDefault()
    dispatch(setDragArea(DragArea.Cities))
  }

  return (
    <ContentCards
     onDragEnter={handleDragEnter}
     >
      {citiesElements}
    </ContentCards>
  )
}



