import { TsubmitAnArtworkSchema } from "@/lib/types";
import React from "react";

const User = ({
	artwork,
	handleClick,
}: {
	artwork: TsubmitAnArtworkSchema;
	handleClick: any;
}) => {
	return (
		<tr className=" p-4 w-full flex">
			<td className="flex items-center w-full text-sm sm:pl-0">
				<div className="flex items-center">
					<div className="h-11 w-11 flex-shrink-0">
						<img
							className="h-11 w-11 rounded-full object-cover"
							src={artwork.imageURL}
							alt=""
						/>
					</div>
					<div className="flex items-center ml-4">
						<div className="font-medium text-blue-900">
							{artwork.title}
						</div>
					</div>
				</div>
			</td>
			<td className="flex items-center w-full text-sm text-blue-900">
				<div className="text-blue-900">{artwork.artist}</div>
			</td>
			<td className="flex items-center w-full text-sm text-blue-900">
				{artwork.production_year}
			</td>
			<td>
				<button
					onClick={() => handleClick(artwork.title)}
					className="bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
				>
					Delete
				</button>
			</td>
		</tr>
	);
};

export default User;
