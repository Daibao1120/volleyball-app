import {
    ButtonGroup,
    Dropdown,
    Form,
    FormControl,
    Tab,
    Tabs,
} from "react-bootstrap";
import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

function createData(
    ID,
    Name,
    Team,
    Number,
    Position,
    PhoneNumber,
    Birthday,
    High,
    Weight,
    Attack,
    Block
) {
    return {
        ID,
        Name,
        Team,
        Number,
        Position,
        PhoneNumber,
        Birthday,
        High,
        Weight,
        Attack,
        Block,
    };
}

const rows = [
    createData(
        "??????????",
        "張騰",
        "球球海獅",
        "2",
        "舉球",
        "09????????",
        "????/??/??",
        "173",
        "60",
        "???",
        "???"
    ),
];

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        "& > *": {
            margin: theme.spacing(1),
        },
        backgroundColor: theme.palette.background.paper,
    },
    table: {
        maxWidth: "unset",
    },
}));

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
        href=""
        ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
    >
        {children}
        &#x25bc;
    </a>
));

const CustomMenu = React.forwardRef(
    ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
        const [value, setValue] = useState("");

        return (
            <div
                ref={ref}
                style={style}
                className={className}
                aria-labelledby={labeledBy}
            >
                <FormControl
                    autoFocus
                    className="mx-3 my-2 w-auto"
                    placeholder="Type to filter..."
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                />
                <ul className="list-unstyled">
                    {React.Children.toArray(children).filter(
                        (child) =>
                            !value ||
                            child.props.children.toLowerCase().startsWith(value)
                    )}
                </ul>
            </div>
        );
    }
);

const options = ["選擇球隊", "球球海獅"];

export default function CustomizedTables() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <div className="my-2">
                <List component="nav" aria-label="球隊名稱">
                    <ListItem
                        button
                        aria-haspopup="true"
                        aria-controls="lock-menu"
                        aria-label="球隊名稱"
                        onClick={handleClickListItem}
                    >
                        <ListItemText
                            primary="球隊名稱"
                            secondary={options[selectedIndex]}
                        />
                    </ListItem>
                </List>
                <Menu
                    id="lock-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    {options.map((option, index) => (
                        <MenuItem
                            key={option}
                            disabled={index === 0}
                            selected={index === selectedIndex}
                            onClick={(event) =>
                                handleMenuItemClick(event, index)
                            }
                        >
                            {option}
                        </MenuItem>
                    ))}
                </Menu>
            </div>
            <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="my-2"
            >
                <Tab eventKey="新增" title="球員新增">
                    <Form method="POST" action="http://localhost:3000/team">
                        {/* 後端給個api放在action */}
                        <Form.Group controlId="TeamName">
                            <Form.Label>身分證字號</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter ID"
                                name="name"
                            />
                        </Form.Group>

                        <Form.Group controlId="Coach">
                            <Form.Label>姓名</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Name"
                                name="name"
                            />
                        </Form.Group>

                        <Form.Group controlId="Contact">
                            <Form.Label>所屬球隊</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Team"
                                name="name"
                            />
                        </Form.Group>
                        <Form.Group controlId="ContactPhone">
                            <Form.Label>背號</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter Number"
                                name="name"
                            />
                        </Form.Group>
                        <Form.Group controlId="ContactPhone">
                            <Form.Label>位置</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter Position"
                                name="name"
                            />
                        </Form.Group>
                        <Form.Group controlId="ContactPhone">
                            <Form.Label>緊急連絡</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter PhoneNumber"
                                name="name"
                            />
                        </Form.Group>
                        <Form.Group controlId="ContactPhone">
                            <Form.Label>生日</Form.Label>
                            <Form.Control
                                type="date"
                                placeholder="Enter Birthday"
                                name="name"
                            />
                        </Form.Group>
                        <Form.Group controlId="ContactPhone">
                            <Form.Label>身高</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter High"
                                name="name"
                            />
                        </Form.Group>
                        <Form.Group controlId="ContactPhone">
                            <Form.Label>體重</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter Weight"
                                name="name"
                            />
                        </Form.Group>
                        <Form.Group controlId="ContactPhone">
                            <Form.Label>打點</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter Attack"
                                name="name"
                            />
                        </Form.Group>
                        <Form.Group controlId="ContactPhone">
                            <Form.Label>攔網點</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter Block"
                                name="name"
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            送出
                        </Button>
                    </Form>
                </Tab>
                <Tab eventKey="檢視" title="檢視">
                    <TableContainer className={classes.table} component={Paper}>
                        <Table
                            className={classes.table}
                            aria-label="customized table"
                        >
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>
                                        身分證字號
                                    </StyledTableCell>
                                    <StyledTableCell align="left">
                                        姓名
                                    </StyledTableCell>
                                    <StyledTableCell align="left">
                                        球隊
                                    </StyledTableCell>
                                    <StyledTableCell align="left">
                                        背號
                                    </StyledTableCell>
                                    <StyledTableCell align="left">
                                        位置
                                    </StyledTableCell>
                                    <StyledTableCell align="left">
                                        緊急連絡
                                    </StyledTableCell>
                                    <StyledTableCell align="left">
                                        生日
                                    </StyledTableCell>
                                    <StyledTableCell align="left">
                                        身高
                                    </StyledTableCell>
                                    <StyledTableCell align="left">
                                        體重
                                    </StyledTableCell>
                                    <StyledTableCell align="left">
                                        打點
                                    </StyledTableCell>
                                    <StyledTableCell align="left">
                                        攔網
                                    </StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <StyledTableRow key={row.name}>
                                        <StyledTableCell
                                            component="th"
                                            scope="row"
                                        >
                                            {row.ID}
                                        </StyledTableCell>
                                        <StyledTableCell align="left">
                                            {row.Name}
                                        </StyledTableCell>
                                        <StyledTableCell align="left">
                                            {row.Team}
                                        </StyledTableCell>
                                        <StyledTableCell align="left">
                                            {row.Number}
                                        </StyledTableCell>
                                        <StyledTableCell align="left">
                                            {row.Position}
                                        </StyledTableCell>
                                        <StyledTableCell align="left">
                                            {row.PhoneNumber}
                                        </StyledTableCell>
                                        <StyledTableCell align="left">
                                            {row.Birthday}
                                        </StyledTableCell>
                                        <StyledTableCell align="left">
                                            {row.High}
                                        </StyledTableCell>
                                        <StyledTableCell align="left">
                                            {row.Weight}
                                        </StyledTableCell>
                                        <StyledTableCell align="left">
                                            {row.Attack}
                                        </StyledTableCell>
                                        <StyledTableCell align="left">
                                            {row.Block}
                                        </StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Tab>
                <Tab eventKey="參數管理" title="參數管理"></Tab>
            </Tabs>
        </>
    );
}
