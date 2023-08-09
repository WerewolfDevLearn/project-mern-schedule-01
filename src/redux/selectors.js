import { useSelector } from 'react-redux';

export default function usePHBState() {
  return useSelector((state) => state);
}
