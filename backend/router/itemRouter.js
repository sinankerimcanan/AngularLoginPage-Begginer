import express from "express";
import postgresClient from "../config/db.js";
import ItemsModel from "../Model/itemModel.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const text = " SELECT * FROM items ORDER BY id ASC";
    const { rows } = await postgresClient.query(text);
    return res.status(200).json(rows);
  } catch (error) {
    console.log("Error occured", error.message);
    return res.status(400).json({ message: error.message });
  }
});

router.get("/sepet", async (req, res) => {
  try {
    let value = req.query.value;
    if (typeof value === 'string') {
      value = value.split(',');
    } else if (!Array.isArray(value)) {
      value = [value]; 
    }
    
    const idArray = value.map(id => parseInt(id, 10));
    const placeholders = idArray.map((_, index) => `$${index + 1}`).join(',');
    const text = `SELECT * FROM items WHERE id IN (${placeholders});`;
    
    const { rows } = await postgresClient.query(text, idArray);
    return res.status(200).json(rows);
  } catch (error) {
    console.log("Error occurred", error.message);
    return res.status(400).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const itemData = new ItemsModel(req.body);
    const text =
      "INSERT INTO items (title,imageurl,stockstatus,description) VALUES ($1 ,$2, $3, $4) RETURNING *";
    const values = [
      itemData.title,
      itemData.imageurl,
      itemData.stockstatus,
      itemData.description,
    ];
    const { rows } = await postgresClient.query(text, values);
    return res.status(201).json({ createdUser: rows[0] });
  } catch (error) {
    console.log("Error occured", error.message);
    return res.status(400).json({ message: error.message });
  }
});

export default router;
