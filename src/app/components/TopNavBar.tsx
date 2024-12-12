import { Button, IconButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

import Link from "next/link";

export default function TopNavBar() {
    return (
        <div className="flex justify-between items-center p-4 bg-violet-700 text-white">
            <h1 className="text-2xl font-bold">
                <Link href="/">Cheer Tournament</Link>
            </h1>
            <div className="flex items-center">
                <Button aria-label="add" size="large" color="success" variant="contained" startIcon={<AddIcon />} > New Tournament
                </Button>
            </div>
        </div>
    );
}