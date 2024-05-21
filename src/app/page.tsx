"use client";
import ChildComponent from "@/component/alert/alert";
import { useState } from "react";

export default function Home() {
	const [sum, setSum] = useState(0);

	const handleSum = () => {
		setSum(sum + 1);
	};

	return (
		<main className="bg-white flex min-h-screen flex-col items-center justify-between p-24">
			<h1 className="text-black text-xl">{sum}</h1>
			<button
				className="h-10 px-5 m-2 text-indigo-100 transition-colors duration-150 bg-blue-600 rounded-lg focus:shadow-outline hover:bg-blue-800"
				onClick={handleSum}
			>
				Sum up!
			</button>
			<ChildComponent />
		</main>
	);
}
