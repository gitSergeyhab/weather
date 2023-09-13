import { DragEvent, DragEventHandler } from "react";
import { useDispatch } from "react-redux";
import { ICityWeather } from "../../types/weather-types";
import { getShownTemperature } from "../../utils/utils";
import { ConditionImg } from "../condition-img/condition-img";
import { addEmptyCityWeather, deleteEmptyCityWeather, setCityWeatherDragOverId } from "../../store/content-slice/content-slice";
import { setCityWeatherOverId, setDragCardPosition } from "../../store/dnd-slice/dnd-slice";



export function WeatherItem({cityWeather}: {cityWeather: ICityWeather}) {
  const {cityId, cityName, conditions, countryName, direction, id, temp, windSpeed} = cityWeather
  const dispatch = useDispatch();
  if (id === -1) {
    return (
    <div className="big-card big-card-empty">
      <div className="big-card__header" >
       <br /><br /><br />
      </div>
      <div className="big-card__content" >
       <br /><br />
      </div>
    </div>
      )

  }

  const temperature = getShownTemperature(temp);
  const conditionElements = conditions.map((item) => <ConditionImg key={item} version={item}/>)


  // const handleDragEnter: DragEventHandler = (evt) => {
  //   evt.preventDefault()
  //   dispatch(addEmptyCityWeather(cityId));
  // }
  // const handleDragLeave: DragEventHandler = (evt) => {
  //   evt.preventDefault()
  //   const { relatedTarget, currentTarget } = evt

  //   if (relatedTarget instanceof Element
  //     && !currentTarget.contains(relatedTarget)) {
  //     console.log('dispatch(deleteEmptyCityWeather());')
  //     dispatch(deleteEmptyCityWeather());
  //   }
  // }


  const handleDragEnter: DragEventHandler = (evt) => {
    evt.preventDefault()
      console.log('handleDragEnter; weather-item')
      dispatch(setCityWeatherOverId(cityId))
  }

  const handleDragLeave: DragEventHandler = (evt) => {
    evt.preventDefault()
    const { relatedTarget, currentTarget } = evt
    if (relatedTarget instanceof Element && !currentTarget.contains(relatedTarget)) {
      console.log('handleDragLeave; weather-item')
      dispatch(setCityWeatherOverId(null))
    }
  }

  const handleDragTopEnter: DragEventHandler = (evt) => {
    evt.preventDefault()
    dispatch(setDragCardPosition('top'))
  }

  const handleDragBottomEnter: DragEventHandler = (evt) => {
    evt.preventDefault()
    dispatch(setDragCardPosition('bottom'))
  }
  return (
    <div
      className="big-card"
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
    >
      <div
        className="big-card__header"
        onDragEnter={handleDragTopEnter}
      >
        <span className="icon icon--strips-big" />
        <div>
          <span className="big-card__city">{cityName}</span>
          <br />
          <span className="big-card__city">{countryName}</span>
        </div>


      </div>
      <div
        className="big-card__content"
        onDragEnter={handleDragBottomEnter}
      >
        <div className="big-card__content-wrapper">
          <div className="big-card__weather-conditions">
            {conditionElements}
          </div>
          <div className="big-card__wind">
            <span className="icon icon--wind" />
            <span className="big-card__wind-info">Ветер {direction}, {windSpeed} м/с</span>
          </div>
        </div>
        <span className="big-card__temperature">{temperature}</span>
      </div>
    </div>
)

}
