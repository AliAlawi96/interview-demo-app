"use client";
import { Form } from "@/components/form";
import { Table } from "@/components/table";
import { TsubmitAnArtworkSchema } from "@/lib/types";
import { useEffect, useState } from "react";

export default function Home() {
	const [listOfArtworks, setListOfArtworks] = useState<
		TsubmitAnArtworkSchema[] | []
	>([]);

	useEffect(() => {
		const storedArtworks = localStorage.getItem("listOfArtworks");
		storedArtworks && setListOfArtworks(JSON.parse(storedArtworks));
	}, []);

	return (
		<main className="flex grow  flex-col items-center w-full justify-center gap-40 p-8 md:p-20 bg-blue-200 ">
			<h1 className="  text-4xl font-bold text-gray-900">
				Welcome to my demo!
			</h1>
			<Form
				listOfArtworks={listOfArtworks}
				setListOfArtworks={setListOfArtworks}
			/>
			<Table listOfArtworks={listOfArtworks} />
		</main>
	);
}
