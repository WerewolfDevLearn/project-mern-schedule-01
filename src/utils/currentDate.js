import { format } from 'date-fns';

export default function getCurrentDate() {
  const date = new Date();
  return format(date, 'yyyy-MM-dd');
}
