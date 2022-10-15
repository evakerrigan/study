const SUMM_TYPE = "SUMM_TYPE";

const initialState = {
  count: 0,
  hghg:"yyuyu",
}

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUMM_TYPE: {
      console.log('1')
      return {
        ...state,
        count: action.counter+1,
      }
    }
    default: return state
  }
}


export const summAction = (counter) => ({
  type: SUMM_TYPE,
  counter
})