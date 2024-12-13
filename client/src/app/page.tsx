import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ArrowRightIcon } from "@heroicons/react/24/solid";

import apartment from "@/assets/images/apartment.jpg";


export const metadata: Metadata = {
	title: "Home | AMA Apartments",
	description: "AMA apartments home page. Create your account to get started.",
};

export default function HomePage() {
	
	return (
		<div className="relative h-screen">
			<div className="absolute inset-0 z-0">
				<Image
					src={apartment}
					alt="Apartment"
					fill
					style={{ objectFit: "cover", objectPosition: "center" }}
					priority
				/>
			</div>
			<main className="flex-center relative z-10 h-full bg-black/50">
				<div className="text-center">
					<h1 className="font-robotoSlab mb-4 text-4xl font-semibold text-cyan-300 antialiased sm:text-6xl md:text-8xl">
						Welcome to AMA Apartments
					</h1>
					<p className="my-8 text-2xl text-teal-300 sm:text-4xl">
						Are you a tenant?
					</p>
					<Link href="/login" prefetch={false}>
						<button className="bg-asparagus rounded-3xl px-4 py-2 text-lg font-semibold text-white hover:bg-lime-700 sm:px-6 sm:text-2xl">
							<span className="inline-flex items-center">
								Login
								<ArrowRightIcon className="ml-2 size-6" />
							</span>
						</button>
					</Link>
					<p className="my-8 text-2xl text-teal-300 sm:text-4xl">Or</p>
					<Link href="/register" prefetch={false}>
						<button className="bg-asparagus rounded-3xl px-4 py-2 text-lg font-semibold text-white hover:bg-lime-700 sm:px-6 sm:text-2xl">
							<span className="inline-flex items-center">
								Create Your Account
								<ArrowRightIcon className="ml-2 size-6" />
							</span>
						</button>
					</Link>
				</div>
			</main>
		</div>
	);
}
