import express from "express";
import { checkAuth } from '../middlewares/auth.middleware';
import {
  createOtherLinkHandler,
  deleteOtherLinkHandler,
  getAllOtherLinkHandler,
  getSingleOtherLinkHandler,
  updateOtherLinkHandler,
} from "../controllers/other_links";

const router = express.Router();

router.post("/other-links",checkAuth,createOtherLinkHandler as any);
router.get('/other-links/user/me',checkAuth,getAllOtherLinkHandler as any)
router.get('/other-links/:id',getSingleOtherLinkHandler)
router.patch('/other-links/:id',updateOtherLinkHandler)
router.delete('/other-links/:id',deleteOtherLinkHandler)

export default router;
