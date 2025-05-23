import { ListItem, ListItemButton, ListItemText, ListItemAvatar } from "@mui/material";
import { Avatar, Stack, Chip } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import GiteIcon from '@mui/icons-material/Gite';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

type TeamListItemProps = {
    name: string;
    date: string;
    location: string;
    state: string;
    slug: string;
  };

export default function TeamListItem({ name, date, location, state, slug }: TeamListItemProps) {

    function getColorByEventState( state:string ){
        switch( state ){
            case "Upcoming": return "info";
            case "Active": return "success";
            default: return "default";
        }
    }

    function getIconByEventState( state:string ){
        switch( state ){
            case "Upcoming": return <AccessTimeIcon />;
            case "Active": return <PlayCircleIcon />;
            case "Completed": return <CheckCircleIcon />;
            default: return <AccessTimeIcon />;
        }
    }
    return (
        <ListItem alignItems="flex-start">
            <ListItemButton href={`/event/${slug}`}>
                <ListItemAvatar>
                    <Avatar alt={name} src={`/api/event/${slug}/images/avatar.jpg`} />
                </ListItemAvatar>
                <ListItemText
                    primary={name}
                    secondary={
                        <Stack direction="row" spacing={1}>
                            <Chip color="primary" icon={<EventIcon/>} label={date} size="small" />
                            <Chip color="secondary" icon={<GiteIcon/>} label={location} size="small" />
                            <Chip color={getColorByEventState(state)} icon={getIconByEventState(state)} label={state} size="small" />
                        </Stack>
                    }
                />
            </ListItemButton>
        </ListItem>
    );
   
}