import { useDispatch } from "react-redux"
import { DragEventHandler } from "react";
import { toast } from "react-toastify";
import { CityItem } from "../city-item/city-item";
import { DragArea } from "../../const/const";
import { setDragArea } from "../../store/dnd-slice/dnd-slice";
import { ContentCards } from "../common-styles/content-cards";

import { useFilteredCities } from "../../hooks/use-firltered-cities";

// const x = [
//   {
//       "cityName": "Моламьяйн",
//       "countryName": "Мьянма",
//       "id": 72263,
//       "lat": 16.484722222,
//       "lon": 97.625833333
//   },
//   {
//       "cityName": "Можи-дас-Крузис",
//       "countryName": "Бразилия",
//       "id": 138059,
//       "lat": -23.56813,
//       "lon": -46.1877
//   },
//   {
//       "cityName": "Морено",
//       "countryName": "Аргентина",
//       "id": 3680605,
//       "lat": -34.65,
//       "lon": -58.783333333
//   },
//   {
//       "cityName": "Монтерия",
//       "countryName": "Колумбия",
//       "id": 3319679,
//       "lat": 8.76,
//       "lon": -75.885555555
//   },
//   {
//       "cityName": "Сан-Хосе-дель-Монте",
//       "countryName": "Филиппины",
//       "id": 87915,
//       "lat": 14.813888888,
//       "lon": 121.045277777
//   },
//   {
//       "cityName": "Морелия",
//       "countryName": "Мексика",
//       "id": 78325,
//       "lat": 19.702777777,
//       "lon": -101.192222222
//   },
//   {
//       "cityName": "Морадабад",
//       "countryName": "Индия",
//       "id": 147513,
//       "lat": 28.843236111,
//       "lon": 78.728741666
//   },
//   {
//       "cityName": "Монровия",
//       "countryName": "Либерия",
//       "id": 70484,
//       "lat": 6.310555555,
//       "lon": -10.804722222
//   },
//   {
//       "cityName": "Монтеррей",
//       "countryName": "Мексика",
//       "id": 2970136,
//       "lat": 25.671388888,
//       "lon": -100.308611111
//   },
//   {
//       "cityName": "Момбаса",
//       "countryName": "Кения",
//       "id": 68826,
//       "lat": -4.05,
//       "lon": 39.666666666
//   }
// ]



export function CitiesList() {

  const dispatch = useDispatch()

  const {filteredCities, isError} = useFilteredCities();
  console.log('CITY_LIST_______________')

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



