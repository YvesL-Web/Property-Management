import { AuthFormHeader } from "@/components/forms/auth";
import PasswordResetRequestForm from "@/components/forms/auth/PasswordResetRequestForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "AMA Apartments | Password Request Reset",
	description: "Password request reset page",
};

const ForgotPassword = () => {
	return (
		<div>
			<AuthFormHeader
				title="Reset Password"
				staticText="remember your login credentials?"
				linkText="Back to login"
				linkHref="/login"
			/>
            <div className="mt-7 sm:mx-auto sm:w-full sm:max-w-[480] ">
                <div className="bg-lightGrey dark:bg-deepBlueGrey rounded-xl px-6 py-12 shadow sm:rounded-lg sm:px-12 md:rounded-3xl">
                    <PasswordResetRequestForm />
                </div>
            </div>
		</div>
	);
};

export default ForgotPassword;
