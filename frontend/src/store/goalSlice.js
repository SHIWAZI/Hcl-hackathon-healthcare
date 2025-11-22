import { createSlice } from '@reduxjs/toolkit'
import axiosClient from '../utils/axiosClient'
import { toast } from 'react-toastify'
import router from '../routes';

export const goalSlice = createSlice({
    name: 'goal',
    initialState: {
        isFormLoading: false,
    },
    reducers: {
        setIsFormLoading: (state, action) => {
            state.isFormLoading = action.payload;
        }
    },
})

export const { setIsFormLoading, } = goalSlice.actions

export default goalSlice.reducer;

export const createGoal = data => async dispatch => {
    try {
        dispatch(setIsFormLoading(true))
        const res = await axiosClient.post('/goals/assaign/' + "68e4580ce204965b3bee2adf", data);
        dispatch(setIsFormLoading(false));
        console.log("first", res?.data?.success)
        if (res?.data?.success) {

            toast.success("Goal Created Successfully")
            router.navigate("/service-provider/dashboard")
        }
        else
            toast.error(res?.data?.message || 'Something went wrong, try again later')
    } catch (error) {
        let errorMessage = error?.response?.data?.[0]?.message || error?.message
        toast.error(errorMessage)
    }
}