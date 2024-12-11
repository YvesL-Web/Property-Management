import { AuthFormHeader } from "@/components/forms/auth";
import EditProfileForm from "@/components/forms/profile/EditProfileForm";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Ama Apartments | Edit Profile",
	description: "Signed in users can edit their profile information",
};

const EditProfilePage = () => {
	return (
		<div>
			<AuthFormHeader title="Update profile" />
			<div className="mt-7 sm:mx-auto sm:w-full sm:max-w-[480px]">
				<div className="bg-lightGrey dark:bg-deepBlueGrey rounded-xl px-6 py-12 shadow sm:rounded-lg sm:px-12 md:rounded-3xl">
					<EditProfileForm />
				</div>
			</div>
		</div>
	);
};
export default EditProfilePage;
