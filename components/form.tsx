"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TsubmitAnArtworkSchema, submitAnArtworkSchema } from "@/lib/types";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { getBase64 } from "@/utils/get-base64";

const Form = ({
	listOfArtworks,
	setListOfArtworks,
}: {
	listOfArtworks: TsubmitAnArtworkSchema[];
	setListOfArtworks: Dispatch<SetStateAction<TsubmitAnArtworkSchema[]>>;
}) => {
	const {
		register,
		handleSubmit,
		reset,
		control,
		formState,
		formState: { errors, isSubmitting, isSubmitSuccessful },
	} = useForm<TsubmitAnArtworkSchema>({
		defaultValues: {
			title: "",
			artist: "",
			production_year: parseInt(""),
			image: "",
		},
		resolver: zodResolver(submitAnArtworkSchema),
	});
	const [imageURL, setImageURL] = useState<any>();

	useEffect(() => {
		if (formState.isSubmitSuccessful) {
			reset({});
		}
	}, [formState, reset]);

	useEffect(() => {
		console.log(imageURL);
	}, [imageURL]);

	const onSubmit = (data: TsubmitAnArtworkSchema) => {
		// console.log([...listOfArtworks, data]);
		localStorage.setItem(
			"listOfArtworks",
			JSON.stringify([...listOfArtworks, { ...data, imageURL: imageURL }])
		);
		setListOfArtworks((prev) => [...prev, { ...data, imageURL: imageURL }]);
		console.log({ ...data, imageURL: imageURL });
	};

	return (
		<form
			className="w-full max-w-6xl flex flex-col items-center "
			onSubmit={handleSubmit(onSubmit)}
		>
			<div className=" bg-slate-100 gap-12 p-12 rounded-xl shadow-lg w-full md:w-1/2">
				<header>
					<h1 className="text-2xl">Register your artwork</h1>
				</header>
				<div className="border-b border-gray-900/10 pb-12">
					<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
						<div className="sm:col-span-4">
							<label
								htmlFor="title"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Title of your artwork
							</label>
							<div className="mt-2">
								<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600 sm:max-w-md">
									<input
										{...register("title")}
										type="text"
										name="title"
										id="title"
										className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
										placeholder="The Blue Boy"
									/>
								</div>
								{errors.title && (
									<p className="mt-2 text-sm text-red-600">
										{errors.title.message}
									</p>
								)}
							</div>
						</div>
						<div className="sm:col-span-4">
							<label
								htmlFor="artist"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Artist
							</label>
							<div className="mt-2">
								<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600 sm:max-w-md">
									<input
										{...register("artist")}
										type="text"
										name="artist"
										id="artist"
										className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
										placeholder="Thomas Gainsborough"
									/>
								</div>
								{errors.artist && (
									<p className="mt-2 text-sm text-red-600">
										{errors.artist.message}
									</p>
								)}
							</div>
						</div>

						<div className="sm:col-span-4">
							<label
								htmlFor="production_year"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Year of Production
							</label>
							<div className="mt-2">
								<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600 sm:max-w-md">
									<input
										{...register("production_year")}
										type="number"
										name="production_year"
										id="production_year"
										className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
										placeholder="1770"
									/>
								</div>
								{errors.production_year && (
									<p className="mt-2 text-sm text-red-600">
										{errors.production_year.message}
									</p>
								)}
							</div>
						</div>

						<div className="col-span-full">
							<label
								htmlFor="cover-photo"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Upload Artwork
							</label>
							<div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
								<div className="text-center">
									{/* <PhotoIcon
										className="mx-auto h-12 w-12 text-gray-300"
										aria-hidden="true"
									/> */}
									<div className="mt-4 flex text-sm leading-6 text-gray-600">
										<label
											htmlFor="image"
											className="relative cursor-pointer rounded-md bg-white font-semibold text-blue-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2 hover:text-blue-500"
										>
											<span>Upload a file</span>
											<input
												{...register("image")}
												id="image"
												name="image"
												type="file"
												className="sr-only"
												onChange={(e) => {
													e.target.files &&
														getBase64(
															e.target.files[0]
														).then((res) =>
															setImageURL(res)
														);
													console.log(e.target.files);
												}}
											/>
										</label>
									</div>
									<p className="text-xs leading-5 text-gray-600">
										PNG, JPG, JPEG, WEBP up to 5MB
									</p>
								</div>
							</div>
							{errors?.image?.message && (
								<p className="mt-2 text-sm text-red-600">
									{errors.image.message as string}
								</p>
							)}
						</div>
					</div>
				</div>
			</div>

			<div className="mt-6 flex w-full items-center justify-center ">
				<button
					type="submit"
					disabled={isSubmitting}
					className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
				>
					Submit
				</button>
			</div>
		</form>
	);
};

export { Form };
