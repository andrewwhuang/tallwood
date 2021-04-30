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
                <small className={classes.smallTitle}> President </small>
              </h4>
              <CardBody>
                <p>
                  Fourth Year Finance
                </p>
                <p className={classes.description}>
                  Industries: Consumer Retail, Financial Services
                </p>
                <p className={classes.description}>
                  Insert Placement
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
                <small className={classes.smallTitle}> Vice President </small>
              </h4>
              <CardBody>
                <p>
                  Fourth Year Business and Computer Science
                </p>
                <p className={classes.description}>
                  Industries: Technology, Telecommunications
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
                <small className={classes.smallTitle}>Account Manager</small>
              </h4>
              <CardBody>
                <p>
                  Fourth Year Accounting
                </p>
                <p className={classes.description}>
                  Industries: Natural Resources, Commodities
                </p>
                <p className={classes.description}>
                  Accountant at First Mining Gold Corp
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
                <small className={classes.smallTitle}> Account Something </small>
              </h4>
              <CardBody>
                <p>
                  Fourth Year Finance
                </p>
                <p className={classes.description}>
                  Industries: Consumer Retail
                </p>
                <p className={classes.description}>
                  Insert Placement
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
                <img src={nash} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Nash Sebben
                <br />
                <small className={classes.smallTitle}> Lead Analyst </small>
              </h4>
              <CardBody>
                <p>
                  Fifth Year Economics
                </p>
                <p className={classes.description}>
                  Industries: TBD
                </p>
                <p className={classes.description}>
                  Dancer at Boy Toy NightClub
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
                <small className={classes.smallTitle}> Powerlifter </small>
              </h4>
              <CardBody>
                <p>
                  Fourth Year Finance
                </p>
                <p className={classes.description}>
                  Industries: TBD
                </p>
                <p className={classes.description}>
                  Professional Simp
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
                William Hoe
                <br />
                <small className={classes.smallTitle}> Parking in the teacher stall </small>
              </h4>
              <CardBody>
                <p>
                  Fourth Year Finance
                </p>
                <p className={classes.description}>
                  Industries: TBD
                </p>
                <p className={classes.description}>
                  Consultant at Deloitte
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
