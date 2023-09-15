import { ChangeEventHandler, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction } from "@reduxjs/toolkit";
import { useDebounce } from "../../hooks/use-debounce";
import { ReducerType } from "../../store/store";
import { fetchCities } from "../../store/content-slice/cities-thunk";
import { InputWrapperSearch } from "../common-styles/inputs";

export function CityNameInput () {

  const [cityName, setCityName] = useState('');
  const debouncedCityName = useDebounce(cityName, 1000);
  const dispatch = useDispatch();
  const {citySort} = useSelector((state: ReducerType) => state.sortFilterSlice)

  useEffect(() => {
    const nameTrim = debouncedCityName.trim();
    if (nameTrim) {
      console.log({citySort, nameTrim}, 'useEffect')
      dispatch(fetchCities({value: nameTrim, sort: citySort}) as unknown as AnyAction)
    }
  }, [debouncedCityName, citySort, dispatch])

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (evt) =>
    setCityName(evt.currentTarget.value)
  return (
    <InputWrapperSearch>
      <input id="search" type="search" name="city-search" onChange={handleInputChange} placeholder="Название города" />
      <label htmlFor="search" aria-label="Поиск городов" />
    </InputWrapperSearch>
  )
}
