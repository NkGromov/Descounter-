import { gamesAPI } from "../api/gamesAPI";
const Get_One_Game_Reduser = "Get_One_Game_Reduser";
const Clear_One_Game_Reduser = "Clear_One_Game_Reduser";
const Get_One_Game_Shop_Reduser = "Get_One_Game_Shop_Reduser";

let initialState = {
  oneGame: [],
  oneGameShop: [],
};

const GamePageReduser = (state = initialState, action) => {
  switch (action.type) {
    case Get_One_Game_Reduser:
      return { ...state, oneGame: action.data };
    case Clear_One_Game_Reduser:
      return { ...state, oneGame: [], oneGameShop: [] };
    case Get_One_Game_Shop_Reduser:
      return { ...state, oneGameShop: action.data };

    default:
      return state;
  }
};

export const GetOneGameReduserCreator = (data) => ({
  type: Get_One_Game_Reduser,
  data: data,
});

export const GetOneGameShopReduserCreator = (data) => ({
  type: Get_One_Game_Shop_Reduser,
  data: data,
});

export const ClearOneGameReduser = () => ({
  type: Clear_One_Game_Reduser,
});

export const getGame = (id) => async (dispatch) => {
  try {
    let data = await gamesAPI.getGame(id);
    dispatch(GetOneGameReduserCreator(data));
    data = await gamesAPI.getGameShop(id);
    dispatch(GetOneGameShopReduserCreator(data));
  } catch (err) {}
};

export const updGame = (id, name, desc, date) => async (dispatch) => {
  try {
    let data = await gamesAPI.updateGame(id, name, desc, date);
    dispatch(GetOneGameReduserCreator(data));
  } catch (err) {}
};

export default GamePageReduser;
