import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
var decode = require('unescape');

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    padding: 1,
    marginTop: 15

  },
});

function ImgMediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={props.dog.photos.length > 0 ? props.dog.photos[0]['medium'] : 'https://www.onlygfx.com/wp-content/uploads/2017/12/dog-silhouette-1.png'}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.dog.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {decode(props.dog.description)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
            <a href={props.dog.url} target="_blank">Learn More</a>      
        </Button>
      </CardActions>
    </Card>
  );
}

export default ImgMediaCard;