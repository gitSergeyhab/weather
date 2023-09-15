import { ChangeEventHandler } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilterChecked, setSortChecked, sortFilterSlice } from "../../store/sort-filter-slice/sort-filter-slice";
import { ReducerType } from "../../store/store";
import { ConditionImg, SortImg } from "../icon-img/icon-img";
import { InputWrapperCheckBox, InputWrapperRadio } from "../common-styles/inputs";


const getChecked = (type: string, filterChecked: string[], sortChecked: string, version: string) => {
  switch (type) {
    case 'radio': return sortChecked === version;
    case 'checkbox': return filterChecked.includes(version);
    default: return false;
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
    if (type === 'radio') {
      dispatch(setSortChecked(version));
    } else {
      dispatch(setFilterChecked(version));
    }
  }

  const svgIcon = type === 'radio' ?  <SortImg version={version}/> : <ConditionImg version={version}/> ;
  const InputWrapper = type === 'radio' ? InputWrapperRadio :  InputWrapperCheckBox;
  return (
    <InputWrapper>
      <input id={id} type={type} name={name} value={id} checked={checked} onChange={handleChange}/>
      <label htmlFor={id} aria-label={ariaLabel}>
        {svgIcon}
      </label>
    </InputWrapper>
  )
}
