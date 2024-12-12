import { Fragment } from 'react';
import TeamListItem from './components/home/TeamListItem';
import { Stack, Typography, List, Divider } from '@mui/material';

export default function Index() {
  return (<Stack gap={2}>
    <Fragment>
    <Typography variant='h4'>Current Tournaments</Typography>
    <List >
      <TeamListItem name="Battle at the Birdhouse" location="Penfield HighSchool" date="12/11/2024" state="Active" slug="pittsford-race-to-the-top-2025-07-10" />
    </List>
    </Fragment>
    <Typography variant='h4'>Recent Tournaments</Typography>
    <List >

      <TeamListItem name="Pittsford Race to the Top" location="Pittsford HighSchool" date="07/10/2025" state="Upcoming" slug="pittsford-race-to-the-top-2025-07-10" />
      <Divider variant="inset" component="li" />
      <TeamListItem name="Battle at the Birdhouse Jr." location="Penfield HighSchool" date="07/10/2025" state="Completed" slug="pittsford-race-to-the-top-2025-07-10" />
      <Divider variant="inset" component="li" />
      <TeamListItem name="This is Sparta" location="Sun Valley HighSchool" date="11/30/2024" state="Completed" slug="pittsford-race-to-the-top-2025-07-10" />
      <Divider variant="inset" component="li" />

    </List>
  </Stack>);
}
