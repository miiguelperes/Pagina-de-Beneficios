import { Reducer } from "redux";
import { RepositoriesState, RepositoriesTypes } from "./types";

const INITIAL_STATE: RepositoriesState = {
  type00: [],
  type01: [],
  type02: [],
  type03: [],
  type04: [],
  oldtype00: [],
  oldtype01: [],
  oldtype02: [],
  oldtype03: [],
  oldtype04: [],
  initialType00: [],
  initialType01: [],
  initialType02: [],
  initialType03: [],
  initialType04: [],
  selectValue: 99,
  selected: 99,
  error: false,
  loading: false,
  search: "",
};

const reducer: Reducer<RepositoriesState> = (
  state = INITIAL_STATE,
  action: any
) => {
  switch (action.type) {
    case RepositoriesTypes.SEARCH_DATA:
      if (action.payload != "") {
        let type0 = state.type00.filter((benefit) => {
          return (
            benefit.title
              .toLowerCase()
              .includes(action.payload.toLowerCase()) ||
            benefit.description
              .toLowerCase()
              .includes(action.payload.toLowerCase())
          );
        });
        let type1 = state.type01.filter((benefit) => {
          return (
            benefit.title
              .toLowerCase()
              .includes(action.payload.toLowerCase()) ||
            benefit.description
              .toLowerCase()
              .includes(action.payload.toLowerCase())
          );
        });
        let type2 = state.type02.filter((benefit) => {
          return (
            benefit.title
              .toLowerCase()
              .includes(action.payload.toLowerCase()) ||
            benefit.description
              .toLowerCase()
              .includes(action.payload.toLowerCase())
          );
        });
        let type3 = state.type03.filter((benefit) => {
          return (
            benefit.title
              .toLowerCase()
              .includes(action.payload.toLowerCase()) ||
            benefit.description
              .toLowerCase()
              .includes(action.payload.toLowerCase())
          );
        });
        let type4 = state.type04.filter((benefit) => {
          return (
            benefit.title
              .toLowerCase()
              .includes(action.payload.toLowerCase()) ||
            benefit.description
              .toLowerCase()
              .includes(action.payload.toLowerCase())
          );
        });
        return {
          ...state,
          type00: type0,
          type01: type1,
          type02: type2,
          type03: type3,
          type04: type4,
          search: action.payload,
        };
      } else {
        return {
          ...state,
          type00: state.oldtype00,
          type04: state.oldtype04,
          type03: state.oldtype03,
          type02: state.oldtype02,
          type01: state.oldtype01,
          search: action.payload,
        };
      }

    case RepositoriesTypes.SAVE_SELECTED:
      console.log(action.payload);
      return { ...state, selected: action.payload.data };
    case RepositoriesTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case RepositoriesTypes.LOAD_FINISH:
      return { ...state, loading: false };
    case RepositoriesTypes.LOAD_SUCCCES:


      let fullData = action.payload.data;
      let atualCategory = action.payload.filters.payload.filter01.category

      if(atualCategory != 99){
        fullData = fullData.filter((el: any) => {
          if(el.categoria_id){
            for (const cat of el.categoria_id) {
              if(cat.category_id == atualCategory){
                debugger
                return el
              }
            }
          }
        });
      }
    


      var type00 = fullData.sort(function(a: any, b: any) {
        let c: any = new Date(a.date);
        let d: any = new Date(b.date);
        let result = c - d;
        return result;
      });
      var type01 = null;
      var type02 = null;
      var type03 = null;
      var type04 = null;

      var initialType01 = fullData.filter((el: any) => {
        if (el.type_id == 1) return el;
      });
      
      var initialType02 = fullData.filter((el: any) => {
        if (el.type_id == 2) return el;
      });
      var initialType03 = fullData.filter((el: any) => {
        if (el.type_id == 3) return el;
      });
      var initialType04 = fullData.filter((el: any) => {
        if (el.type_id == 4) return el;
      });
      
      debugger
      switch (action.payload.filters.payload.filter01.cashback) {
        case 99:
          type01 = initialType01;
          type02 = initialType02;
          type03 = initialType03;
          type04 = initialType04;
          break;
        case 0:
          type04 = initialType04.filter((el: any) => {
            let cashback = Number(el.cashback.replace(",", "."));
            if (cashback >= 1 && cashback <= 10) {
              return el;
            }
          });
          type03 = initialType03.filter((el: any) => {
            let discount = Number(
              el.discount.replace(/\D/g, "").replace(",", ".")
            );
            if (discount >= 1 && discount <= 10) {
              return el;
            }
          });
          break;
        case 1:
          type04 = initialType04.filter((el: any) => {
            let cashback = Number(el.cashback.replace(",", "."));
            if (cashback >= 11 && cashback <= 20) {
              return el;
            }
          });
          type03 = initialType03.filter((el: any) => {
            let discount = Number(
              el.discount.replace(/\D/g, "").replace(",", ".")
            );
            if (discount >= 11 && discount <= 20) {
              return el;
            }
          });
          break;
        case 2:
          type04 = initialType04.filter((el: any) => {
            let cashback = Number(el.cashback.replace(",", "."));
            if (cashback >= 21 && cashback <= 30) {
              return el;
            }
          });
          type03 = initialType03.filter((el: any) => {
            let discount = Number(
              el.discount.replace(/\D/g, "").replace(",", ".")
            );
            if (discount >= 21 && discount <= 30) {
              return el;
            }
          });
          break;
        case 3:
          type04 = initialType04.filter((el: any) => {
            let cashback = Number(el.cashback.replace(",", "."));
            if (cashback >= 31 && cashback <= 50) {
              return el;
            }
          });
          type03 = initialType03.filter((el: any) => {
            let discount = Number(
              el.discount.replace(/\D/g, "").replace(",", ".")
            );
            if (discount > 31 && discount < 50) {
              return el;
            }
          });
          break;
        case 4:
          type04 = initialType04.filter((el: any) => {
            let cashback = Number(el.cashback.replace(",", "."));
            if (cashback >= 50) {
              return el;
            }
          });
          type03 = initialType03.filter((el: any) => {
            let discount = Number(
              el.discount.replace(/\D/g, "").replace(",", ".")
            );
            if (discount >= 50) {
              return el;
            }
          });
          break;
        default:
          
          break;
      }




      type04 = type04
        .sort((a: any, b: any) => {
          let ca = Number(a.cashback.replace(",", "."));
          let cb = Number(b.cashback.replace(",", "."));
          return ca - cb;
        })
        .reverse();

      type03 = type03
        .sort((a: any, b: any) => {
          let da = Number(a.discount.replace(/\D/g, "").replace(",", "."));
          let db = Number(b.discount.replace(/\D/g, "").replace(",", "."));
          return da - db;
        })
        .reverse();

      return {
        ...state,
        loading: false,
        error: false,
        type00,
        type01: initialType01,
        type02: initialType02,
        type03,
        type04,
        oldtype04: state.initialType04,
        oldtype03: state.initialType03,
        oldtype02: state.initialType02,
        oldtype01: state.initialType01,
        oldtype00: state.initialType00,
      };
    case RepositoriesTypes.LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        type01: [],
      };
      break
    case RepositoriesTypes.CLEAR_DATA:
      return {
        ...state,
        loading: false,
        error: true,
        type04: state.initialType04,
        type03: state.initialType03,
        type02: state.initialType02,
        type01: state.initialType01,
        type00: state.initialType00,
      };
      break
    default:
      return state;
  }
};

export default reducer;
