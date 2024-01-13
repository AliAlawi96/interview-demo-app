import { z } from "zod";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
	"image/jpeg",
	"image/jpg",
	"image/png",
	"image/webp",
];

export const submitAnArtworkSchema = z.object({
	title: z.string().min(3, "Title must be at least 3 characters long"),
	artist: z.string().min(2, "Artist name must be at least 2 characters long"),
	production_year: z.coerce
		.number()
		.min(1000, "Year must be at least 1000")
		.max(
			new Date().getFullYear(),
			"Year must be less than or equal to current year"
		),
	image: z
		.any()
		.refine((files) => files?.[0]?.size > 0, `Please upload an image.`)
		.refine(
			(files) => files?.[0]?.size <= MAX_FILE_SIZE,
			`Max image size is 5MB.`
		)
		.refine(
			(files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
			"Only .jpg, .jpeg, .png and .webp formats are supported."
		),
	imageURL: z.any(),
});

export type TsubmitAnArtworkSchema = z.infer<typeof submitAnArtworkSchema>;
