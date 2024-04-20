import { TypedRequest, UserBody } from "../@types";
import { User } from "../models/user.model";
import { ApiError } from "../utils/ApiError";
import { asyncHandler } from "../utils/asyncHandler";
import { Response } from "express";

const registerUser = asyncHandler(
	async (req: TypedRequest<UserBody>, res: Response) => {
        // extract the fields from the request body
		const { username, email, password, conPassword, avater } = req.body;

        // checking, all the fields are filled up
		if (
			[username, email, password, conPassword, avater].some(
				(field) => field?.trim() == ""
			)
		) {
			throw new ApiError(401, "Some fields are missing...");
		}

        // checking, the original password is matching with confirm password
		if (password !== conPassword) {
			throw new ApiError(
				400,
				"Confirm password is not matching with original password"
			);
		}

        // check if the user is already exist 
		const existUser = await User.findOne({ $or: [{ username }, { email }] });

		if (existUser) {
			throw new ApiError(400, "User already exist");
		}
	}
);

export { registerUser };
