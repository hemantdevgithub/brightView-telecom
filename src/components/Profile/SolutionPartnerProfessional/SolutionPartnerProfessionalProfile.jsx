import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getSolutionPartnerProfessionalProfile } from '../../../Api/solutionPartnerProfessionalApi';
import { failureFetchingProfile, startFetchingProfile, successFetchingProfile } from '../../../redux/features/profileSlice';
import ProfessionalOverview from './ProfessionalOverview';
import SocialLinks from '../SocialLinks/SocialLinks';

const SolutionPartnerProfessionalProfile = () => {
    const dispatch = useDispatch();
    const { user, profile, isLoading } = useSelector(
        (state) => ({
            user: state.auth.user,
            isLoading: state.auth.isLoading,
            profile: state.profile.profile,
        })
        , shallowEqual
    );

    const getProfile = async () => {
        try {
            dispatch(startFetchingProfile());
            const response = await getSolutionPartnerProfessionalProfile();
            dispatch(successFetchingProfile(response.data));
        } catch (error) {
            dispatch(failureFetchingProfile(error.data));
        }
    }

    useEffect(() => {
        const fetchProfile = async () => {
            await getProfile();
        }
        if (!profile) {
            fetchProfile()
        }
    }, [])

    return (
        <div>
            <ProfessionalOverview user={user} isLoading={isLoading} profile={profile} />
            <SocialLinks isLoading={isLoading} profile={profile} user={user} />
        </div>
    );
};

export default SolutionPartnerProfessionalProfile;