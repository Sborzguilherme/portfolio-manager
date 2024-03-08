import moment from 'moment';

const BRAZILIAN_DATE_FORMAT = 'DD/MM/YYYY';

export function fromStringToDate(str: string) {
  return moment(str, BRAZILIAN_DATE_FORMAT).toDate();
}

export function fromDateToString(date: Date) {
  return moment(date).format(BRAZILIAN_DATE_FORMAT);
}
