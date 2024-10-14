import { cronJobs } from "convex/server";
import { internal } from "./_generated/api";

const crons = cronJobs();

crons.monthly(
  "delete any old files marked for deletion",
  { day: 1, hourUTC: 16, minuteUTC: 0 },
  internal.files.deleteAllFiles
);

export default crons;