"use client"

import { UseGoogle } from "@/utils"
import OauthButton from "./OauthButton"

const OauthButtons = () => {
  return (
    <div className="mt-3 flex items-center justify-between gap-2">
        <OauthButton provider="google" onClick={UseGoogle}>
          Sign in with Google
        </OauthButton>
    </div>
  )
}
export default OauthButtons