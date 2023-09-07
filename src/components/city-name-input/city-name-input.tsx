import { ChangeEventHandler, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AnyAction } from "@reduxjs/toolkit";
import { useDebounce } from "../../hooks/use-debounce";
import { fetchCities } from "../../store/cities-slice/cities-thunk";

export function CityNameInput () {

  const [cityName, setCityName] = useState('');
  const debouncedCityName = useDebounce(cityName, 1000);
  const dispatch = useDispatch();

  useEffect(() => {
    const nameTrim = debouncedCityName.trim();
    if (nameTrim) {
      dispatch(fetchCities({value: nameTrim}) as unknown as AnyAction)
    }
  }, [debouncedCityName, dispatch])

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (evt) =>
    setCityName(evt.currentTarget.value)
  return (
    <div className="sort-form__input-wrapper input-wrapper input-wrapper--search">
      <input id="search" type="search" name="city-search" onChange={handleInputChange} placeholder="Название города" />
      <label htmlFor="search" aria-label="Поиск городов" />
    </div>
  )
}
