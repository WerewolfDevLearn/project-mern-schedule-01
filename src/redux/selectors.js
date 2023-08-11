import { useSelector } from 'react-redux';

export function usePHBState() {
  return useSelector((state) => state);
}
export function useToken() {
  return useSelector((state) => state.user.token);
}
export function useVerifiedEmail() {
  return useSelector((state) => state.user.verifiedEmail);
}
export function useisRefreshing() {
  return useSelector((state) => state.isRefreshing);
}
export function useisLoading() {
  return useSelector((state) => state.isLoading);
}

export function useError() {
  return useSelector((state) => state.error);
}
