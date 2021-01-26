import { mainPageAPI } from "../api/api";

const Set_Main_Page_Games_Reduser_Creator = "Set_Main_Page_Games_Reduser_Creator";

const Set_Main_Page_Games_Id_Reduser_Creator = "Set_Main_Page_Games_Id_Reduser_Creator";
const Set_Main_Page_Games_Id_Null_Reduser_Creator = "Set_Main_Page_Games_Id_Null_Reduser_Creator";
const Set_Main_Page_Games_Genre_Reduser_Creator = "Set_Main_Page_Games_Genre_Reduser_Creator";
const Set_Main_Page_Games_Genre_Id_Reduser_Creator = "Set_Main_Page_Games_Genre_Id_Reduser_Creator";

let initialState = {
  games: null,
  idArray: null,
  genreGames: null,
  idArrayOfGenreGames: null,
};

const MainPageReduser = (state = initialState, action) => {
  switch (action.type) {
    case Set_Main_Page_Games_Reduser_Creator:
      return { ...state, games: action.data };
    case Set_Main_Page_Games_Id_Reduser_Creator:
      return { ...state, idArray: action.data };
    case Set_Main_Page_Games_Genre_Id_Reduser_Creator:
      return { ...state, idArrayOfGenreGames: action.data };
    case Set_Main_Page_Games_Id_Null_Reduser_Creator:
      return { ...state, idArray: null, idArrayOfGenreGames: null };
    case Set_Main_Page_Games_Genre_Reduser_Creator:
      return { ...state, genreGames: action.data };
    default:
      return state;
  }
};

export const SetMainPageGamesReduserCreator = (data) => ({
  type: Set_Main_Page_Games_Reduser_Creator,
  data: data,
});

export const SetMainPageGamesIdReduserCreator = (data) => ({
  type: Set_Main_Page_Games_Id_Reduser_Creator,
  data: data,
});

export const SetMainPageGamesGenreIdReduserCreator = (data) => ({
  type: Set_Main_Page_Games_Genre_Id_Reduser_Creator,
  data: data,
});

export const SetMainPageGamesIdNullReduserCreator = () => ({
  type: Set_Main_Page_Games_Id_Null_Reduser_Creator,
});

export const SetMainPageGamesGenreReduserCreator = (data) => ({
  type: Set_Main_Page_Games_Genre_Reduser_Creator,
  data: data,
});

export const getGames = () => async (dispatch) => {
  try {
    let response = await mainPageAPI.getGames();
    let arr = [];

    let games = response.data;
    if (games) {
      games.map((a, key) => {
        if (key % 2 == 0) arr.push(a.id);
      });
    }
    dispatch(SetMainPageGamesIdReduserCreator(arr));
    dispatch(SetMainPageGamesReduserCreator(response.data));
  } catch (err) {}
};

export const getGamesGenre = (genre) => async (dispatch) => {
  try {
    let response = await mainPageAPI.getGamesGenre(genre);
    let arr = [];
    let obj = [];
    let games = response.data;
    if (games) {
      games.map((i) => {
        i.gamesForMainPage.map((a, key) => {
          if (key % 2 == 0) arr.push(a.id);
        });
        obj = [...obj, { genre: i.genre, idArr: arr }];
        arr = [];
      });
    }
    dispatch(SetMainPageGamesGenreIdReduserCreator(response.data));
  } catch (err) {
    console.log(err);
  }
};

export default MainPageReduser;
