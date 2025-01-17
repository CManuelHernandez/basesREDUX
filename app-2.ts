import {
  decrementadorAction,
  dividirAction,
  incrementadorAction,
  multiplicarAction,
  resteAction,
} from "./contador/contador.actions";
import { Action } from "./ngrx-fake/ngrx";

function reducer(state = 10, action: Action) {
  switch (action.type) {
    case "INCREMENTAR":
      return (state += 1);
    case "DECREMENTAR":
      return (state -= 1);
    case "MULTIPLICAR":
      return state * action.payload;
    case "DIVIDIR":
      return state / action.payload;
    case "RESET":
      return (state = 0);

    default:
      state;
  }

  return state;
}

console.log(reducer(10, incrementadorAction)); //11
console.log(reducer(10, decrementadorAction)); //9
console.log(reducer(10, multiplicarAction)); //20
console.log(reducer(10, dividirAction)); //5
console.log(reducer(10, resteAction)); //0
