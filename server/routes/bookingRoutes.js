import express from "express";
import pool from "../db.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const {
      package_id,
      name,
      email,
      phone,
      travelers,
      travel_date
    } = req.body;

    if (
      !package_id ||
      !name ||
      !email ||
      !phone ||
      !travelers ||
      !travel_date
    ) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    const result = await pool.query(
      `INSERT INTO bookings
      (package_id, name, email, phone, travelers, travel_date)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *`,
      [
        package_id,
        name,
        email,
        phone,
        travelers,
        travel_date
      ]
    );

    res.status(201).json({
      message: "Booking created successfully",
      booking: result.rows[0]
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to create booking"
    });
  }
});

export default router;