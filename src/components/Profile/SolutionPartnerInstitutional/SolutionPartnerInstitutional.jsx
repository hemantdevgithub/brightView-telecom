import React, { useEffect } from 'react';
import InstitutionalOverview from './InstitutionalOverview';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { failureFetchingProfile, startFetchingProfile, successFetchingProfile } from '../../../redux/features/profileSlice';
import { getInstitutionProfile } from '../../../Api/solutionPartnerInstitutionApi';
import SocialLinks from '../SocialLinks/SocialLinks';

const SolutionPartnerInstitutional = () => {
    const dispatch = useDispatch()
    const { user, profile, isLoading } = useSelector((state) => ({
        user: state.auth.user,
        isLoading: state.auth.isLoading,
        profile: state.profile.profile,
    }), shallowEqual);

    const getProfile = async () => {
        try {
            dispatch(startFetchingProfile())
            const response = await getInstitutionProfile();
            if (response.success === true && response.statusCode === 200) {
                dispatch(successFetchingProfile(response.data))
            }
        } catch (error) {
            dispatch(failureFetchingProfile(error))
        }
    }

    useEffect(() => {
        const fetchProfile = async () => {
            await getProfile()
        }
        if (user && !profile) {
            fetchProfile()
        }
    }, [])
    return (
        <div>
            <InstitutionalOverview profile={profile} user={user} isLoading={isLoading} />
            <SocialLinks user={user} isLoading={isLoading} profile={profile}/>
        </div>
    );
};

export default SolutionPartnerInstitutional;