import { Router } from "express";

const router = Router();

router.post("/name", (req, res) => {
  const { firstName, lastName } = req.body;
  res.json({ message: `Hello ${firstName} ${lastName}` });
  //
});

router.post("/add", (req, res) => {
  const { num1, num2 } = req.body;
  res.json({ message: Number(num1) + Number(num2) });
});

router.post("/subtract", (req, res) => {
  const { num1, num2 } = req.body;
  res.json({ message: Number(num1) - Number(num2) });
});

export default router;
