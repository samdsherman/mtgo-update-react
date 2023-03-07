import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { EventType, Format } from "../types";
import Filters from "./Filters";
import Schedule from "./Schedule";

const useStyles = createUseStyles({
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    height: "100vh",
  },
  top: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header: {
    textAlign: "center",
  },
  filters: {
    width: "250px",
  },
  footer: {
    marginBottom: "20px",
  },
});

const Main: React.FC = () => {
  const classes = useStyles();
  const [format, setFormat] = useState<Format | undefined>();
  const [eventType, setEventType] = useState<EventType | undefined>();
  return (
    <div className={classes.main}>
      <div>
        <div className={classes.top}>
          <div className={classes.filters} />
          <h1 className={classes.header}>Scheduled Events on MTGO</h1>
          <div className={classes.filters}>
            <Filters
              format={format}
              setFormat={setFormat}
              eventType={eventType}
              setEventType={setEventType}
            />
          </div>
        </div>
        <Schedule formatFilter={format} eventTypeFilter={eventType} />
      </div>
      <div className={classes.footer}>
        Registering and maintaining this website isn{"'"}t free. Any{" "}
        <a href="https://www.ko-fi.com/mtgoupdate">support</a> is appreciated.
      </div>
    </div>
  );
};

export default Main;
