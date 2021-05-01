import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import andrew from "assets/img/headshots/andrew.png";
import ryan from "assets/img/headshots/ryan.jpg";
import harvey from "assets/img/headshots/harvey.png";
import victor from "assets/img/headshots/victor.jpg";
import william from "assets/img/headshots/william.jpg";
import ranger from "assets/img/headshots/ranger.png";
import nash from "assets/img/headshots/nash.jpg";
import nashDrunk from "assets/img/headshots/nashDrunk.jpg";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Here is our team</h2>
      <div>
        <GridContainer>

        <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={ryan} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Ryan Peng
                <br />
                <small className={classes.smallTitle}> Managing Director </small>
              </h4>
              <CardBody>
                <p>
                  Fourth Year Finance
                </p>
                <p className={classes.description}>
                  Industries: Industrials
                </p>
                <p className={classes.description}>
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  href = "https://www.linkedin.com/in/r-yanpeng/"
                  target = '_blank'
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={andrew} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Andrew Huang
                <br />
                <small className={classes.smallTitle}> Director </small>
              </h4>
              <CardBody>
                <p>
                  Fourth Year Business and Computer Science
                </p>
                <p className={classes.description}>
                  Industries: Technology
                </p>
                <p className={classes.description}>
                  Software Developer at Whatifi.io
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  href = "https://www.linkedin.com/in/andrewsyhuang/"
                  target = '_blank'
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={victor} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Victor Chan
                <br />
                <small className={classes.smallTitle}> Vice President </small>
              </h4>
              <CardBody>
                <p>
                  Fourth Year Accounting
                </p>
                <p className={classes.description}>
                  Industries: Natural Resources
                </p>
                <p className={classes.description}>
                  Accountant at First Mining Gold Corporation
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  href = "https://www.linkedin.com/in/victorchan1901/"
                  target = '_blank'
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={harvey} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Harvey Ying
                <br />
                <small className={classes.smallTitle}> Vice President </small>
              </h4>
              <CardBody>
                <p>
                  Fourth Year Finance
                </p>
                <p className={classes.description}>
                  Industries: Consumer Retail, Financial Institutions
                </p>
                <p className={classes.description}>
                  Finance Operations Specialist at Life Sciences British Columbia
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  href = "https://www.linkedin.com/in/harveyying/"
                  target = '_blank'
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={nashDrunk} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Nash Sebben
                <br />
                <small className={classes.smallTitle}> Vice President </small>
              </h4>
              <CardBody>
                <p>
                  Fourth Year Economics
                </p>
                <p className={classes.description}>
                  Industries: Communication Services
                </p>
                <p className={classes.description}>
                  Data Analyst at Vancouver Coastal Health
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  href = "https://www.linkedin.com/in/nash-sebben-93ba6213a/"
                  target = '_blank'
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={ranger} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Ranger Lee
                <br />
                <small className={classes.smallTitle}> Vice President </small>
              </h4>
              <CardBody>
                <p>
                  Fourth Year Finance
                </p>
                <p className={classes.description}>
                  Industries: Healthcare, Financial Services
                </p>
                <p className={classes.description}>
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  href = "https://www.linkedin.com/in/ranger-lee/"
                  target = '_blank'
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={william} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                William Hou
                <br />
                <small className={classes.smallTitle}> Vice President </small>
              </h4>
              <CardBody>
                <p>
                  Fourth Year Accounting and Real Estate
                </p>
                <p className={classes.description}>
                  Industries: Natural Resources, Healthcare
                </p>
                <p className={classes.description}>
                  Strategy Consultant at Monitor Deloitte
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  href = "https://www.linkedin.com/in/williamhou4745/"
                  target = '_blank'
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>

        </GridContainer>
      </div>
    </div>
  );
}
