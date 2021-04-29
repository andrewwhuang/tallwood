/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Redirect } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { AccountCircle, Assessment, Report} from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>

<ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Information"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Report}
          dropdownList={[
            <Link to="/what-page" className={classes.dropdownLink}>
              What We Do
            </Link>,
            <Link to="/team-page" className={classes.dropdownLink}>
              Our Team
            </Link> 
          ]}
        />
      </ListItem>

      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Equity Research"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Report}
          dropdownList={[
            <Link to="/research-page" className={classes.dropdownLink}>
              Research Reports
            </Link>,
            <Link to="/legal-page" className={classes.dropdownLink}>
              Legal Disclaimer
            </Link> 
          ]}
        />
      </ListItem>

      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Join Tallwood Holdings"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Assessment}
          dropdownList={[
            <Link to="/hiring-page" className={classes.dropdownLink}>
              Analyst Hiring
            </Link>,
            <Link to="/stakeholder-page" className={classes.dropdownLink}>
              Become a Stakeholder
            </Link>
          ]}
        />
      </ListItem>

      <ListItem className={classes.listItem}>
        {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}
        <Tooltip
          id="Linkedin"
          title="Connect with us!"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://www.linkedin.com/company/tallwood-holdings-investment-group/"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-linkedin"} />
          </Button>
        </Tooltip>
      </ListItem>

    </List>
  );
}


//

