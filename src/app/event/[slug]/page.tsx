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
    Stack
} from '@mui/material';
import {Event as EventIcon, Gite as GiteIcon, MapOutlined, Share} from "@mui/icons-material";
import { useParams } from 'next/navigation';
import {Clock, SquarePen} from "lucide-react";
import DivisionAwardTable from "@/app/components/awards/DivisionAwardTable";
import {ITeam} from "@/app/models/team";
import _ from "lodash";
import Button from "@mui/material/Button";
import React from "react";
import LoremIpsum from "@/components/util/LoremIpsum";

interface TabPanelProps {
    children?: React.ReactNode;
    id: string;
    index: number;
    value: number;
}

export default function EventPage() {
    const name="Pittsford Race to the Top";
    const location="Pittsford HighSchool";
    const state="Upcoming";
    const date="07/10/2025";
    const time="12:00pm";
    
    const teams:ITeam[] = [
        {name:"Penfield Red",               scores:[194.5],    division:'Flag',    group:'Flag 1'} as ITeam,
        {name:"Penfield Black",             scores:[172],      division:'Flag',    group:'Flag 1'} as ITeam,
        {name:"Penfield White",             scores:[188.25],   division:'Flag',    group:'Flag 1'} as ITeam,

        {name:"East Irondequoit",           scores:[202],      division:'Flag',    group:'Flag 2'} as ITeam,
        {name:"Freedom Rec. Cheer",         scores:[192.33],   division:'Flag',    group:'Flag 2'} as ITeam,
        {name:"Irondequoit Junior Eagles",  scores:[185.5],    division:'Flag',    group:'Flag 2'} as ITeam,
        {name:"Victor",                     scores:[182],      division:'Flag',    group:'Flag 2'} as ITeam,

        {name:"East Irondequoit",           scores:[194.5],    division:'Flag',    group:'Flag 3'} as ITeam,
        {name:"Spencerport",                scores:[172],      division:'Flag',    group:'Flag 3'} as ITeam,

        {name:"Canandaigua Grey",           scores:[202],      division:'C Team',  group:'C Team 1'} as ITeam,
        {name:"Spencerport",                scores:[192.33],   division:'C Team',  group:'C Team 1'} as ITeam,
        {name:"Freedom Lady Liberties",     scores:[185.5],    division:'C Team',  group:'C Team 1'} as ITeam,
    ]
    
    
    const params = useParams();
    const slugSegments = params.slug || [];
    const fullSlug = typeof slugSegments !== "string" ? slugSegments.join('/') : slugSegments;
    console.log( fullSlug )
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    function a11yProps(index: number) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
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
                {value === index && <Box className="p-2 flex flex-col gap-2 scroll-auto">{children}</Box>}
            </div>
        );
    }


    function shareLinkWebShare() {
        if (navigator.share) {
            navigator.share({
                title: 'Penfield High School',
                text: 'Check out web.dev.',
                url: document.location.href,
            })
                .then(() => console.log('Successful share'))
                .catch((error) => console.log('Error sharing', error));
        } else{
            alert( document.location.href)
        }
    }

    return (
        <div className="container p-2 mx-auto">
            <div className="flex flex-col gap-2">
                <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">{name}
                    <IconButton href={`${fullSlug}/edit`}><SquarePen></SquarePen></IconButton>
                </h1>

                <Box className="border-b  w-full">
                    <Tabs value={value} variant={'fullWidth'} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Details"  {...a11yProps(0)} />
                        <Tab label="Schedule" {...a11yProps(1)} />
                        <Tab label="Awards"   {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <CustomTabPanel id="details-tab" value={value} index={0}>
                    <div className="flex flex-row gap-2 justify-center">
                        <Card variant="outlined" sx={{}}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image="/cheer_banner.jpg"
                                title="Default Cheer Banner"
                            />
                            <CardContent>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    <LoremIpsum p={2} />
                                </Typography>
                                <List dense={true}>
                                    <ListItem><ListItemText  primary={`Where: ${location}`}/></ListItem>
                                    <ListItem><ListItemText  primary={`When: ${date} - ${time}`}/></ListItem>
                                    <ListItem><ListItemText  primary="Tickets: $5 ( $2 Students)"/></ListItem>
                                </List>
                                
                            </CardContent>
                            <CardActions>
                                <Stack className="w-full" direction="row" spacing={1} justifyContent="space-between" >
                                    <Stack className="w-full" direction="row" spacing={1} >
                                        <IconButton size={"small"} aria-label="Map Link" href="https://maps.app.goo.gl/4wPnqE5sBp3MKYMy9">
                                            <MapOutlined /><small>Map</small>
                                        </IconButton>
                                        <IconButton size={"small"}  aria-label="share" onClick={shareLinkWebShare}>
                                            <Share /><small>Share</small>
                                        </IconButton>
                                    </Stack>
                                    <Chip className="self-center" color="secondary" icon={<GiteIcon/>} label={state} size="small" />
                                </Stack>
                            </CardActions>
                        </Card>
                    </div>
                </CustomTabPanel>
                <CustomTabPanel id="schedule-tab" value={value} index={1}>
                    <div className="flex flex-row gap-1 justify-end"><Clock/>{new Date().toLocaleTimeString()}</div>
                    <div id="schedule" className="border border-black rounded-lg overflow-y-scroll" >
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
                                    <TableCell className="flex flex-row text-sm"><Clock/><span>15mins</span></TableCell>
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
                <CustomTabPanel id="rankings-tab" value={value} index={2}>
                    { _.uniq(_.map(teams, 'division')).map( division => {
                        return <DivisionAwardTable key={division} division={division} teams={teams.filter( t => t.division === division)} />
                    })}
                </CustomTabPanel>
                
                
            </div>
        </div>
    );
}