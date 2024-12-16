import { AuthFormHeader } from "@/components/forms/auth";
import UpdateIssueForm from "@/components/forms/update-issue/UpdateIssueForm";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "AMA Apartments | Update Issue",
	description:
		"Technicians assigned to an issue can update the status of the issue.",
};

interface UpdateParamsProps {
	params: {
		id: string;
	};
}

const IssueDetailPage = ({ params }: UpdateParamsProps) => {
	return (
		<div>
			<AuthFormHeader
				title="Update Issue"
				staticText="Want to go back?"
				linkText="Back to Profile"
				linkHref="/profile"
			/>
			<div className="mt-7 sm:mx-auto sm:w-full sm:max-w-[480px]">
				<div className="bg-lightGrey dark:bg-deepBlueGrey rounded-xl px-6 py-12 shadow sm:rounded-lg sm:px-12 md:rounded-3xl">
					<UpdateIssueForm params={params} />
				</div>
			</div>
		</div>
	);
};
export default IssueDetailPage;
