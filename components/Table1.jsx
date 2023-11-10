"use client";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableVirtuoso } from 'react-virtuoso';

const sample = [
  ['52684', 'Control_sample', 'Cartago', 'Authorised', '07/01/2021', '07/01/2021', '07/01/2021', '07/01/2021', 19, 10, 4, 16],
  ['13589', 'QA_sample', 'Bengalore', 'Authorised', '07/01/2021', '07/01/2021', '07/01/2021', '07/01/2021', 8, 15, 9, 8],
  ['98564', 'Manufacturing_sample', 'San Pedro', 'Available', '07/01/2021', '07/01/2021', '07/01/2021', '07/01/2021', 21, 15, 3, 16],
  ['26541', 'Material_sample', 'San Ramon', 'Available', '07/01/2021', '07/01/2021', '07/01/2021', '07/01/2021', 14, 25, 30, 12],
  ['12548', 'QC_sample', 'Manchester', 'Authorised', '07/01/2021', '07/01/2021', '07/01/2021', '07/01/2021', 32, 5, 12, 18],
];

function createData(id, entemplate, location, status, sampdate, recddate, datecom, dateauth, daysamp, daysrecd, dayscomp, daysrecda) {
  return { id, entemplate, location, status, sampdate, recddate, datecom, dateauth, daysamp, daysrecd, dayscomp, daysrecda };
}

const columns = [
  {
    width: 200,
    label: 'Sample ID',
    dataKey: 'id',
  },
  {
    width: 120,
    label: 'Entity Template',
    dataKey: 'entemplate',
    numeric: true,
  },
  {
    width: 120,
    label: 'Location',
    dataKey: 'location',
    numeric: true,
  },
  {
    width: 120,
    label: 'Status',
    dataKey: 'status',
    numeric: true,
  },
  {
    width: 120,
    label: 'Sampled Date',
    dataKey: 'sampdate',
    numeric: true,
  },
  {
    width: 120,
    label: 'Recd Date',
    dataKey: 'recddate',
    numeric: true,
  },
  {
    width: 120,
    label: 'Date Completed',
    dataKey: 'datecom',
    numeric: true,
  },
  {
    width: 120,
    label: 'Date Authorized',
    dataKey: 'dateauth',
    numeric: true,
  },
  {
    width: 120,
    label: 'Days Sampled',
    dataKey: 'daysamp',
    numeric: true,
  },
  {
    width: 120,
    label: 'Days Recd to',
    dataKey: 'daysrecd',
    numeric: true,
  },
  {
    width: 120,
    label: 'Days Comp to',
    dataKey: 'dayscomp',
    numeric: true,
  },
  {
    width: 120,
    label: 'Days Recd to A',
    dataKey: 'daysrecda',
    numeric: true,
  },
];

const rows = Array.from({ length: 200 }, (_, index) => {
  const randomSelection = sample[Math.floor(Math.random() * sample.length)];
  return createData(index, ...randomSelection);
});

const VirtuosoTableComponents = {
  Scroller: React.forwardRef((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => (
    <Table {...props} sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }} />
  ),
  TableHead,
  TableRow: ({ item: _item, ...props }) => <TableRow {...props} />,
  TableBody: React.forwardRef((props, ref) => <TableBody {...props} ref={ref} />),
};

function fixedHeaderContent() {
  return (
    <TableRow>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          variant="head"
          align={column.numeric || false ? 'right' : 'left'}
          style={{ width: column.width }}
          sx={{
            backgroundColor: 'background.paper',
          }}
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  );
}

function rowContent(_index, row) {
  return (
    <React.Fragment>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          align={column.numeric || false ? 'right' : 'left'}
        >
          {row[column.dataKey]}
        </TableCell>
      ))}
    </React.Fragment>
  );
}

const Table1 = () => {

  return (
    <div className="">
      <Paper style={{ height: 400, width: '100%' }}>
      <TableVirtuoso
        data={rows}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={rowContent}
      />
    </Paper>
    </div>
  )
}

export default Table1