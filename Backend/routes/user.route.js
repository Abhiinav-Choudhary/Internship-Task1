// routes/userRoutes.js
import express from "express";
import {
  Adduser,
  getUsers,
   claimPoints,
  getLeaderboard,
  getClaimHistory
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/add", Adduser);
router.get("/users", getUsers);
router.post("/claim", claimPoints);
router.get("/leaderboard", getLeaderboard);
router.get("/history", getClaimHistory);

export default router;
