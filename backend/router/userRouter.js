import express from "express";
import postgresClient from "../config/db.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const text =
      "INSERT INTO users (email,password) VALUES ($1 , crypt($2, gen_salt('bf'))) RETURNING *";
    const values = [req.body.email, req.body.password];
    const { rows } = await postgresClient.query(text, values);
    return res.status(201).json({ createdUser: rows[0] });
  } catch (error) {
    console.log("Error occured", error.message);
    return res.status(400).json({ message: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const text =
      "SELECT * FROM users WHERE email = $1 AND password =  crypt($2, password)";
    const values = [req.body.email, req.body.password];
    const { rows } = await postgresClient.query(text, values);
    if (!rows.length) {
      return res.status(404).json({ message: "User Not Found " });
    }
    return res.status(200).json({ message: " Giriş Başarılı" });
  } catch (error) {
    console.log("Error occured", error.message);
    return res.status(400).json({ message: error.message });
  }
});

router.put("/update/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    const text = "UPDATE users SET email = $1  WHERE id = $2 RETURNING *";

    const values = [req.body.email, userId];

    const { rows } = await postgresClient.query(text, values);
    if (!rows.length) {
      return res.status(404).json({ message: "Kullanıcı bulunmadı" });
    }
    return res.status(200).json({ updateUser: rows[0] });
  } catch (error) {
    console.log("Error occured", error.message);
    return res.status(400).json({ message: error.message });
  }
});

router.delete("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const text = "DELETE FROM users WHERE id = $1 RETURNING *";
    const values = [userId];
    const { rows } = await postgresClient.query(text, values);
    if (!rows.length) {
      return res.status(404).json({ message: "Kullanıcı bulunmadı" });
    }
    return res.status(200).json({ updateUser: rows[0] });
  } catch (error) {
    console.log("Error occured", error.message);
    return res.status(400).json({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const text = " SELECT * FROM users ORDER BY id ASC";
    const { rows } = await postgresClient.query(text);
    return res.status(200).json(rows);
  } catch (error) {
    console.log("Error occured", error.message);
    return res.status(400).json({ message: error.message });
  }
});


export default router;
