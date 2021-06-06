import {
  ADD_ITEM,
  REMOVE_ITEM,
  ADD_TO_STORE,
  INCREASE,
  UPDATE_STORES,
  DECREASE,
  COMPUTE_TOTAL,
  REMOVER_DEL_CARRO,
} from "../types";
const initialState = { cart: [], products: [], stores: [], total: 0 };
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const productExist = state.cart.find(
        (el) => el._id === action.payload._id
      );
      if (!productExist) {
        return {
          ...state,
          cart: [
            ...state.cart,
            {
              ...action.payload,
              amount: 1,
              subtotal: action.payload.price,
            },
          ],
        };
      }
      return state;

    case REMOVE_ITEM:
      return {
        ...state,
        cart: state.cart.filter(
          (product) => product._id !== action.payload._id
        ),
      };
    case ADD_TO_STORE:
      return {
        ...state,
        products: action.payload,
      };
    case INCREASE:
      let newCart = state.cart.map((item) => {
        if (item._id === action.payload._id) {
          item = {
            ...item,
            amount: item.amount + 1,
          };
          item = {
            ...item,
            subtotal: item.amount * action.payload.price,
          };
        }
        console.log(item);
        return item;
      });
      return { ...state, cart: newCart };
    case DECREASE:
      let copyCart = state.cart.map((item) => {
        if (item._id === action.payload._id) {
          item = {
            ...item,
            amount: item.amount - 1,
          };
          item = {
            ...item,
            subtotal: item.amount * action.payload.price,
          };
        }
        return item;
      });
      return { ...state, cart: copyCart };

    case UPDATE_STORES:
      const tiendas = [
        ...new Set(state.cart.map((productos) => productos.store)),
      ];
      return {
        ...state,
        stores: tiendas,
      };
    case COMPUTE_TOTAL:
      return {
        ...state,
        total: state.cart.reduce(
          (acc, item) => parseInt(item.subtotal) + acc,
          0
        ),
      };
    case REMOVER_DEL_CARRO:
      return {
        ...state,
        cart: state.cart.filter((item) => item._id !== action.payload._id),
      };
    default:
      return state;
  }
};

export default cartReducer;
