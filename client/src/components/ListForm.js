import { Grid } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import List from "./List";
import {Link} from 'react-router-dom'
function ListForm() {
  const forms = useSelector((state) => state.form);

  return (
    <div>
      {forms.map((form) => (
        <Grid key={form._id} item xs={30} sm={6}>
          <Link to={`/list/${form._id}`}>
          <List form={form} />
          {/* {form.formName} */}
          </Link>
        
        </Grid>
      ))}
    </div>
  );
}

export default ListForm;
