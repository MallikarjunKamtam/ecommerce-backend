const express = require("express");
const router = express.Router();
const usersService = require("../services/users");

// Create a new user
router.post("/users", async (req, res) => {
  try {
    const payload = {
      user_name: req.body.user_name,
      email: req.body.email,
      password: req.body.password,
      subscription_id: +req.body.subscription_id,
      created_at: Date.now(),
      updated_at: Date.now(),
    };

    await usersService.create(payload);

    res.json(payload);
  } catch (err) {
    console.log(err, "ENTERED THE ERR ZONE");
    res.status(500).json({ error: err.message });
  }
});

// Get all users
router.get("/users", async (req, res) => {
  try {
    const users = await usersService.getAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a specific user by ID
router.get("/users/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a user by ID
router.put("/users/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a user by ID
router.delete("/users/:id", async (req, res) => {
  try {
    await usersService.delete(req.params.id);
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
