import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(() => ({
    container: {
        boxShadow: 'none',
    }

}));

interface IMediaCardProps {
    Description: string | undefined;
}

function MediaCard(props: IMediaCardProps) {
    const classes = useStyles();

    return (
        <div>
            <Card className={classes.container}>
                <CardActionArea>
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p" className="MediaCardDescription">
                            {props.Description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}

export default MediaCard