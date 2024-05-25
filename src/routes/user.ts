import express from 'express';
import { newUser, getAllUsers, getUser, deleteUser } from '../controllers/user';
import { adminOnly } from '../middlewares/auth';

const app = express.Router();

app.post("/new", newUser);

// Route - /api/v1/user/all
app.get("/all",adminOnly, getAllUsers);

// Route - /api/v1/user/dynamicID

app.route("/:id").get(getUser).delete(adminOnly, deleteUser);
// app.get("/:id", getUser);
// app.delete("/:id", deleteUser);
export default app;