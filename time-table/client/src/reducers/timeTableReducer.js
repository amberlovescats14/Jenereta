import { TIME_TABLE, TIME_TABLE_LOADING, CLEAR_CURRENT_TIME_TABLE} from '../actions/types';

const initialState = {
    timeTable: null,
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case TIME_TABLE_LOADING:
            return {
                ...state,
                loading: true
            };
        case TIME_TABLE:
            return {
                ...state,
                timeTable: action.data,
                loading: false
            };
        case CLEAR_CURRENT_TIME_TABLE:
            return {
                ...state,
                timeTable: null
            };
        default:
            return state;
    }
}
