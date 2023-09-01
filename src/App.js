import { Typography, Button, IconButton, Stack, TextField, InputAdornment, Radio, RadioGroup, FormControl, FormLabel, FormControlLabel, Checkbox, FormGroup } from '@mui/material/';
import {DeleteIcon} from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';



function App() {
    const [data, setData] = useState('a');
    const [checked, setChecked] = useState(true);
    const [Language, setLanguage]= useState([]);
   
    // const handleChange = (e) => {
    //     const index = Language.indexOf(e.target.value)
    //     console.log(Language);
    //     if(index == -1) {
    //         setLanguage(...Language, e.target.value)
    //     }
    //     else
    //     {
    //         setLanguage(Language.filter((i) => i !== e.target.value))
    //     }
    // }
    const handleChange = (e) => {
        const value = e.target.value;
        if (!Language.includes(value)) {
            setLanguage([...Language, value]);
        } else {
            setLanguage(Language.filter((item) => item !== value));
        }
    }

    return (
        <div>
            <Stack direction={'row'} spacing={2} justifyContent={'center'} margin={5}>
               <FormControl>
                    <FormControl>Language</FormControl>
                    <FormGroup>
                        <FormControlLabel label='Spanish' value='Spanish' control={<Checkbox checked={Language.includes('Spanish')} onChange={handleChange} />}/> 
                        <FormControlLabel label='English' value='English' control={<Checkbox checked={Language.includes('English')} onChange={handleChange}/>}/>
                        <FormControlLabel label='Korean' value='Korean' control={<Checkbox checked={Language.includes('Korean')} onChange={handleChange} />}/>
                    </FormGroup>
               </FormControl>
            </Stack>
            <Stack direction={'row'} spacing={2} justifyContent={'center'} margin={5}>
                {Language}
            </Stack>
        </div>
    );
}

export default App;
