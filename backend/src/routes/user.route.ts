import express from "express";

import {
  createUserDataValidation,
  loginUserDataValidation,
} from "../validation/user.validation";
import validateDataMiddleware from "../middlewares/validation.parse";
import { checkAuth } from "../middlewares/auth.middleware";
import {
  InsertSocialMediaLinkHandler,
  createUserHandler,
  getAllUserHandler,
  getSingleUserHandler,
  loginUserHandler,
  updateUserCoverImageHandler,
  updateUserProfileImageHandler,
  ChangeUserEmailHandler,
  ChangeUserNameHandler,
  resetPasswordHandler,
  forgetPasswordHandler,
  updatePasswordHandler,
  generateQrCodeHandler,
} from "../controllers/user";
import upload from "../middlewares/file.upload";
import { app } from "../app/index";

const router = express.Router();

router.post(
  "/users/register",
  validateDataMiddleware(createUserDataValidation),
  createUserHandler
);
router.get("/users/:id", getSingleUserHandler);
router.get("/users", getAllUserHandler);
router.post(
  "/users/login",
  validateDataMiddleware(loginUserDataValidation),
  loginUserHandler
);
router.patch(
  "/update-user-profile-image",
  checkAuth,
  upload.single("image"),
  updateUserProfileImageHandler as any
);
router.patch(
  "/update-user-cover-image",
  checkAuth,
  upload.single("image"),
  updateUserCoverImageHandler as any
);
router.post(
  "/users/insert-social-media",
  checkAuth,
  InsertSocialMediaLinkHandler as any
);
router.patch("/updateEmail", checkAuth, ChangeUserEmailHandler);
router.patch("/updateName", checkAuth, ChangeUserNameHandler);
router.patch("/updatePassword", checkAuth, updatePasswordHandler);
router.post("/generate-qr", generateQrCodeHandler);
export default router;
