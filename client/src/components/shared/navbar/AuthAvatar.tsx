"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuthNavigation } from "@/hooks";
import useUserProfile from "@/hooks/useUserProfile";
import { BookMarked, CircleUser, LogOut, User, Users } from "lucide-react";
import Link from "next/link";

const AuthAvatar = () => {
	const { handleLogout } = useAuthNavigation();
	const { profile, isLoading, isError } = useUserProfile();

	if (isLoading) {
		return null;
	}
	if (isError) {
		return null;
	}

	return (
		<div>
			{profile && (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Avatar className="border-pumpkin cursor-pointer border-2">
							<AvatarImage alt="auth image" src={profile.avatar} />
							<AvatarFallback>
								<CircleUser className="dark:text-platinum size-8" />
							</AvatarFallback>
						</Avatar>
					</DropdownMenuTrigger>
					<DropdownMenuContent className="dark:text-platinum me-2">
						<DropdownMenuLabel className="border-b-2">
							Manage Account
						</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem className="auth-nav">
							<Link href="/profile" className="flex-row-center">
								<User className="mr-1" /> My Profile
							</Link>
						</DropdownMenuItem>

                        <DropdownMenuItem className="auth-nav">
							<Link href="/tenant" className="flex-row-center">
								<Users className="mr-1" /> Tenants
							</Link>
						</DropdownMenuItem>

                        <DropdownMenuItem className="auth-nav">
							<Link href="/bookmarks" className="flex-row-center">
								<BookMarked className="mr-1" /> My Bookmars
							</Link>
						</DropdownMenuItem>

                        <DropdownMenuItem onClick={handleLogout} className="flex-row-center auth-nav cursor-pointer">
                            <LogOut className="mr-1" /> Log Out
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			)}
		</div>
	);
};
export default AuthAvatar;
