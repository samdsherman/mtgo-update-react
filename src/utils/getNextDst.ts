import moment, { Moment } from "moment-timezone";

const getNextDst = (date: Moment = moment(new Date())): Moment | undefined => {
  const wotcTime = date
    .tz("America/Los_Angeles")
    .hours(0)
    .minutes(0)
    .seconds(0)
    .milliseconds(0);
  const yearFromNow = wotcTime.clone().add(1, "year");
  const wotcTz = wotcTime.format("z");
  const future = wotcTime.clone().add(1, "day");
  while (future.format("z") === wotcTz) {
    future.add(1, "day");
    if (future.isAfter(yearFromNow)) {
      return undefined;
    }
  }
  const userFuture = future.clone().tz(moment.tz.guess());
  const afterOffset = userFuture.format("z");
  const beforeOffset = userFuture.add(-1, "day").format("z");
  if (afterOffset === beforeOffset) {
    future.add(-1, "day");
    future.hour(2);
    future.tz(moment.tz.guess());
    return future;
  }
};

export default getNextDst;
