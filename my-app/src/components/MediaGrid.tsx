import React, { useState, useEffect } from 'react';

import { Grid } from '@material-ui/core';

import MediaCard from "./MediaCard";

interface IState {
    json: any[];
}
interface IMediaGridProps {
    SearchQuery: (string | null);
}
function MediaGrid(props: IMediaGridProps) {

    const [trivia, setTrivia] = useState("");
    const [math, setMath] = useState("");
    const [date, setDate] = useState("");



    useEffect(() => {

            fetch('http://numbersapi.com/' + props.SearchQuery + '/trivia?json')
            .then(response => response.json())
            .then(data => setTrivia(data.text))
            .catch(() => console.log("failed")
            );

            fetch('http://numbersapi.com/' + props.SearchQuery + '/math?json')
            .then(response => response.json())
            .then(data => setMath(data.text))
            .catch(() => console.log("failed")
            );

            fetch('http://numbersapi.com/' + props.SearchQuery + '/date?json')
            .then(response => response.json())
            .then(data => setDate(data.text))
            .catch(() => console.log("failed")
            );

    }, [props.SearchQuery]);

    return (
        <div>
            <Grid container className="MediaGridContainer">
                <Grid item xs={12}><MediaCard Description={trivia} /></Grid>
                <Grid item xs={12}> <MediaCard Description={math} /></Grid>
                <Grid item xs={12}><MediaCard Description={date} /></Grid>
                
               
                
            </Grid>
        </div>
    )
}

export default MediaGrid