import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { deleteBook } from '../../Redux/reducers/booksReducer';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { Button } from '@material-ui/core';
import { adminSelector } from '../../Redux/selectors/adminSelector';

const useStyles = makeStyles({
  root: {
    maxWidth: 280,
    maxHeight: '70%',
    marginBottom: 24,
  },
  media: {
    height: 140,
  },
});

const BookCard = ({ title, description, author, image, id }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const removeBook = id => {
    dispatch(deleteBook(id));
  };
  const isAdminLoggedIn = useSelector(adminSelector);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={image} title="Contemplative Reptile" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {author}
          </Typography>
        </CardContent>
      </CardActionArea>
      {isAdminLoggedIn ? (
        <Button onClick={() => removeBook(id)}>
          <DeleteForeverIcon />
        </Button>
      ) : null}
    </Card>
  );
};

export default BookCard;
