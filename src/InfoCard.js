import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import PropTypes from "prop-types"; // ✅ Correct place to import

export default function InfoCard({ name, ability, hitPoints }) {
  return (
    <Card sx={{ maxWidth: 345, padding: 2, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Name: {name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Ability: {ability}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Hit points: {hitPoints}
        </Typography>
      </CardContent>
    </Card>
  );
}

// ✅ Define propTypes inside the child component
InfoCard.propTypes = {
  name: PropTypes.string,
  ability: PropTypes.string,
  hitPoints: PropTypes.number,
};

// ✅ Define default props (optional)
InfoCard.defaultProps = {
  name: "Unknown",
  ability: "None",
  hitPoints: 0,
};
