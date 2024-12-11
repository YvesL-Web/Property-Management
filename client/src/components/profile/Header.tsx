"use client";

import { useGetUserProfileQuery } from "@/lib/redux/features/users/usersApiSlice";
// import { useTheme } from "next-themes"
// import userProfileCircle from "@/assets/icons/user-profile-circle.svg"
// import userProfileLightCircle from "@/assets/icons/user-profile-light-circle.svg"
import ProtectedRoute from "@/components/shared/ProtectedRoutes";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CircleUser } from "lucide-react";

function HeaderContent() {
	const { data } = useGetUserProfileQuery();
	// const {theme} = useTheme()
	const profile = data?.profile;

	return (
		<div className="flex flex-col gap-2">
			<Avatar className="border-pumpkin mx-auto size-32 overflow-hidden rounded-full border-4 object-cover">
				<AvatarImage
					// src={
					//     profile?.avatar || (theme === "dark" ? userProfileCircle : userProfileLightCircle)
					// }
					src={profile?.avatar}
					alt="Profile image"
					width={128}
					height={128}
				/>
				<AvatarFallback>
					<CircleUser
						className="dark:text-platinum size-24"
						strokeWidth={0.5}
					/>
				</AvatarFallback>
			</Avatar>
			<div className="flex flex-col items-center justify-center space-y-3">
				<h1 className="font-robotoSlab dark:text-platinum text-5xl font-semibold">
					{profile?.full_name}
				</h1>
				<p className="dark:text-lime-500">@{profile?.username}</p>
			</div>
		</div>
	);
}

const Header = () => {
	return (
		<ProtectedRoute>
			<HeaderContent />
		</ProtectedRoute>
	);
};
export default Header;
