import dayjs from "dayjs";

export const getTableDate = (num: number) => { console.log(num); return dayjs(num * 1000).format('DD/MM HH:mm');}
