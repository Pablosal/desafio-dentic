import {
  ADD_ITEM,
  ADD_TO_STORE,
  COMPUTE_TOTAL,
  DECREASE,
  INCREASE,
  UPDATE_STORES,REMOVER_DEL_CARRO
} from "../types";

export const removerDelCarro = (item) => ({
  type: REMOVER_DEL_CARRO,
  payload: item,
});
export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});
export const removeItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});
export const addToStore = (items) => ({
  type: ADD_TO_STORE,
  payload: items,
});
export const increase = (item) => ({
  type: INCREASE,
  payload: item,
});
export const decrease = (item) => ({
  type: DECREASE,
  payload: item,
});
export const updateStores = () => ({
  type: UPDATE_STORES,
});
export const computeTotal = () => ({
  type: COMPUTE_TOTAL,
});
export const fetchData = () => (dispatch) => {
  fetch("/api/")
    .then((res) => res.json())
    .then((res) => {
      dispatch(addToStore(res));
    });
};
