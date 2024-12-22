import { AuthFormHeader } from "@/components/forms/auth";
import UpdatePostForm from "@/components/forms/update-post/UpdatePostForm";

interface UpdateParamsProps {
	params: {
		slug: string;
	};
}

const UpdatePostPage = ({ params }: UpdateParamsProps) => {
	return (
		<div>
			<AuthFormHeader
				title="Update Post"
				staticText="Want to go back?"
				linkText="Back to Posts"
				linkHref="/welcome"
			/>
			<div className="mt-7 sm:mx-auto sm:w-full sm:max-w-[480px]">
				<div className="bg-lightGrey dark:bg-deepBlueGrey rounded-xl px-6 py-12 shadow sm:rounded-lg sm:px-12 md:rounded-3xl">
					<UpdatePostForm params={params} />
				</div>
			</div>
		</div>
	);
};
export default UpdatePostPage;
