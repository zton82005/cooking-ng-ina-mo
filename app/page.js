import Image from "next/image";
import Recipes from "./components/Recipes";

export default function Home() {
	return (
		<main className="flex flex-col w-full items-center justify-center p-24 min-h-screen">
			<div className="z-10 w-full max-w-5xl flex-col items-center justify-center text-sm lg:flex">
				<div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
					<Image
						src="/logo.svg"
						alt="Cooking Ng Ina Mo Logo"
						width={249}
						height={89}
						priority
					/>
				</div>
				<h1 className="m-10 text-xl text-center">Yo Momma's Recipe Finder</h1>
			</div>
			<div className="flex gap-3">
				<input
					type="text"
					placeholder="Type here"
					className="input input-bordered input-accent w-full max-w-xs"
				/>
				<button className="btn btn-accent">Search</button>
			</div>
			<h1 className="text-xl text-center mb-5 mt-10"> Available Recipes</h1>
			<Recipes />
		</main>
	);
}
