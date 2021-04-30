import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import { AssessmentOutlined, Money, MoneyOff, MoneyOffOutlined, MoneyRounded, MoneyTwoTone } from "@material-ui/icons";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>What we do</h2>
          <h5 className={classes.description}>
            Our group directly manages and executes orders on our portfolio,
            and conduct periodic analyses of our stocks, as well as potential,
            buys in our executives' respective industries.
          </h5>
          <h5 className={classes.description}>
            We break down our operations into three main components.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Equity Research"
              description="Our analysts are highly knowledgable in their respective sectors and produce equity reports to highlight potential investment opportunities."
              icon={AssessmentOutlined}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Portfolio Management"
              description="Our executives oversee the portfolio and makes decisions off of its performance."
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Attract Investment"
              description="We attract capital based off of our high performing fund, and do not take any commission."
              icon={MoneyRounded}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
