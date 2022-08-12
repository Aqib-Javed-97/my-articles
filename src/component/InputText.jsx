import React from 'react';
import TextField from '@mui/material/TextField';

function InputText({...rest},ref) {
    return <TextField id="outlined-required" 
    {...rest} 
    sx={{
        display: "flex",
        marginBottom: "24px",
        ...rest.sx
    }}
    ref={ref}
/>
}

export default React.forwardRef(InputText);