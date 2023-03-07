import React from "react";
import { createUseStyles } from "react-jss";
import { EventType, Format } from "../types";
import Day from "./Day";

const useStyles = createUseStyles({
  schedule: {
    display: "flex",
    justifyContent: "center",
    gap: "8px 4px",
    flexWrap: "wrap",
  },
});

const events = [
  {
    format: Format.Standard,
    type: EventType.Challenge,
    startTime: 1,
  },
  {
    format: Format.Modern,
    type: EventType.Qualifier,
    startTime: 2,
  },
  {
    format: Format.Pioneer,
    type: EventType.Showcase,
    startTime: 3,
  },
  {
    format: Format.Legacy,
    type: EventType.Prelim,
    startTime: 7,
  },
  {
    format: Format.Limited,
    type: EventType.Prelim,
    startTime: 15,
  },
  {
    format: Format.Vintage,
    type: EventType.Prelim,
    startTime: 19,
  },
] as const;

type ScheduleProps = {
  formatFilter?: Format;
  eventTypeFilter?: EventType;
};

const Schedule: React.FC<ScheduleProps> = ({
  formatFilter,
  eventTypeFilter,
}) => {
  const classes = useStyles();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return (
    <div className={classes.schedule}>
      {days.map((day, index) => {
        return (
          <Day
            key={day}
            date={index}
            day={days[index]}
            events={events.slice(index)}
            formatFilter={formatFilter}
            eventTypeFilter={eventTypeFilter}
          />
        );
      })}
    </div>
  );
};

export default Schedule;
