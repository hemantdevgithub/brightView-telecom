import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getCustomerProfile } from '../../../Api/customerProfileApi';
import ValidInput from '../../Shared/Inputs/ValidInput';
import { FaEdit, FaSave } from 'react-icons/fa';
import BasicInfo from './BasicInfo';
import { failureFetchingProfile, startFetchingProfile, successFetchingProfile } from '../../../redux/features/profileSlice';
import SocialLinks from '../SocialLinks/SocialLinks';

const CustomerProfile = () => {
    const dispatch = useDispatch()
    const { user, profile, isLoading } = useSelector(
        (state) => ({
            user: state.auth.user,
            isLoading: state.auth.isLoading,
            profile: state.profile.profile
        })
        , shallowEqual
    );
    const getProfile = async () => {
        try {
            dispatch(startFetchingProfile())
            const response = await getCustomerProfile();
            dispatch(successFetchingProfile(response.data));
        } catch (error) {
            dispatch(failureFetchingProfile(error.data));
        }
    }
    useEffect(() => {
        const getCustomerProfile = async () => {
            await getProfile()
        }
        getCustomerProfile()
    }, []);
    return (
        <div>
            <BasicInfo user={user} isLoading={isLoading} profile={profile} />
            <SocialLinks profile={profile} user={user} isLoading={isLoading} />
        </div>
    );
};

export default CustomerProfile;