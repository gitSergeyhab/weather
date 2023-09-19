export const MAP_BALLOON_ID = `balloon-id`;

export const MAP_CITY_OPTIONS = {
  minHeight: 200,
  minWidth: 300,
  preset: 'islands#nightStretchyIcon', // список темплейтов на сайте яндекса
}

export const mapSetting = {
  options: { maxZoom: 10, minZoom: 3},
  modules: [
    'geoObject.addon.balloon',
    'geoObject.addon.hint'
  ],
  zoom: 4
}


