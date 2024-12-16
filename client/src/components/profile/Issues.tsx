"use client";

import { useGetMyIssuesQuery } from "@/lib/redux/features/issues/issueApiSlice";
import Spinner from "../shared/Spinner";
import { TabsContent } from "../ui/tabs";
import IssueCard from "../cards/IssueCard";

const Issues = () => {
	const { data, isLoading } = useGetMyIssuesQuery();
	const myIssues = data?.my_issues;
	console.log(myIssues);
	

	if (isLoading) {
		return (
			<div className="flex-center pt-32">
				<Spinner size="xl" />
			</div>
		);
	}
	return (
        <TabsContent value="my-issues">
			<h2 className="h2-semibold flex-center font-robotoSlab dark:text-pumpkin text-xl">
				Total: ({myIssues?.count})
			</h2>
			<div className="mt-4 grid cursor-pointer grid-cols-1 gap-4 p-1.5 md:grid-cols-2 lg:grid-cols-3">
				{myIssues && myIssues.results.length > 0 ? (
					myIssues.results.map((issue) => (
						<IssueCard key={issue.id} issue={issue} />
					))
				) : (
					<p className="h2-semibold dark:text-lime-500">
						You have not raised any Issue(s) Yet!
					</p>
				)}
			</div>
		</TabsContent>
    )
};
export default Issues;
