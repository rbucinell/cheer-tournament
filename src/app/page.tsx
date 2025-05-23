import TeamListItem from './components/home/TeamListItem';
import { Divider } from '@mui/material';
import {Button} from "@/components/ui/button";
import {Plus} from "lucide-react";

export default function Index() {
  
  return <div className='flex flex-col gap-2'>
    <Button>
      <Plus className="text-lg" />
      New Tournament
    </Button>
    <div>
      <h4>Current Tournaments</h4>
      <ul>
        <TeamListItem name="Battle at the Birdhouse" location="Penfield HighSchool" date="12/11/2024" state="Active" slug="penfield-batb-2025-07-10" />
      </ul>
    </div>
    <div>
      <h4>Recent Tournaments</h4>
      <ul>
        <TeamListItem name="Pittsford Race to the Top" location="Pittsford HighSchool" date="07/10/2025" state="Upcoming" slug="pittsford-rttt-2025-07-10" />
        <Divider variant="inset" component="li" />
        <TeamListItem name="Battle at the Birdhouse Jr." location="Penfield HighSchool" date="07/10/2025" state="Completed" slug="penfield-batbjr-2025-07-10" />
        <Divider variant="inset" component="li" />
        <TeamListItem name="This is Sparta" location="Sun Valley HighSchool" date="11/30/2024" state="Completed" slug="sunvalley-sparta-2025-07-10" />
        <Divider variant="inset" component="li" />
      </ul>
      </div>
  </div>;
}
