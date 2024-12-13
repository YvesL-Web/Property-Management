import { AuthFormHeader } from "@/components/forms/auth";
import CreateIssueForm from "@/components/forms/report-issue/CreateIssueForm";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "AMA Apartments | Report Issue",
	description:
		"Tenants can report any issue to the management with regards to their apartment",
};

const page = () => {
	return (
		<div>
			<AuthFormHeader title="Report An Issue with your apartment." />
			<div className="mt-7 sm:mx-auto sm:w-full sm:max-w-[480px]">
				<div className="bg-lightGrey dark:bg-deepBlueGrey rounded-xl px-6 py-12 shadow sm:rounded-lg sm:px-12 md:rounded-3xl">
					<div className="dark:text-pumpkin text-2xl">
						<CreateIssueForm />
					</div>
				</div>
			</div>
		</div>
	);
};
export default page;
