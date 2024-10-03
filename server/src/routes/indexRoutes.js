import { Router } from "express";
import tasksRoutes from "./tasksRoutes.js";
import testRoutes from "./testRoutes.js";

const router = Router();

router.use(tasksRoutes);
router.use(testRoutes);

router.get(`/`, (req, res) => {
  res.send({ msg: "Base URL" });
});

router.use((req, res) => {
  res.status(404).json({ msg: "Not found" });
});

export default router;
