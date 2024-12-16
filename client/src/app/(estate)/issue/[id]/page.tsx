import IssueDetails from "@/components/issue/IssueDetails";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "AMA Apartments | Issue Details",
	description:
		"Authenticated users can get the details of the issue they have raised. They can also delete the issue.",
};

interface ParamsProps {
	params: {
		id: string;
	};
}

const IssueDetailPage = ({ params }: ParamsProps) => {
	return (
		<div>
			<IssueDetails params={params} />
		</div>
	);
};
export default IssueDetailPage;
