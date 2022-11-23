import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { tableStyles } from "./styles";

type CustomTablePropsType = {
  data: string[];
};

function CustomTable({ data }: CustomTablePropsType) {
  return (
    <div data-aos="flip-left">
      <TableContainer
        sx={{
          border: "1px solid rgba(218, 218, 218, 0.2)",
          borderRadius: "16px",
          overflow: "hidden",
        }}
      >
        <Table sx={tableStyles} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ textTransform: "none !important" }}>
                No
              </TableCell>
              <TableCell>Показатели</TableCell>
              <TableCell>Ед.изм.</TableCell>
              <TableCell>2018</TableCell>
              <TableCell>2019</TableCell>
              <TableCell>2020</TableCell>
              <TableCell>2021</TableCell>
              <TableCell>2022</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, i) => (
              <TableRow
                key={row}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {i + 1}
                </TableCell>
                <TableCell>{row}</TableCell>
                <TableCell>тонна</TableCell>
                <TableCell>11 461</TableCell>
                <TableCell>11 461</TableCell>
                <TableCell>11 461</TableCell>
                <TableCell>11 461</TableCell>
                <TableCell>11 461</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default CustomTable;
