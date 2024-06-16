import * as React from "react";
import { useState, useEffect } from "react"; // Add the missing import statement for the useEffect hook
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios"; // Assuming axios is already installed and imported

/**
 * 

            "id": 1,
            "title": "iPhone 9",
            "description": "An apple mobile which is nothing like apple",
            "price": 549,
            "discountPercentage": 12.96,
            "rating": 4.69,
            "stock": 94,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
            "images": [
                "https://cdn.dummyjson.com/product-images/1/1.jpg",
                "https://cdn.dummyjson.com/product-images/1/2.jpg",
                "https://cdn.dummyjson.com/product-images/1/3.jpg",
                "https://cdn.dummyjson.com/product-images/1/4.jpg",
                "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
            ]
        },
 */


export default function TableComopnent() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://dummyjson.com/products/"
        ); // Assuming the API is served from the same origin
        setRows(response.data.products);
        console.log(rows);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <TableContainer
      component={Paper}
      className="small-container"
    >
      <Table
        sx={{ minWidth: 650 }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">
              Fat&nbsp;(g)
            </TableCell>
            <TableCell align="right">
              Carbs&nbsp;(g)
            </TableCell>
            <TableCell align="right">
              Protein&nbsp;(g)
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{
                "&:last-child td, &:last-child th": {
                  border: 0,
                },
              }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">
                {row.description}
              </TableCell>
              <TableCell align="right">
                {row.price}
              </TableCell>
              <TableCell align="right">
                {row.brand}
              </TableCell>
              <TableCell align="right">
                {row.category}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
