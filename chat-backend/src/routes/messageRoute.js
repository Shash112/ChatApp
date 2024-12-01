import express from "express";
import { protectedRoute } from "../middleware/auth.js";
import { getMessage, getUserForSidebar, sendMessage } from "../controllers/messageController.js";

const router = express.Router();

router.get("/users", protectedRoute, getUserForSidebar);
router.get("/:id", protectedRoute, getMessage);

router.post("/send/:id", protectedRoute, sendMessage);

export default router;