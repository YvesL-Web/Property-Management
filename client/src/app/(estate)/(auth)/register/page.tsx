import { AuthFormHeader } from "@/components/forms/auth";

const RegisterPage = () => {
	return (
		<div>
			<AuthFormHeader
				title="Sign up for an account"
				staticText="Already have an account?"
				linkText="Login Here"
				linkHref="/login"
			/>
		</div>
	);
};
export default RegisterPage;
