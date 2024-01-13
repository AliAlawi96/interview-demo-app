import { TsubmitAnArtworkSchema } from "@/lib/types";
import User from "./user";

const Table = ({
	listOfArtworks,
	setListOfArtworks,
}: {
	listOfArtworks: TsubmitAnArtworkSchema[];
	setListOfArtworks: any;
}) => {
	const handleClick = (deletedUser: string) => {
		console.log(deletedUser);
		const newArray = listOfArtworks.filter(
			(user) => user.title !== deletedUser
		);
		localStorage.setItem("listOfArtworks", JSON.stringify([...newArray]));
		setListOfArtworks([...newArray]);
	};

	return (
		<div className="bg-slate-100 gap-12 px-2 py-4 md:p-12 rounded-xl shadow-lg w-full lg:w-2/3 mb-20">
			<div className="sm:flex sm:items-center">
				<div className="sm:flex-auto">
					<h1 className="text-base font-semibold leading-6 text-gray-900">
						List of Artworks
					</h1>
					<p className="mt-2 text-sm text-gray-700">
						A list of all the artworks that have been submitted.
					</p>
				</div>
			</div>
			<div className="mt-8 flow-root">
				<div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 p-4">
					<div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
						<table className="flex flex-col w-full min-w-full divide-y divide-gray-300 p-4">
							<thead>
								<tr className="grid grid-cols-3 pb-4">
									<th
										scope="col"
										className="  text-left text-sm font-semibold text-gray-900 sm:pl-0"
									>
										Name
									</th>
									<th
										scope="col"
										className="text-left text-sm font-semibold text-gray-900"
									>
										Artist
									</th>
									<th
										scope="col"
										className="text-left text-sm font-semibold text-gray-900"
									>
										Year of Production
									</th>
								</tr>
							</thead>
							<tbody className="flex flex-col w-full divide-y divide-gray-200 ">
								{listOfArtworks &&
									listOfArtworks.length > 0 &&
									listOfArtworks.map(
										(
											artwork: TsubmitAnArtworkSchema,
											index: number
										) => (
											<User
												key={index}
												artwork={artwork}
												handleClick={handleClick}
											/>
										)
									)}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export { Table };
