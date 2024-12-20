import express from "express";
import { checkAuth, login, logout, signup, updateProfile } from "../controllers/authController.js";
import { protectedRoute } from "../middleware/auth.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.put("/update-profile", protectedRoute, updateProfile);

router.get("/check", protectedRoute, checkAuth);

export default router;