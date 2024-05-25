import ErrorHandler from "../utils/utility-class";
import { TryCatch } from "./error";
import { User } from "../models/user";

//Middleware to make sure only admin is allowed

export const adminOnly = TryCatch(async (req, res, next) => {
   
    const {id} = req.query;

    if (!id) return next(new ErrorHandler("Please Login First", 401));

    const user = await User.findById(id);

    if (!user) return next(new ErrorHandler("Invalid User ID", 401));

    if (user.role !=="admin") return next(new ErrorHandler("Only Admin Is Authorized", 401));

    next();




})
