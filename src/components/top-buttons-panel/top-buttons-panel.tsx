import { CityNameInput } from "../city-name-input/city-name-input";
import { SortOrderButton } from "../sort-order-button/sort-order-button";
import { TopButtonSection } from "../top-buttons-section/top-buttons-section";
import { TopButtonSector } from "../top-buttons-sector/top-buttons-sector";

const sortData = [
  {id: 'alphabet-sort', ariaLabel: 'Сортировка по алфавиту', name: 'alphabet-sort', type: 'radio', version: 'arrow-down'},
  {id: 'alphabet-sort-reverse', ariaLabel: 'Сортировка по алфавиту в обратном направлении', name: 'alphabet-sort', type: 'radio', version: 'arrow-up'}
];

const filterData = [
  {id: 'rainy', ariaLabel: 'Дождливо', name: 'weather-conditions', type: 'checkbox', version: 'rainy'},
  {id: 'sunny', ariaLabel: 'Солнечно', name: 'weather-conditions', type: 'checkbox', version: 'sunny'},
  {id: 'cloudy', ariaLabel: 'Облачно', name: 'weather-conditions', type: 'checkbox', version: 'cloudy'},
  {id: 'snowy', ariaLabel: 'Снежно', name: 'weather-conditions', type: 'checkbox', version: 'snowy'},
  {id: 'stormy', ariaLabel: 'Торнадо', name: 'weather-conditions', type: 'checkbox', version: 'stormy'},
  {id: 'blizzard', ariaLabel: 'Гроза', name: 'weather-conditions', type: 'checkbox', version: 'blizzard'},
  {id: 'meteorite', ariaLabel: 'Метеоритный дождь', name: 'weather-conditions', type: 'checkbox', version: 'meteorite'},
]

export function TopButtonsPanel () {

  const sortButtons = sortData.map(({ariaLabel, id, name, type, version}) =>
    <SortOrderButton ariaLabel={ariaLabel} id={id} name={name} type={type} version={version}/>);

  const filterButtons = filterData.map(({ariaLabel, id, name, type, version}) =>
    <SortOrderButton ariaLabel={ariaLabel} id={id} name={name} type={type} version={version}/>)

  return (
    <TopButtonSection>
      <TopButtonSector>
        {sortButtons}
      </TopButtonSector>
      <TopButtonSector>
        <CityNameInput/>
      </TopButtonSector>
      <TopButtonSector>
        {filterButtons}
      </TopButtonSector>
    </TopButtonSection>
  )
}
