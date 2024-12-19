import PostCard from "@/components/cards/PostCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "AMA Apartments | Welcome",
	description:
		"Welcome to the AMA Apartments Website. This webapp allows users who are tenants to signup, create their profiles, report any issues with their apartments, reports any tenants, post anything of relevance for other tanants to see and/or respond.",
};

const WelcomePage = () => {
	return (
		<div>
			<>
				<PostCard />
			</>
		</div>
	);
};
export default WelcomePage;
