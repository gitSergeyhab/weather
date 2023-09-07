// export function SortOrderButton () {
//   return (
//     <div className="sort-form__input-wrapper input-wrapper input-wrapper--radio">
//       <input id="alphabet-sort" type="radio" name="alphabet-sort" value="alphabet-sort" checked />
//       <label htmlFor="alphabet-sort" aria-label="Сортировка по алфавиту">
//         <span className="icon icon--arrow-down" />
//       </label>
//     </div>
//   )
// }

import styled, { css } from "styled-components"
import { ChangeEventHandler } from "react";
import { useDispatch, useSelector } from "react-redux";
import { iconFilterTypes, iconSortTypes } from "../../const";
import { setFilterChecked, setSortChecked, sortFilterSlice } from "../../store/sort-filter-slice/sort-filter-slice";
import { ReducerType } from "../../store/store";

const arrowPart = css`
  width: 20px;
  height: 22px;
`

const IconSpan = styled.span<{version: string}>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 24px;
  height: 24px;

  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  background-image: ${({version}) => [...iconFilterTypes, ...iconSortTypes].includes(version) ?
  `url('../../assets/img/icon/icon-${version}.svg')` : `url('../../assets/img/icon/icon-wind.svg')`} ;
  ${({version}) => iconSortTypes.includes(version) ? arrowPart : ''};

`;


const getChecked = (type: string, filterChecked: string[], sortChecked: string, version: string) => {
  switch (type) {
    case 'radio': return sortChecked === version;
    case 'checkbox': return filterChecked.includes(version);
    default: return false
  }
}
interface ISortOrderButton {
  id: string,
  type: string,
  name: string,
  ariaLabel: string,
  version: string,
}

export function SortOrderButton ({id, type, name, ariaLabel, version}: ISortOrderButton) {


  const dispatch = useDispatch();

  const {filterChecked, sortChecked} = useSelector((state: ReducerType) => state[sortFilterSlice.name])


  const checked = getChecked(type, filterChecked, sortChecked, version)

  const handleChange: ChangeEventHandler = () => {
    console.log({type, filterChecked, sortChecked, version})
    if (type === 'radio') {
      dispatch(setSortChecked(version));
    } else {
      dispatch(setFilterChecked(version));
    }
  }

  return (
    <div className={`sort-form__input-wrapper input-wrapper input-wrapper--${type}`}>
      <input id={id} type={type} name={name} value={id} checked={checked}  onChange={handleChange}/>
      <label htmlFor={id} aria-label={ariaLabel}>
        <IconSpan version={version}/>
        {/* <span className="icon icon--arrow-down" /> */}
      </label>
    </div>
  )
}
