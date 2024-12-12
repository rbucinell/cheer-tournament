"use client";

import { Component, ReactNode } from "react";
import { Button, IconButton, Stack, Typography} from '@mui/material';
import { SwapVert, Textsms, Delete } from "@mui/icons-material";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ItemInterface } from "react-sortablejs";

interface TeamGridProps {
    categories: ItemInterface[]
}

export default class TeamGrid extends Component<TeamGridProps, {}> {

    rows: any[];

    constructor(props: TeamGridProps) {
        super(props);
        this.rows = [
            this.createData('Judge 1', ...Array(9).fill(0).map(() => Math.round(Math.random() * 10))),
            this.createData('Judge 2', ...Array(9).fill(0).map(() => Math.round(Math.random() * 10))),
            this.createData('Judge 3', ...Array(9).fill(0).map(() => Math.round(Math.random() * 10)))
        ];
    }
    createData(name:string, ...scores: Array<any>) {
        let ret = { name };
        for ( let cat of this.props.categories) {
            ret[cat.name] = scores.shift();
        }
        return ret;
    }

    render(): ReactNode {
        return (
            <TableContainer component={Paper} sx={{ my: 2}}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell size="small" colSpan={this.props.categories.length + 1}>Team Name</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableHead>
                        <TableRow>
                        <TableCell></TableCell>
                            {this.props.categories.map((category) => (<StyledTableCell align="right">{category.name}</StyledTableCell>))}
                            <StyledTableCell align="right">Judge Total</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.rows.map((row) => (
                            <StyledTableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                {Object.keys(row).map((key) => (<StyledTableCell align="center">{row[key]}</StyledTableCell>))}
                                <StyledTableCell sx={{ borderLeft: '1px solid #222'}} align="center">
                                {Object.values(row).slice(1).reduce((a:number, b:number) => a + b, 0)}
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                        <TableRow >
                            <TableCell sx={{ py: 1}}colSpan={this.props.categories.length}></TableCell>
                            <TableCell sx={{ py: 1, fontWeight: 'bold'}}  align="right">Grand Total</TableCell>
                            <TableCell sx={{ py: 1, fontWeight: 'bold', borderLeft: '1px solid #222', color: 'white', backgroundColor: 'rebeccapurple'}}  align="center">{ 0 }</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.secondary.dark,
      color: theme.palette.secondary.light,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  