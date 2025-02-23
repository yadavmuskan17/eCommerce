import {configureStore} from "@reduxjs/toolkit";
import myReducer from "./cardSlice";
import myWishlist from "./wishlistSlice";
const store=configureStore({
    reducer:{
        mycart:myReducer,
        wishlist:myWishlist,
    }
})
export default store;