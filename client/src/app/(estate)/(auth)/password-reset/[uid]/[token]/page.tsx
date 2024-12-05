import { AuthFormHeader } from "@/components/forms/auth"
import PasswordResetConfirm from "@/components/forms/auth/PasswordResetConfirm"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "AMA Apartments | Password Reset Request",
    description: "Password request reset page"
}

const PasswordReset = () => {
  return (
    <div>
        <AuthFormHeader title="Create your new password" />
        <div className="mt-7 sm:mx-auto sm:w-full sm:max-w-[480px]">
            <div className="bg-lightGrey dark:bg-deepBlueGrey rounded-xl px-6 py-12 shadow sm:rounded-lg sm:px-12 md:rounded-3xl">
                <PasswordResetConfirm />
            </div>
        </div>
    </div>
  )
}
export default PasswordReset