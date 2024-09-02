import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../Api/authApi";
import {
    loginStart,
    loginSuccess,
    loginFailure,
} from "../redux/features/authSlice";
import Loader from "../components/Shared/Loader";

const useAuth = () => {
    const { isLoading, user, error } = useSelector((state) => state.auth);
    if (isLoading) {
        return Loader;
    }
    if (user) {
        return true;
    } else {
        return false;
    }
};

export default useAuth;
