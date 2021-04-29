import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import research from "assets/img/research.jpg";
import hiring from "assets/img/hiring.jpg";

import styles from "assets/jss/material-kit-react/views/componentsSections/exampleStyle.js";

const useStyles = makeStyles(styles);

export default function ResearchAndHiring() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center" alignItems="stretch">
          <GridItem xs={12} sm={12} md={6}>
            <Link to="research-page" className={classes.link}>
              <img alignItems="stretch"
                src={research}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
              <Button color="facebook" size="lg" simple>
                View Research
              </Button>
            </Link>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Link to="hiring-page" className={classes.link}>
              <img alignItems="stretch"
                src={hiring}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
              <Button color="facebook" size="lg" simple>
                Student Analyst Hiring
              </Button>
            </Link>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
