export const getDate = (date: string, hour: boolean = true) => {
    const d = new Date(date);

    const month = 'января,февраля,марта,апреля,мая,июня,июля,августа,сентября,октября,ноября,декабря'.split(',');
    const minutes: string = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();

    return hour
        ? `${d.getDate()} ${month[d.getMonth()]} ${d.getFullYear()} @ ${d.getHours()}:${minutes}`
        : `${d.getDate()} ${month[d.getMonth()]} ${d.getFullYear()}`;
};
