import PostTagCard from "@/components/cards/PostTagCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: " AMA Apartments | Post Tags",
	description: "Authenticated users can see the tags details of a post",
};

interface SlugParamsProps {
	params: {
		tagSlug: string;
	};
}

const TagPostsPage = ({ params }: SlugParamsProps) => {
	return (
		<>
			<PostTagCard params={params} />
		</>
	);
};
export default TagPostsPage;
