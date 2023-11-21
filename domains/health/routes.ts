import { Router } from "hyper-express";
import { healthCheck } from "./handlers";

export const router = new Router();

router.get("/", healthCheck);
