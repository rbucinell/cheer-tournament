"use client";

import {
  Box,
  Chip,
  Tabs,
  Tab,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Stack,
  TextField,
  FormControl,
  InputLabel,
  FormHelperText,
  Input,
} from "@mui/material";

import {
  Event as EventIcon,
  Gite as GiteIcon,
  LocalActivity,
  LocalActivityOutlined,
  MapOutlined,
  Save,
  Share,
} from "@mui/icons-material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { useParams } from "next/navigation";
import { Clock, SquarePen } from "lucide-react";
import DivisionAwardTable from "@/app/components/awards/DivisionAwardTable";
import { ITeam } from "@/app/models/team";
import _ from "lodash";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import LoremIpsum from "@/components/util/LoremIpsum";
import dayjs from "dayjs";
import StdTextField from "@/app/components/StdTextField";
import AddIcon from "@mui/icons-material/Add";
import { ItemInterface, ReactSortable } from "react-sortablejs";
import DeleteIcon from "@mui/icons-material/Delete";

interface TabPanelProps {
  children?: React.ReactNode;
  id: string;
  index: number;
  value: number;
}

const DEFUALT_RUBRIC_CATEGORIES: ItemInterface[] = [
  { id: 1, name: "Motions" },
  { id: 2, name: "Skill" },
  { id: 3, name: "Execution" },
  { id: 4, name: "Partner Stunts" },
  { id: 5, name: "Pyramid" },
  { id: 6, name: "Jumps" },
  { id: 7, name: "Dance" },
  { id: 8, name: "Tumbling" },
  { id: 9, name: "Overall Effect" },
];

