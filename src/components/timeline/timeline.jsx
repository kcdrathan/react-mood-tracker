import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import "./custom-timeline.scss";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "10px 16px",
    width: "140px",
    height: "140px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function CustomTimeline(props) {
  const classes = useStyles();

  return (
    <div className="list">
      {props.timeline.map((times) => (
        <Timeline align="alternate">
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography color="textSecondary">
                {new Date(times.time).toLocaleString()}
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={0} className={classes.paper}>
                <img
                  alt="emoji"
                  src={`https://emojiapi.dev/api/v1/${times.value}/128.webp`}
                />
              </Paper>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      ))}
    </div>
  );
}
