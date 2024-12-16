import About from "@/components/profile/About";
import AssignedIssues from "@/components/profile/AssignedIssues";
import Header from "@/components/profile/Header";
import Issues from "@/components/profile/Issues";
import Posts from "@/components/profile/Posts";
import ProtectedRoute from "@/components/shared/ProtectedRoutes";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "AMA Apartments",
	description: "Signed in users can view all their profile information",
};

function ProfilePageContent() {
	return (
		<>
			<div className="grid items-start gap-4 px-4 pb-4 md:gap-6 md:px-6">
				<Header />
				{/* the tabs */}
				<div className="w-full">
					<Tabs
						className="dark:border-eerieBlack rounded-lg border"
						defaultValue="about"
					>
						<TabsList className="bg-baby_rich flex space-x-4">
							<TabsTrigger value="about" className="h3-semibold tab">
								About
							</TabsTrigger>
							<TabsTrigger value="posts" className="h3-semibold tab">
								Posts
							</TabsTrigger>
							<TabsTrigger value="my-issues" className="h3-semibold tab">
								My Issues
							</TabsTrigger>
							<TabsTrigger value="my-reports" className="h3-semibold tab">
								My Reports
							</TabsTrigger>
							<TabsTrigger value="assigned-issues" className="h3-semibold tab">
								Assigned Issues
							</TabsTrigger>
						</TabsList>
						{/* about tabs content */}
						<About />
						{/* posts tab content */}
						<Posts />
						{/* issues tab content */}
						<Issues/>
						{/* report tab content */}
						{/* assigned issues tab content */}
						<AssignedIssues/>
					</Tabs>
				</div>
			</div>
			<div className="flex cursor-pointer flex-row justify-between">
				<Link href="/profile/edit">
					<Button className="h3-semibold electricIndigo-gradient text-babyPowder w-64 rounded-lg">
						Update Profile
					</Button>
				</Link>
				<Link href="/apartment">
					<Button className="h3-semibold electricIndigo-gradient text-babyPowder w-64 rounded-lg">
						Add your apartment
					</Button>
				</Link>
			</div>
		</>
	);
}
export default function ProfilePage() {
	return (
		<ProtectedRoute>
			<ProfilePageContent />
		</ProtectedRoute>
	);
}
