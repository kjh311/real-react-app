import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import PropTypes from "prop-types";

function InfoCard(props) {
  return (
    <div>
      <Card sx={{ maxWidth: 345, padding: 2, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h5" component="div" data-testid="name">
            Name: {props.name}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            data-testid="ability"
          >
            Ability: {props.ability}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            data-testid="hitPoints"
          >
            Hit points: {props.hitPoints}
          </Typography>
        </CardContent>
      </Card>
      <br />
    </div>
  );
}

InfoCard.propTypes = {
  name: PropTypes.string.isRequired,
  ability: PropTypes.string.isRequired,
  hitPoints: PropTypes.number.isRequired,
};

InfoCard.defaultProps = {
  name: "Unknown",
  ability: "None",
  hitPoints: 0,
};

export default InfoCard;
