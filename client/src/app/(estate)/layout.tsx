import Navbar from "@/components/shared/navbar/Navbar";
import React from "react"

interface LayoutProps {
    children : React.ReactNode
}

const layout = ({children}: LayoutProps) => {
  return (
		<main className="bg-baby_rich relative">
			<Navbar />
			<div className="flex">
				{/* Placeholder left navbar component */}
				<div className="dark:text-pumpkin hidden text-xl md:block ">
					Left navbar
				</div>
				<section className="flex min-h-screen flex-1 flex-col px-4 pb-6 pt-24 sm:px-6 lg:px-8 lg:pt-32">
					<div>{children}</div>
				</section>
				{/* Placeholder right navbar component */}
				<div className="dark:text-pumpkin hidden text-xl md:block">
					Right navbar
				</div>
			</div>
		</main>
	);
}
export default layout