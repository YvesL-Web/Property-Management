import { useGetUserProfileQuery } from "@/lib/redux/features/users/usersApiSlice"
import { useAppSelector } from "@/lib/redux/hooks/typedHooks"


const useUserProfile = () => {
    const {isAuthenticated} = useAppSelector((state) => state.auth)
    const {data,isLoading, isError} = useGetUserProfileQuery(undefined,{
        skip: !isAuthenticated,
    })
    
    return {profile: data?.profile, isLoading, isError}
}
export default useUserProfile