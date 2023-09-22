import { useDispatch, useSelector } from "react-redux";
import { DragEventHandler, useEffect, useMemo } from "react";
import styled from "styled-components";
import { WeatherItem } from "../weather-item/weather-item";
import { ReducerType } from "../../store/store";
import { setDragArea, setDragCityId, setDragCityPosition } from "../../store/dnd-slice/dnd-slice";
import { CityWeatherPosition, DragArea } from "../../const/const";
import { setWeatherCityListByDrag } from "../../store/content-slice/content-slice";
import { filterWeatherCitiesByConditions } from "../../utils/filters";
import { ContentBigCards } from "../common-styles/content-cards";
import { setWeatherCitiesToLS } from "../../utils/storage-utils";


// const compareCityLists = (first: ICityWeather[], second:ICityWeather[]) => {
//   if (first.length !== second.length) return false;
//   for (let i=0; i<first.length; i++) {
//     if (first[i] !== second[i]) {
//       return false;
//     }
//   }
//   return true
// }

export const WeatherContentHelp  = styled.div`
  position: absolute;
  top: 56px;
  left: 0;
  z-index: -1;
  width: 100%;
  padding-right: 65px;
  padding-left: 65px;
  line-height: 32px;
  text-align: center;
  color: var(--color-text-help);
`;


export function WeatherList () {
  const {dragArea, dragCityId, dragCityPosition} = useSelector((state: ReducerType) => state.dndSlice)
  const {weatherCityList} = useSelector((state: ReducerType) => state.contentSlice);
  const {filterChecked} = useSelector((state: ReducerType) => state.contentSlice);
  const dispatch = useDispatch();

  console.log('WEATHER___________________________')

  useEffect(() => {
    dispatch(setWeatherCityListByDrag({dragArea, dragCityId, dragCityPosition}));
  }, [dragArea, dragCityId, dragCityPosition, dispatch])

  useEffect(() => {
    setWeatherCitiesToLS(weatherCityList);
  }, [weatherCityList])


  const filteredWeatherCities = useMemo(() =>
    filterWeatherCitiesByConditions({ weatherCityList,  filterChecked }),
    [weatherCityList, filterChecked]
    )
  const citiesElements =  useMemo(() =>
    filteredWeatherCities.map((item) => <WeatherItem key={item.cityId} cityWeather={item}/>),
    [filteredWeatherCities]
    )


  const handleDragEnter: DragEventHandler = (evt) => {
    evt.preventDefault()
    dispatch(setDragArea(DragArea.Weather))
  }

  const handleDragLeave: DragEventHandler = (evt) => {
    evt.preventDefault()
    const { relatedTarget, currentTarget } = evt
    if (relatedTarget instanceof Element && !currentTarget.contains(relatedTarget)) {
      dispatch(setDragCityId(null))
      dispatch(setDragCityPosition(CityWeatherPosition.None))
    }
  }

  return (
    <ContentBigCards
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
    >
      <WeatherContentHelp>
        Перетащите сюда города, погода в которых вам интересна
      </WeatherContentHelp>
      {citiesElements}
    </ContentBigCards>
  )
}


