"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLoginUserMutation } from "@/lib/redux/features/auth/authApiSlice";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/lib/redux/hooks/typedHooks";
import { useForm } from "react-hook-form";
import { loginUserSchema, TLoginUserSchema } from "@/lib/validationSchemas";
import { extractErrorMessage } from "@/utils";
import { toast } from "react-toastify";
import { setAuth } from "@/lib/redux/features/auth/authSlice";
import FormFieldComponent from "../FormFieldComponent";
import { MailIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Spinner from "@/components/shared/Spinner";

const LoginForm = () => {
	const [loginUser, { isLoading }] = useLoginUserMutation();
	const router = useRouter();
	const dispatch = useAppDispatch();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<TLoginUserSchema>({
		resolver: zodResolver(loginUserSchema),
		mode: "all",
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmit = async (values: z.infer<typeof loginUserSchema>) => {
		try {
			await loginUser(values).unwrap();
			dispatch(setAuth());
			toast.success("login successful");
			router.push("/welcome");
			reset();
		} catch (error) {
			const errorMessage = extractErrorMessage(error);
			toast.error(errorMessage || "An error occured");
		}
	};
	return (
		<main>
			<form
				noValidate
				onSubmit={handleSubmit(onSubmit)}
				className="flex w-full max-w-md flex-col gap-4"
			>
				<FormFieldComponent
					label="Email Address"
					name="email"
					register={register}
					errors={errors}
					placeholder="Email Address"
					startIcon={<MailIcon className="dark:text-babyPowder size-8 " />}
				/>
				<FormFieldComponent
					label="Password"
					name="password"
					register={register}
					errors={errors}
					placeholder="Passwords"
					isPassword={true}
					link={{ linkText: "Forgot Password?", linkUrl: "forgot-password" }}
				/>
				<Button
					type="submit"
					className="h4-semibold bg-eerieBlack dark:bg-pumpkin w-full text-white"
					disabled={isLoading}
				>
					{isLoading ? <Spinner size="sm" /> : "Sign in"}
				</Button>
			</form>
		</main>
	);
};
export default LoginForm;
