enum EventType {
  Qualifier = "Qualifier",
  Challenge = "Challenge",
  Prelim = "Prelim",
  Showcase = "Showcase",
}

export const isEventType = (value: unknown): value is EventType => {
  return Object.values(EventType).includes(value as EventType);
};

export default EventType;
