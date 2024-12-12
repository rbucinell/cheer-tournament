import { TextField, TextFieldProps} from "@mui/material";
import { FC } from "react";

const StdTextField: FC<TextFieldProps> = ({ value, label, type, onChange}) => {
    return (
        <TextField fullWidth label={label} type={type} value={value} onChange={onChange} variant="outlined" className='bg-white' />
    );
};
export default StdTextField;