"use client";
import React, { useState } from 'react';
import { Container, TextField, Button, List, ListItem, ListItemText, IconButton, Typography, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import { ItemInterface, ReactSortable } from "react-sortablejs";
import StdTextField from '@/app/components/StdTextField';

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

export default function CreateEvent() {
  const [eventName, setEventName] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [judges, setJudges] = useState<number>(0);
  const [rubric, setRubric] = useState('');
  const [rubrics, setRubrics] = useState<ItemInterface[]>(DEFUALT_RUBRIC_CATEGORIES);
  const [level, setLevel] = useState('');
  const [levels, setLevels] = useState<string[]>([]);

  const handleAddLevel = () => {
    if (level && !levels.includes(level)) {
      setLevels([...levels, level]);
      setLevel(''); // Clear the input after adding
    }
  };

  const handleRemoveLevel = (index:number) => {
    const newLevels = levels.filter((_, i) => i !== index);
    setLevels(newLevels);
  };

  const handleAddRubric = () => {
    if (rubric && !rubrics.find(r => r.name === rubric)) {
      setRubrics([...rubrics, { id: rubrics.length + 1, name: rubric }]);
      setRubric(''); // Clear the input after adding
    }
  };

  const handleRemoveRubric = (index:number) => {
    const newRubrics = rubrics.filter((_, i) => i !== index);
    setRubrics(newRubrics);
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>Create Event</Typography>
      <form>
        <Stack direction="row" spacing={2} flexGrow={1} sx={{ marginBottom: '16px' }}>
          <StdTextField label="Event Name" value={eventName} onChange={(e) => setEventName(e.target.value)} />
          <StdTextField label="Host Location" placeholder='Penfield High School' value={eventLocation} onChange={(e) => setEventLocation(e.target.value)} />

          </Stack>
        <Stack direction="row" spacing={2} flexGrow={1} sx={{ marginBottom: '16px' }}>
          <StdTextField label="Event Date" type="date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} />
          <StdTextField label="Event Time" type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
        </Stack>
        <StdTextField label="Number of Judges" type="number" value={judges} onChange={(e) => setJudges(parseInt(e.target.value))} />      
        <Typography variant="h6">Levels</Typography>

        <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
          <StdTextField label="Levels (Flag, C, B, A, Mod, JV, V)" value={level} onChange={(e) => setLevel(e.target.value)} placeholder='Enter level'/>
          <Button aria-label="add" size="small" color="success" variant="contained" onClick={handleAddLevel}>
            <AddIcon  />
          </Button>
        </div>
        
      
      <List>
        {levels.map((div, index) => (
          <ListItem key={index} 
            className='bg-purple-200 rounded flex justify-between border border-gray-300 mb-2'
            secondaryAction={
            <IconButton edge="end" aria-label="delete" onClick={() => handleRemoveLevel(index)}>
              <DeleteIcon />
            </IconButton>
          }>
            <ListItemText primary={div} />
          </ListItem>
        ))}
      </List>
        <Typography variant="h6">Rubric Categories</Typography>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
          <StdTextField label="Rubric" value={rubric} onChange={(e) => setRubric(e.target.value)} placeholder="Enter rubric" />
          <Button aria-label="add" size="small" color="success" variant="contained" onClick={handleAddRubric}>
            <AddIcon  />
          </Button>
        </div>
      
      
      <List>
      <ReactSortable list={rubrics} setList={setRubrics} animation={150}>
        {rubrics.map((div, index) => (
            <ListItem key={index} draggable className='bg-purple-200 rounded flex justify-between border border-gray-300 mb-2'
            secondaryAction={
            <IconButton edge="end" aria-label="delete" onClick={() => handleRemoveRubric(index)}>
              <DeleteIcon />
            </IconButton>
          }>
            <ListItemText primary={div.name} draggable/>
          </ListItem>
         
        ))}
         </ReactSortable>
      </List>
      </form>
      <Button aria-label="add" size="large" color="success" variant="contained" startIcon={<SaveIcon />}> Save </Button>
    </Container>
  );
}

