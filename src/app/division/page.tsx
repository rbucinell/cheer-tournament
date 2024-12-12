import * as React from 'react';
import Button from '@mui/material/Button';
import Image from "next/image";
import TeamGrid from '../components/TeamGrid';
import { ItemInterface } from 'react-sortablejs';
import { Breadcrumbs, Container, IconButton, Link, Typography } from '@mui/material';
import { Home } from '@mui/icons-material';

const DEFUALT_RUBRIC_CATEGORIES: ItemInterface[] = [
  { id: 1, name: 'Motions' },
  { id: 2, name: 'Skill' },
  { id: 3, name: 'Execution' },
  { id: 4, name: 'Partner Stunts' },
  { id: 5, name: 'Pyramid' },
  { id: 6, name: 'Jumps' },
  { id: 7, name: 'Dance' },
  { id: 8, name: 'Tumbling' },
  { id: 9, name: 'Overall Effect' }
];

export default function Index() {
  return (<>
    <Breadcrumbs aria-label="breadcrumb" sx={{ display: 'flex', justifyContent: 'center' }}>
      <Link underline="hover" color="inherit" href="/">
        <IconButton  color='secondary'><Home fontSize='small' href='/' /></IconButton >
      </Link>
      <Link underline="hover" color="inherit" href="/">
        Event Name
      </Link>
      <Link underline="hover" color="inherit" href="/material-ui/getting-started/installation/" >
        Flag Level
      </Link>
      <Link underline="hover" color="textPrimary" href="/material-ui/getting-started/installation/" >
        Division
      </Link>
    </Breadcrumbs>
    <TeamGrid categories={DEFUALT_RUBRIC_CATEGORIES} />
    <TeamGrid categories={DEFUALT_RUBRIC_CATEGORIES} />
    <TeamGrid categories={DEFUALT_RUBRIC_CATEGORIES} />

      {/*<Button variant="contained">Hello World</Button>*/}
    {/* <table className="mt-2 w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            { }
            <th className="border border-gray-300 px-4 py-2">Judge</th>
            <th className="border border-gray-300 px-4 py-2">Category 1</th>
            <th className="border border-gray-300 px-4 py-2">Category 2</th>
            <th className="border border-gray-300 px-4 py-2">Category 3</th>
            <th className="border border-gray-300 px-4 py-2">Category 4</th>
            <th className="border border-gray-300 px-4 py-2">Category 5</th>
            <th className="border border-gray-300 px-4 py-2">Category 6</th>
            <th className="border border-gray-300 px-4 py-2 font-bold">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Judge 1</td>
            <td className="border border-gray-300 px-4 py-2 text-center">8</td>
            <td className="border border-gray-300 px-4 py-2 text-center">9</td>
            <td className="border border-gray-300 px-4 py-2 text-center">7</td>
            <td className="border border-gray-300 px-4 py-2 text-center">8</td>
            <td className="border border-gray-300 px-4 py-2 text-center">9</td>
            <td className="border border-gray-300 px-4 py-2 text-center">10</td>
            <td className="border border-gray-300 px-4 py-2 text-center font-bold">51</td>
          </tr>

          <tr className="bg-gray-100">
            <td className="border border-gray-300 px-4 py-2">Judge 2</td>
            <td className="border border-gray-300 px-4 py-2 text-center">9</td>
            <td className="border border-gray-300 px-4 py-2 text-center">8</td>
            <td className="border border-gray-300 px-4 py-2 text-center">9</td>
            <td className="border border-gray-300 px-4 py-2 text-center">7</td>
            <td className="border border-gray-300 px-4 py-2 text-center">8</td>
            <td className="border border-gray-300 px-4 py-2 text-center">10</td>
            <td className="border border-gray-300 px-4 py-2 text-center font-bold">51</td>
          </tr>

          <tr>
            <td className="border border-gray-300 px-4 py-2">Judge 3</td>
            <td className="border border-gray-300 px-4 py-2 text-center">8</td>
            <td className="border border-gray-300 px-4 py-2 text-center">9</td>
            <td className="border border-gray-300 px-4 py-2 text-center">10</td>
            <td className="border border-gray-300 px-4 py-2 text-center">8</td>
            <td className="border border-gray-300 px-4 py-2 text-center">7</td>
            <td className="border border-gray-300 px-4 py-2 text-center">9</td>
            <td className="border border-gray-300 px-4 py-2 text-center font-bold">51</td>
          </tr>
        </tbody>
        <tfoot>
          <tr className="bg-gray-300">
            <td colSpan={7} className="border border-gray-300 px-4 py-2 text-right font-bold">Grand Total</td>
            <td className="border border-gray-300 px-4 py-2 text-center font-bold">153</td>
          </tr>
        </tfoot>
      </table> */}
</>);}
