import express from "express";
import { checkAuthorization } from "../middleware/checkAuthorization.js";
import { checkStaffLevelPermissions } from "../middleware/CheckPermissions.js";
import { getMembers } from "../controllers/membersController.js";

const router = express.Router();

router
  .route("/")
  .get(checkAuthorization, checkStaffLevelPermissions, getMembers);

export default router;
