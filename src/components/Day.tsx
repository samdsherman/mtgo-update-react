import React from "react";
import { createUseStyles } from "react-jss";
import classNames from "classnames";
import { EventType, Format } from "../types";

const useStyles = createUseStyles({
  legend: {
    border: "1px solid",
    borderRadius: "15px",
    padding: "4px 12px",
  },
  day: {
    border: "1px solid",
    minWidth: "280px",
  },
  weekend: {
    "&, & $legend": {
      borderColor: "blue",
    },
  },
  challenge: {
    color: "red",
  },
  prelim: {
    color: "black",
  },
  qualifier: {
    color: "green",
  },
});

type Event = {
  format: Format;
  type: EventType;
  startTime: number;
};

type DayProps = {
  date: number;
  day: string;
  events: Event[];
  formatFilter?: Format;
  eventTypeFilter?: EventType;
};

const Day: React.FC<DayProps> = ({
  date,
  day,
  events,
  formatFilter,
  eventTypeFilter,
}) => {
  const classes = useStyles();
  let filteredEvents = events;
  if (formatFilter) {
    filteredEvents = filteredEvents.filter(
      (event) => event.format === formatFilter
    );
  }
  if (eventTypeFilter) {
    filteredEvents = filteredEvents.filter(
      (event) => event.type === eventTypeFilter
    );
  }
  return (
    <fieldset
      className={classNames(classes.day, {
        [classes.weekend]: day === "Saturday" || day === "Sunday",
      })}
    >
      <legend className={classes.legend}>
        {day} {date}
      </legend>
      {filteredEvents.map((event) => {
        return (
          <div
            key={`${event.format}${event.type}${event.startTime}`}
            className={classNames({
              [classes.challenge]:
                event.type === "Challenge" || event.type === "Showcase",
              [classes.prelim]: event.type === "Prelim",
              [classes.qualifier]: event.type === "Qualifier",
            })}
          >
            {event.startTime}
            {event.startTime < 12 ? "am" : "pm"} {event.format} {event.type}
          </div>
        );
      })}
    </fieldset>
  );
};

export default Day;
