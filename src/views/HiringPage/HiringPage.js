import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ResearchAndHiring from "../LandingPage/Sections/ResearchAndHiring.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function HiringPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Tallwood Holdings Investment Group"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/bg-finance.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}> Now Hiring Analysts</h1>
              <h4>
                
                Tallwood Holdings Investment Group is currently looking
                for two student analysts to join the group. 

                

              </h4>
              <br />
              <Button
                color="twitter"
                size="lg"
                href="https://docs.google.com/document/d/11iWaGbTn-oSNsirq5kgo3ktUS70KhxmfxVMYFDLbDbI/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hiring Package
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ResearchAndHiring />
        </div>
      </div>
      <Footer />
    </div>
  );
}