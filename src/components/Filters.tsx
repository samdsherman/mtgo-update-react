import React from "react";
import { EventType, Format, isEventType, isFormat } from "../types";

type FiltersProps = {
  format?: Format;
  eventType?: EventType;
  setFormat: (format: Format | undefined) => void;
  setEventType: (eventType: EventType | undefined) => void;
};

const Filters: React.FC<FiltersProps> = ({
  format,
  eventType,
  setFormat,
  setEventType,
}) => {
  return (
    <div>
      Filter by:
      <select
        value={format}
        onChange={({ target: { value } }) =>
          setFormat(isFormat(value) ? value : undefined)
        }
      >
        <option>Format</option>
        {Object.keys(Format).map((format) => (
          <option key={format} value={format}>
            {format}
          </option>
        ))}
      </select>
      <select
        value={eventType}
        onChange={({ target: { value } }) =>
          setEventType(isEventType(value) ? value : undefined)
        }
      >
        <option>Event Type</option>
        {Object.keys(EventType).map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filters;
