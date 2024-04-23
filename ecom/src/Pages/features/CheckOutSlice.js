import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    checkOutShippingData : [] 
};


export const checkoutSlice = createSlice (
    {
        name : "checkout",
        initialState, 
        reducers: {
            checkOutShippingData: (state , action ) => {
                state.checkOutShippingData.push(action.payload);
            }
        },
    });

    export const {checkOutShippingData } = checkoutSlice.actions;
    
    export default checkoutSlice.reducer;