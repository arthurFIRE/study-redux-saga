export const REQUEST_DATA = 'REQUEST_DATA' as const;
export const RECEIVE_DATA = 'RECEIVE_DATA' as const;
export const requestData = () => ({
  type: REQUEST_DATA,
});
export const receiveData = (data: { quote: string }) => ({
  type: RECEIVE_DATA,
  data,
});
