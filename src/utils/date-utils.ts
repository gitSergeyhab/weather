import dayjs from "dayjs";

export const getTableDate = (num: number) => dayjs(num * 1000).format('DD/MM HH:mm')
