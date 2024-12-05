import clsx from "clsx"
import { useTheme } from "next-themes"
import Image from "next/image"

import loadingDark from "@/assets/icons/loading-dark.svg"
import loadingLight from "@/assets/icons/loading-light.svg"

interface SpinnerProps {
    size?: "sm"|"md"|"lg"|"xl"
}

const sizeClasses = {
    sm: "size-10",
    md: "size-20",
    lg: "size-32",
    xl: "size-52",
}


const Spinner = ({size="md"}: SpinnerProps) => {
    const {theme} = useTheme()
    const className= clsx("animate-spin",sizeClasses[size])
    
    const dimensionMap = {
        // values in pixels
        sm: 40,
        md: 80,
        lg: 128,
        xl: 208
    }

    const widthHeight = dimensionMap[size]

    const spinnerSrc =
        theme === "dark"
            ? loadingDark
            : loadingLight

  return (
    <div role="status">
        <Image className={className} src={spinnerSrc} alt="Loading..." width={widthHeight} height={widthHeight} />
        <span className="sr-only">Loading...</span>
    </div>
  )
}
export default Spinner