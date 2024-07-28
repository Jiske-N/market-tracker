import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";

interface Data {
    name: string;
    currentPrice: number;
    averageCost: number;
    quantity: number;
    weighting: string;
    currentValue: number;
    change: number;
}

function createData(
    name: string,
    currentPrice: number,
    averageCost: number,
    quantity: number,
    weighting: string,
    currentValue: number,
    change: number
): Data {
    return {
        name,
        currentPrice,
        averageCost,
        quantity,
        weighting,
        currentValue,
        change,
    };
}

const rows = [
    createData("Share 1", 47.93, 40.85, 130, "15.81%", 6230.9, 920.13),
    createData("Share 2", 93.43, 73.85, 73, "17.30%", 6820.39, 1429.17),
    createData("Share 1", 47.93, 40.85, 130, "15.81%", 6230.9, 920.13),
    createData("Share 2", 93.43, 73.85, 73, "17.30%", 6820.39, 1429.17),
    createData("Share 1", 47.93, 40.85, 130, "15.81%", 6230.9, 920.13),
    createData("Share 2", 93.43, 73.85, 73, "17.30%", 6820.39, 1429.17),
    createData("Share 1", 47.93, 40.85, 130, "15.81%", 6230.9, 920.13),
    createData("Share 2", 93.43, 73.85, 73, "17.30%", 6820.39, 1429.17),
    createData("Share 1", 47.93, 40.85, 130, "15.81%", 6230.9, 920.13),
    createData("Share 2", 93.43, 73.85, 73, "17.30%", 6820.39, 1429.17),
    createData("Share 1", 47.93, 40.85, 130, "15.81%", 6230.9, 920.13),
    createData("Share 2", 93.43, 73.85, 73, "17.30%", 6820.39, 1429.17),
    createData("Share 1", 47.93, 40.85, 130, "15.81%", 6230.9, 920.13),
    createData("Share 2", 93.43, 73.85, 73, "17.30%", 6820.39, 1429.17),
    createData("Share 1", 47.93, 40.85, 130, "15.81%", 6230.9, 920.13),
    createData("Share 2", 93.43, 73.85, 73, "17.30%", 6820.39, 1429.17), 
];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator<Key extends keyof any>(
    order: "asc" | "desc",
    orderBy: Key
): (
    a: { [key in Key]: number | string },
    b: { [key in Key]: number | string }
) => number {
    return order === "desc"
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

export default function BasicTable() {
    const [order, setOrder] = React.useState<"asc" | "desc">("asc");
    const [orderBy, setOrderBy] = React.useState<keyof Data>("currentPrice");
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleRequestSort = (
        event: React.MouseEvent<unknown>,
        property: keyof Data
    ) => {
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
    };

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const sortedRows = React.useMemo(
        () => stableSort(rows, getComparator(order, orderBy)),
        [order, orderBy]
    );

    const visibleRows = React.useMemo(
        () =>
            sortedRows.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
            ),
        [page, rowsPerPage, sortedRows]
    );

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="sortable table">
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <TableSortLabel
                                active={orderBy === "name"}
                                direction={orderBy === "name" ? order : "asc"}
                                onClick={(event) =>
                                    handleRequestSort(event, "name")
                                }
                            >
                                Name
                            </TableSortLabel>
                        </TableCell>
                        <TableCell align="right">
                            <TableSortLabel
                                active={orderBy === "currentPrice"}
                                direction={
                                    orderBy === "currentPrice" ? order : "asc"
                                }
                                onClick={(event) =>
                                    handleRequestSort(event, "currentPrice")
                                }
                            >
                                Current Price
                            </TableSortLabel>
                        </TableCell>
                        <TableCell align="right">
                            <TableSortLabel
                                active={orderBy === "averageCost"}
                                direction={
                                    orderBy === "averageCost" ? order : "asc"
                                }
                                onClick={(event) =>
                                    handleRequestSort(event, "averageCost")
                                }
                            >
                                Average Cost
                            </TableSortLabel>
                        </TableCell>
                        <TableCell align="right">
                            <TableSortLabel
                                active={orderBy === "quantity"}
                                direction={
                                    orderBy === "quantity" ? order : "asc"
                                }
                                onClick={(event) =>
                                    handleRequestSort(event, "quantity")
                                }
                            >
                                Quantity
                            </TableSortLabel>
                        </TableCell>
                        <TableCell align="right">
                            <TableSortLabel
                                active={orderBy === "weighting"}
                                direction={
                                    orderBy === "weighting" ? order : "asc"
                                }
                                onClick={(event) =>
                                    handleRequestSort(event, "weighting")
                                }
                            >
                                Weighting
                            </TableSortLabel>
                        </TableCell>
                        <TableCell align="right">
                            <TableSortLabel
                                active={orderBy === "currentValue"}
                                direction={
                                    orderBy === "currentValue" ? order : "asc"
                                }
                                onClick={(event) =>
                                    handleRequestSort(event, "currentValue")
                                }
                            >
                                Current Value
                            </TableSortLabel>
                        </TableCell>
                        <TableCell align="right">
                            <TableSortLabel
                                active={orderBy === "change"}
                                direction={orderBy === "change" ? order : "asc"}
                                onClick={(event) =>
                                    handleRequestSort(event, "change")
                                }
                            >
                                Change
                            </TableSortLabel>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {visibleRows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{
                                "&:last-child td, &:last-child th": {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">
                                ${row.currentPrice.toFixed(2)}
                            </TableCell>
                            <TableCell align="right">
                                ${row.averageCost.toFixed(2)}
                            </TableCell>
                            <TableCell align="right">{row.quantity}</TableCell>
                            <TableCell align="right">{row.weighting}</TableCell>
                            <TableCell align="right">
                                ${row.currentValue.toFixed(2)}
                            </TableCell>
                            <TableCell align="right">
                                {row.change >= 0
                                    ? `+${row.change.toFixed(2)}`
                                    : row.change.toFixed(2)}
                            </TableCell>
                        </TableRow>
                    ))}
                    {emptyRows > 0 && (
                        <TableRow
                            style={{
                                height: 53 * emptyRows,
                            }}
                        >
                            <TableCell colSpan={7} />
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </TableContainer>
    );
}

// Helper functions for sorting
function stableSort<T>(
    array: readonly T[],
    comparator: (a: T, b: T) => number
) {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}
