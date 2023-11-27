import Image from "next/image";
import Recipes from "./components/Recipes";

export default function Home() {
	return (
		<main className="flex flex-col w-full items-center justify-center p-10 min-h-screen">
			<div className="flex flex-col mb-5 lg:flex-row lg:mb-10">
				<Image
					src="/ina-mo.png"
					width={170}
					height={170}
					alt="Cooking ng ina mo"
				/>

				<div className="z-10 w-full max-w-5xl flex-col items-center justify-center text-sm lg:flex">
					<Image
						src="/logo.svg"
						alt="Cooking Ng Ina Mo Logo"
						width={249}
						height={89}
						priority
					/>
					<h1 className="m-10 text-xl text-center">Yo Momma's Recipe Finder</h1>
				</div>
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
