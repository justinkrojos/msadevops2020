import React, {useState} from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

// @ts-ignore
import IUserInput from "./common/Interfaces.ts";

const useStyles = makeStyles(() => ({
    searchBar: {
        textAlign: 'center',
        background: 'white',
        padding: '10px',
        borderRadius: '5px',
        margin: '30px auto',
        width: '500px',
    },
    textSearch: {
        width: '100%',

    },

    button: {
        width: '100%',
        height: '100%',
    }

}));

interface ISearchBarProps{
    SetUserInput: (a: IUserInput) => void;
}

function SearchBar(props: ISearchBarProps) {
    const classes = useStyles();

    const [SearchQuery, setSearchQuery] = useState<string | null>("");
    const handleSearchQueryChange = (s: string | null) =>{
        setSearchQuery(s);          
    }

    const [HasFocus, setHasFocus] = useState<boolean>(false);

    const handleSubmit = () => {
        console.log(SearchQuery);

        if (SearchQuery?.length !== 0 && SearchQuery !== null && SearchQuery !== "") {
            let UserInput: IUserInput = {
                SearchQuery: SearchQuery
            }
            props.SetUserInput(UserInput);
        } else {
            setHasFocus(true);
        }
    }

    return  (
    <div >
        <Grid container spacing={0} className={classes.searchBar}>
            <Grid item xs={9} justify="flex-end">
                <TextField
                    required
                    className={classes.textSearch}
                    id="outlined-required"
                    label="Enter your favourite number"
                    variant="outlined"
                    error={HasFocus && SearchQuery === ""}
                    onClick={() => setHasFocus(true)}
                    value={SearchQuery}
                    onChange={e => handleSearchQueryChange(e.target.value)}
                />
            </Grid>
            <Grid item xs={3} >
                <Button className={classes.button} variant="contained" onClick={handleSubmit}>
                    Submit
                </Button>
            </Grid>
        </Grid>
    </div>
    )

};


export default SearchBar;
