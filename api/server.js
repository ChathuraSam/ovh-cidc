  const express = require("express");
  const app = express();
  const cors = require("cors");
  const PORT = process.env.PORT || 4200;

  // Hardcoded data
  const rows = [
    {
      name: "Cake",
      calories: 300,
      fat: 20,
      carbs: 50,
      protein: 5,
    },
    {
      name: "Ice Cream",
      calories: 250,
      fat: 10,
      carbs: 40,
      protein: 3,
    },
    {
      name: "Ice Cream",
      calories: 250,
      fat: 10,
      carbs: 40,
      protein: 3,
    },
    {
      name: "Ice Cream",
      calories: 250,
      fat: 10,
      carbs: 40,
      protein: 3,
    },
    // Add more data as needed
  ];

  app.use(cors());

  // Endpoint to provide hardcoded data
  app.get("/api/data", (req, res) => {
    res.json(rows);
  });

  // Start the server
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
