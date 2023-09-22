import { FILTER_DATA, SORT_DATA } from "../../const/sort-filter-data";
import { CityNameInput } from "../city-name-input/city-name-input";
import { SortOrderButton } from "../sort-order-button/sort-order-button";
import { TopButtonSection } from "../top-buttons-section/top-buttons-section";
import { TopButtonSector } from "../top-buttons-sector/top-buttons-sector";



export function TopButtonsPanel () {
  // console.log('TopButtonsPanel')

  const sortButtons = SORT_DATA.map(({ariaLabel, id, name, type, version}) =>
    <SortOrderButton key={id} ariaLabel={ariaLabel} id={id} name={name} type={type} version={version}/>);

  const filterButtons = FILTER_DATA.map(({ariaLabel, id, name, type, version}) =>
    <SortOrderButton key={id} ariaLabel={ariaLabel} id={id} name={name} type={type} version={version}/>)

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
