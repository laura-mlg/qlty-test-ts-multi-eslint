import { Request, Response, Router } from "express";

interface UserData {
  id: number;
  name: string;
  email: string;
}

const router = Router();

const users: UserData[] = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" }
];

router.get("/users", (_req: Request, res: Response) => {
  res.json(users);
});

router.get("/users/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const user = users.find(u => u.id === id);
  if (!user) {
    res.status(404).json({ error: "User not found" });
    return;
  }
  res.json(user);
});

export default router;
