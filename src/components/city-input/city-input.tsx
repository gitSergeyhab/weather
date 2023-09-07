import { useDispatch } from "react-redux"
import { AnyAction } from "@reduxjs/toolkit"
import { ChangeEventHandler, useEffect, useState } from "react"
import styled from "styled-components";
import { fetchCities } from "../../store/cities-slice/cities-thunk"
import { useDebounce } from "../../hooks/use-debounce";

const Input = styled.input.attrs({type:'text'})`
  width: 100%;
`

export function CityInput () {

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
    <Input
    value={cityName}
    onChange={handleInputChange}
    />
  )
}
