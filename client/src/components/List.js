import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
} from "@material-ui/core";
// import useStyles from "./styles";

function List({ form }) {
  // const classes = useStyles()
  return (
    <Card>
      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          gutterBottom
        >
          {form.formName}
          {/* {form.queTitle} */}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default List;
