import { Reducer } from 'redux';
import { RepositoriesState, RepositoriesTypes } from './types';

const INITIAL_STATE: RepositoriesState = {
  type01: [],
  type02: [],
  type03: [],
  type04: [],
  oldtype01: [],
  oldtype02: [],
  oldtype03: [],
  oldtype04: [],
  selectValue: 99,
  selected: 99,
  error: false,
  loading: false,
  search: ''
};

const reducer: Reducer<RepositoriesState> = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {

    case RepositoriesTypes.SEARCH_DATA:
      
      if(action.payload.length < state.search.length){
        return  {... state, type04: state.oldtype04, type03: state.oldtype03, type02: state.oldtype02, type01: state.oldtype01, search: action.payload} 
      }
      if(action.payload != ''){
        let type1 = state.type01.filter((benefit) => {
          return benefit.title
          .toLowerCase()
          .includes(action.payload.toLowerCase()) ||  benefit.description
          .toLowerCase()
          .includes(action.payload.toLowerCase()) 
        });
        let type2 = state.type02.filter((benefit) => {
          return benefit.title
          .toLowerCase()
          .includes(action.payload.toLowerCase()) ||  benefit.description
          .toLowerCase()
          .includes(action.payload.toLowerCase()) 
        });
        let type3 = state.type03.filter((benefit) => {
          return benefit.title
          .toLowerCase()
          .includes(action.payload.toLowerCase()) ||  benefit.description
          .toLowerCase()
          .includes(action.payload.toLowerCase()) 
        });
        let type4 = state.type04.filter((benefit) => {
          return benefit.title
          .toLowerCase()
          .includes(action.payload.toLowerCase()) ||  benefit.description
          .toLowerCase()
          .includes(action.payload.toLowerCase()) 
        });
        return  {... state, type01: type1, type02: type2, type03: type3, type04: type4, search: action.payload} 
      }
      else 
        return  {... state, type04: state.oldtype04, type03: state.oldtype03, type02: state.oldtype02, type01: state.oldtype01, search: action.payload} 

    case RepositoriesTypes.SAVE_SELECTED:
      console.log(action.payload)
      return { ...state, selected: action.payload.data };
    case RepositoriesTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case RepositoriesTypes.LOAD_SUCCCES:
      let type01 = action.payload.data.filter((el: any) => { if (el.type_id == 1) return el })
      let type02 = action.payload.data.filter((el: any) => { if (el.type_id == 2) return el })
      let type03 = action.payload.data.filter((el: any) => { if (el.type_id == 3) return el })
      let type04 = action.payload.data.filter((el: any) => { if (el.type_id == 4) return el })
      switch (action.payload.filters.payload.filter01.cashback) {
        case 99:
           
          break;
        case 0:
          type04 = type04.filter((el: any) => {
            let cashback = Number(el.cashback.replace(',', '.'))
            if (cashback > 1 && cashback < 10) {
              return el;
            }
          })
          break;
        case 1:
          type04 = type04.filter((el: any) => {
            let cashback = Number(el.cashback.replace(',', '.'))
            if (cashback > 11 && cashback < 20) {
              return el;
            }
          })
          break;
        case 2:
          type04 = type04.filter((el: any) => {
            let cashback = Number(el.cashback.replace(',', '.'))
            if (cashback > 21 && cashback < 30) {
              return el;
            }
          })
          break;
        case 3:
          type04 = type04.filter((el: any) => {
            let cashback = Number(el.cashback.replace(',', '.'))
            if (cashback > 31 && cashback < 50) {
              return el;
            }
          })
          break;
        case 4:
          type04 = type04.filter((el: any) => {
            let cashback = Number(el.cashback.replace(',', '.'))
            if (cashback > 50) {
              return el;
            }
          })
          break;
        default:
          break;
      }
      return {
        ...state, loading: false, error: false, type01, type02, type03, type04, oldtype04: type04, oldtype03: type03, oldtype02: type02, oldtype01: type01
      };

    case RepositoriesTypes.LOAD_FAILURE:
      return {
        ...state, loading: false, error: true, type01: [],
      };
    default:
      return state;
  }
};

export default reducer;
