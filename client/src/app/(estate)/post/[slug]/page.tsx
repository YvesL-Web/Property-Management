import PostDetails from "@/components/post/PostDetails";
import { Metadata } from "next";



export const metadata: Metadata = {
	title: "AMA Apartments | Post Details",
	description: "Authenticated users can see the details of a post",
};

interface ParamsProps {
	params: {
		slug: string;
	};
}

const page = ({params}: ParamsProps) => {
    return (
		<>
			<PostDetails params={params} />
		</>
	);
}
export default page