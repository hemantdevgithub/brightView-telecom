import { useState, useEffect } from "react";
import { useDispatch } from "react-redux"; // Import your Redux actions
import { getCurrentUser } from "../Api/authApi";
import { loginFailure, loginSuccess } from "../redux/features/authSlice";

const useAuthCheck = () => {
    const dispatch = useDispatch();
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await getCurrentUser();
                dispatch(loginSuccess(response.data));
                setIsChecked(true);
                return response.data;
            } catch (error) {
                setIsChecked(true);
                dispatch(loginFailure(error.data));
            }
        };
        getUser();
    }, [dispatch, setIsChecked]);

    return isChecked;
};

export default useAuthCheck