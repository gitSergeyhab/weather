# weather

## Прогноз погоды по городам

### Как работает:
- Ввести в поле ввода название (часть названия) города
- Перетащить из выпадающего списка нужные города в поле «Перетащите сюда города, погода в которых вам интересна» - там появится текущая погода, на карте справа появится выбранный город
- При ДВОЙНОМ клике на город во втором столбце центр карты смещается на этот город
- При клике на город на карте подгружается погода на следующие 72 часа
- Можно сортировать города по населению в выпадающем списке (кнопки слева от поля ввода). Сортировка на сервере
- Можно фильтровать города по погоде во втором столбце (кнопки справа от поля ввода). Сортировка на клиенте
- Можно менять порядок городов во втором столбце перетаскиванием
- Можно удалять города из второго столбца, перетащив в поле с выпадающим списком

### API:
1.	Города: GeoDB Cities - https://rapidapi.com/wirefreethought/api/geodb-cities/
2.	Погода: Weather API - https://openweathermap.org/api
3.	Карта: API Яндекс Карт - https://yandex.ru/dev/maps/

#### ПС. Исходная верстка и стили частично взяты из учебного проекта «html academy». Код мой.
