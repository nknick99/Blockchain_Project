import React from "react";
import { Grid } from "@material-ui/core";

// styles
import useStyles from "./styles";


// components
import mock from "./mock";
import Table from "./components/Table/Table";
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import { Typography } from "../../components/Wrappers";

export default function TypographyPage() {
  var classes = useStyles();

  return (
    <>
      <PageTitle title="Requests" />
      <Grid item xs={12}>
          <Widget
            title="Support Requests"
            upperTitle
            noBodyPadding
            bodyClass={classes.tableWidget}
          >
            <Table data={mock.table} />
          </Widget>
        </Grid>
    </>
  );
}
