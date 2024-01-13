import { TsubmitAnArtworkSchema } from "@/lib/types";

const Table = ({
	listOfArtworks,
}: {
	listOfArtworks: TsubmitAnArtworkSchema[];
}) => {
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
											Artwork: TsubmitAnArtworkSchema,
											index: number
										) => (
											<tr
												key={index}
												className=" p-4 w-full grid grid-cols-3"
											>
												<td className="flex items-center w-full text-sm sm:pl-0">
													<div className="flex items-center">
														<div className="h-11 w-11 flex-shrink-0">
															<img
																className="h-11 w-11 rounded-full object-cover"
																src={
																	Artwork.imageURL
																}
																alt=""
															/>
														</div>
														<div className="flex items-center ml-4">
															<div className="font-medium text-blue-900">
																{Artwork.title}
															</div>
														</div>
													</div>
												</td>
												<td className="flex items-center w-full text-sm text-blue-900">
													<div className="text-blue-900">
														{Artwork.artist}
													</div>
												</td>
												<td className="flex items-center text-sm text-blue-900">
													{Artwork.production_year}
												</td>
											</tr>
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
