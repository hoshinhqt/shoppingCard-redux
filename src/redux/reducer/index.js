import {combineReducers} from 'redux';
import userReducer from '../../usermanagement-redux/modules/reducer';
import productReducer from '../../shopingCard-redux/modules/reducer';

const rootReducer = combineReducers({
    // userReducer,
    productReducer,
})
export default rootReducer;
