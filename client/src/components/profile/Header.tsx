"use client";

import { useGetUserProfileQuery } from "@/lib/redux/features/users/usersApiSlice";
import ProtectedRoute from "@/components/shared/ProtectedRoutes";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CircleUser } from "lucide-react";

function HeaderContent() {
	const { data } = useGetUserProfileQuery();
	const profile = data?.profile;

	return (
		<div className="flex flex-col gap-2">
			<Avatar className="border-pumpkin mx-auto size-32 overflow-hidden rounded-full border-4 object-cover">
				<AvatarImage
					src={profile?.avatar}
					alt="Profile image"
					width={128}
					height={128}
				/>
				<AvatarFallback>
					<CircleUser
						className="dark:text-platinum"
						strokeWidth={0.5}
						height={128}
						width={128}
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
