import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from '../themes/IntegrationsStyles';
import media from '../assets/images/media.webp';

const Integrations = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <img src={media} alt="media-logo" className={classes.Img} width="468px" height="440px" />
      </div>
      <div className={classes.textDiv}>
        <Typography className={classes.mainHeading}>Lorem Ipsum is a dummy text</Typography>
        <Typography className={classes.subText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book.
        </Typography>
      </div>
    </div>
  );
};

export default Integrations;
