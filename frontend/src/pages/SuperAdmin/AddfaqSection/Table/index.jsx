import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Switch,
} from "@mui/material";
import "./Table.css";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";

export const MuiTable = (prop) => {
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div className="px-20 all-content-faq mt-[-12px]">
      <TableContainer
        sx={{
          maxHeight: "100vh",
          maxWidth: "100vw",
          fontFamily: "Montserrat",
        }}
        component={Paper}
      >
        <Table stickyHeader aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <span className="text-xl font-semibold">Question</span>
              </TableCell>
              <TableCell>
                <span className="text-xl font-semibold">Answer</span>
              </TableCell>
              <TableCell>
                <span className="text-xl font-semibold">Publish</span>
              </TableCell>
              <TableCell>
                <span className="text-xl font-semibold">Actions</span>
              </TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {prop.tableData.map((row) => (
              <TableRow key={row._id}>
                <TableCell className="">
                  <span className="text-[18px] font-semibold">
                    {row.question}
                  </span>
                </TableCell>
                <TableCell className="text-center">
                  <span className="text-[18px] font-semibold">
                    {row.answer}
                  </span>
                </TableCell>
                <TableCell className="text-center">
                  <Switch
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                </TableCell>
                <TableCell className="text-center ">
                  <div className="flex gap-2 items-center">
                    <span className="text-2xl p-2 rounded-md border">
                      <DeleteIcon />
                    </span>
                    <span className="border p-1 text-2xl rounded-md ">
                      <EditIcon />
                    </span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
