import { ChangeEventHandler, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useDebounce } from "../../hooks/use-debounce";
import { InputWrapperSearch } from "../common-styles/inputs";
import { setInputCityPrefix } from "../../store/cities-slice/cities-slice";


export function CityNameInput () {
  const [cityName, setCityName] = useState('');
  const debouncedCityName = useDebounce(cityName, 1000);
  const dispatch = useDispatch();

  useEffect(() => {
    const nameTrim = debouncedCityName.trim();
    if (nameTrim) {
      dispatch(setInputCityPrefix(nameTrim))
    }
  }, [debouncedCityName, dispatch])

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (evt) => setCityName(evt.currentTarget.value);

  return (
    <InputWrapperSearch>
      <input
        id="search"
        type="search"
        name="city-search"
        onChange={handleInputChange}
        placeholder="Название города"
      />
      <label htmlFor="search" aria-label="Поиск городов" />
    </InputWrapperSearch>
  )
}
