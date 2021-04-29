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
import ProductSection from "views/LandingPage/Sections/ProductSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function WhatPage(props) {
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
              <h1 className={classes.title}> Our Story</h1>
              <h4>
                Tallwood Holdings Investment Group is a portfolio management
                limited-partnership that has attracted $XX,XXX in investment
                from our shareholders. We were founded in 2020 by like minded
                individuals looking to gain hands on experience in managing a 
                portfolio.
              </h4>
              <h4>
                Our executives range a variety of disciplines including finance,
                accounting, consulting, and computer science and are distinguished
                in their respective fields. Our portfolio currently covers the
                following industries: technology, healthcare, consumer retail,
                communication services, financial services, industrials, and 
                natural resources. 
              </h4>
              <h4>
                We create equity research and hire analysts for the maintenance
                of our portfolio.


              </h4>
              <br />
              {/* <Button
                color="danger"
                size="lg"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Watch video
              </Button> */}
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          <ResearchAndHiring />
        </div>
      </div>
      <Footer />
    </div>
  );
}