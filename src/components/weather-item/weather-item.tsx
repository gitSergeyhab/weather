import { ICityItem } from "../../types/city-types";


// const CityItemLi = styled.li.attrs({draggable: true})`
//   border: 4px solid #000;
//   cursor: pointer;
// `

export function WeatherItem() {
  return (
    <div className="big-card">
    <div className="big-card__header">
      <span className="icon icon--strips-big" />
      <span className="big-card__city">Великий Новгород</span>
    </div>
    <div className="big-card__content">
      <div className="big-card__content-wrapper">
        <div className="big-card__weather-conditions">
          <span className="icon icon--rainy" />
          <span className="icon icon--meteor-shower" />
          <span className="icon icon--tornado" />
        </div>
        <div className="big-card__wind">
          <span className="icon icon--wind" />
          <span className="big-card__wind-info">Ветер ЮВ, 0-1 м/с</span>
        </div>
      </div>
      <span className="big-card__temperature">+12°</span>
    </div>
  </div>
)

}