export default function EditEventPage() {
  const name = "Pittsford Race to the Top";
  const location = "Pittsford HighSchool";
  const state = "Upcoming";
  const datetime = "2022-04-17T15:30";
  const address = "1234 Penfield Ave, Penfield, PA 19070";
  const ticketInfo = "GA $5 / Students $2";
  const description = "This is a description of the event";

  const teams: ITeam[] = [
    {
      name: "Penfield Red",
      scores: [194.5],
      division: "Flag",
      group: "Flag 1",
    } as ITeam,
    {
      name: "Penfield Black",
      scores: [172],
      division: "Flag",
      group: "Flag 1",
    } as ITeam,
    {
      name: "Penfield White",
      scores: [188.25],
      division: "Flag",
      group: "Flag 1",
    } as ITeam,

    {
      name: "East Irondequoit",
      scores: [202],
      division: "Flag",
      group: "Flag 2",
    } as ITeam,
    {
      name: "Freedom Rec. Cheer",
      scores: [192.33],
      division: "Flag",
      group: "Flag 2",
    } as ITeam,
    {
      name: "Irondequoit Junior Eagles",
      scores: [185.5],
      division: "Flag",
      group: "Flag 2",
    } as ITeam,
    {
      name: "Victor",
      scores: [182],
      division: "Flag",
      group: "Flag 2",
    } as ITeam,

    {
      name: "East Irondequoit",
      scores: [194.5],
      division: "Flag",
      group: "Flag 3",
    } as ITeam,
    {
      name: "Spencerport",
      scores: [172],
      division: "Flag",
      group: "Flag 3",
    } as ITeam,

    {
      name: "Canandaigua Grey",
      scores: [202],
      division: "C Team",
      group: "C Team 1",
    } as ITeam,
    {
      name: "Spencerport",
      scores: [192.33],
      division: "C Team",
      group: "C Team 1",
    } as ITeam,
    {
      name: "Freedom Lady Liberties",
      scores: [185.5],
      division: "C Team",
      group: "C Team 1",
    } as ITeam,
  ];

  // const [judges, setJudges] = useState<number>(0);
  // const [rubric, setRubric] = useState("");
  // const [rubrics, setRubrics] = useState<ItemInterface[]>(
  //   DEFUALT_RUBRIC_CATEGORIES,
  // );
  // const [level, setLevel] = useState("");
  // const [levels, setLevels] = useState<string[]>([]);

  // const handleAddLevel = () => {
  //   if (level && !levels.includes(level)) {
  //     setLevels([...levels, level]);
  //     setLevel(""); // Clear the input after adding
  //   }
  // };

  // const handleRemoveLevel = (index: number) => {
  //   const newLevels = levels.filter((_, i) => i !== index);
  //   setLevels(newLevels);
  // };

  // const handleAddRubric = () => {
  //   if (rubric && !rubrics.find((r) => r.name === rubric)) {
  //     setRubrics([...rubrics, { id: rubrics.length + 1, name: rubric }]);
  //     setRubric(""); // Clear the input after adding
  //   }
  // };

  // const handleRemoveRubric = (index: number) => {
  //   const newRubrics = rubrics.filter((_, i) => i !== index);
  //   setRubrics(newRubrics);
  // };

  const params = useParams();
  const slugSegments = params.slug || [];
  const fullSlug =
    typeof slugSegments !== "string" ? slugSegments.join("/") : slugSegments;
  console.log(fullSlug);
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        //id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box className="p-2 flex flex-col gap-2 scroll-auto">{children}</Box>
        )}
      </div>
    );
  }

  function shareLinkWebShare() {
    if (navigator.share) {
      navigator
        .share({
          title: "Penfield High School",
          text: "Check out web.dev.",
          url: document.location.href,
        })
        .then(() => console.log("Successful share"))
        .catch((error) => console.log("Error sharing", error));
    } else {
      alert(document.location.href);
    }
  }

  return (
    <div className="container p-2 mx-auto">
      <div className="flex flex-col gap-2">
        <Stack direction="row" spacing={1} justifyContent={"space-between"}>
          <Button
            variant={"contained"}
            startIcon={<LocalActivityOutlined />}
            aria-label="Back to Event"
            href="https://maps.app.goo.gl/4wPnqE5sBp3MKYMy9"
          >
            Back to Event
          </Button>
          <Button
            color={"success"}
            variant={"contained"}
            endIcon={<Save />}
            aria-label="save button"
            onClick={shareLinkWebShare}
          >
            Save
          </Button>
        </Stack>

        <Box className="border-b  w-full">
          <Tabs
            value={value}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Details" {...a11yProps(0)} />
            <Tab label="Configure" {...a11yProps(2)} />
            <Tab label="Roster" {...a11yProps(1)} />
            <Tab label="Schedule" {...a11yProps(2)} />
            <Tab label="Scores" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <CustomTabPanel id="details-tab" value={value} index={0}>
          <Stack direction="column" spacing={4}>
            <FormControl variant="standard">
              <InputLabel htmlFor="nameInput">Event Name</InputLabel>
              <Input
                id="nameInput"
                defaultValue={name}
                aria-describedby="event-name-input-helper-text"
              />
              {/*<FormHelperText id="address-input-helper-text">Address</FormHelperText>*/}
            </FormControl>

            <FormControl variant="standard">
              <InputLabel htmlFor="locationInput">Location</InputLabel>
              <Input
                id="locationInput"
                defaultValue={location}
                aria-describedby="location-input-helper-text"
              />
            </FormControl>

            <FormControl variant="standard">
              <InputLabel htmlFor="addressInput">Address</InputLabel>
              <Input
                id="addressInput"
                defaultValue={address}
                aria-describedby="address-input-helper-text"
              />
            </FormControl>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DateTimePicker", "DateTimePicker"]}>
                <DateTimePicker
                  label="Date and Start Time"
                  defaultValue={dayjs(datetime)}
                />
              </DemoContainer>
            </LocalizationProvider>

            <FormControl variant="standard">
              <InputLabel htmlFor="ticketInfoInput">Ticket Info</InputLabel>
              <Input
                id="ticketInfoInput"
                defaultValue={ticketInfo}
                aria-describedby="ticket-info-input-helper-text"
              />
            </FormControl>

            <FormControl variant="standard">
              <FormHelperText id="description-input-helper-text">
                Short Description of the Event
              </FormHelperText>
              <TextField
                multiline
                rows={4}
                id="descriptionInput"
                defaultValue={
                  description || "This is a description of the event"
                }
                aria-describedby="description-input-helper-text"
              />
            </FormControl>
          </Stack>
        </CustomTabPanel>
        <CustomTabPanel id="configure-tab" value={value} index={1}>
          {/*  <Stack direction="column" spacing={4}>
            <div>
              <Typography variant="h6">Rubric Categories</Typography>
              <div
                style={{ display: "flex", gap: "8px", marginBottom: "16px" }}
              >
                <StdTextField
                  label="Rubric"
                  value={rubric}
                  onChange={(e) => setRubric(e.target.value)}
                  placeholder="Enter rubric"
                />
                <Button
                  aria-label="add"
                  size="small"
                  color="success"
                  variant="contained"
                  onClick={handleAddRubric}
                >
                  <AddIcon />
                </Button>
              </div>
              <List>
                <ReactSortable
                  list={rubrics}
                  setList={setRubrics}
                  animation={150}
                >
                  {rubrics.map((div, index) => (
                    <ListItem
                      key={index}
                      draggable
                      className="bg-purple-200 rounded flex justify-between border border-gray-300 mb-2"
                      secondaryAction={
                        <IconButton
                          edge="end"
                          aria-label="delete"
                          onClick={() => handleRemoveRubric(index)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      }
                    >
                      <ListItemText primary={div.name} draggable />
                    </ListItem>
                  ))}
                </ReactSortable>
              </List>
            </div>

            <FormControl variant="standard">
              <InputLabel htmlFor="locationInput">Location</InputLabel>
              <Input
                id="locationInput"
                defaultValue={location}
                aria-describedby="location-input-helper-text"
              />
            </FormControl>

            <FormControl variant="standard">
              <InputLabel htmlFor="addressInput">Address</InputLabel>
              <Input
                id="addressInput"
                defaultValue={address}
                aria-describedby="address-input-helper-text"
              />
            </FormControl>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DateTimePicker", "DateTimePicker"]}>
                <DateTimePicker
                  label="Date and Start Time"
                  defaultValue={dayjs(datetime)}
                />
              </DemoContainer>
            </LocalizationProvider>

            <FormControl variant="standard">
              <InputLabel htmlFor="ticketInfoInput">Ticket Info</InputLabel>
              <Input
                id="ticketInfoInput"
                defaultValue={ticketInfo}
                aria-describedby="ticket-info-input-helper-text"
              />
            </FormControl>

            <FormControl variant="standard">
              <FormHelperText id="description-input-helper-text">
                Short Description of the Event
              </FormHelperText>
              <TextField
                multiline
                rows={4}
                id="descriptionInput"
                defaultValue={
                  description || "This is a description of the event"
                }
                aria-describedby="description-input-helper-text"
              />
            </FormControl>
          </Stack> */}
        </CustomTabPanel>
        <CustomTabPanel
          id="roster-tab"
          value={value}
          index={2}
        ></CustomTabPanel>
        <CustomTabPanel id="schedule-tab" value={value} index={3}>
          <div className="flex flex-row gap-1 justify-end">
            <Clock />
            {new Date().toLocaleTimeString()}
          </div>
          <div
            id="schedule"
            className="border border-black rounded-lg overflow-y-scroll"
          >
            <Table size="small" className="" aria-label="simple table">
              <TableHead className="bg-purple-300">
                <TableRow>
                  <TableCell>Team Name</TableCell>
                  <TableCell>Time</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell className="text-gray-600">Penfield Red</TableCell>
                  <TableCell className="text-gray-600">1:00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Penfield Black</TableCell>
                  <TableCell>1:05</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Penfield Black</TableCell>
                  <TableCell>1:10</TableCell>
                </TableRow>
              </TableBody>
              <TableHead className="bg-purple-300 p-0 col-span-2">
                <TableRow className="p-0">
                  <TableCell>Break</TableCell>
                  <TableCell className="flex flex-row text-sm">
                    <Clock />
                    <span>15mins</span>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Penfield Black</TableCell>
                  <TableCell>1:25</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-gray-600">Penfield Red</TableCell>
                  <TableCell className="text-gray-600">1:00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Penfield Black</TableCell>
                  <TableCell>1:05</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Penfield Black</TableCell>
                  <TableCell>1:10</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-gray-600">Penfield Red</TableCell>
                  <TableCell className="text-gray-600">1:00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Penfield Black</TableCell>
                  <TableCell>1:05</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Penfield Black</TableCell>
                  <TableCell>1:10</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-gray-600">Penfield Red</TableCell>
                  <TableCell className="text-gray-600">1:00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Penfield Black</TableCell>
                  <TableCell>1:05</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Penfield Black</TableCell>
                  <TableCell>1:10</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CustomTabPanel>
        <CustomTabPanel id="rankings-tab" value={value} index={4}>
          {_.uniq(_.map(teams, "division")).map((division) => {
            return (
              <DivisionAwardTable
                key={division}
                division={division}
                teams={teams.filter((t) => t.division === division)}
              />
            );
          })}
        </CustomTabPanel>
      </div>
    </div>
  );
}
