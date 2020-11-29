import moment from 'moment';


const MINUTES_IN_HOUR = 60;
const MILISECONDS_IN_SECOND = 1000;


const formatCommentDate = (date) => {
  return moment(date).format(`MMMM DD, YYYY`);
};

const formatElapsedTime = (seconds) => {
  return moment
    .utc(seconds * MILISECONDS_IN_SECOND)
    .format(`HH:mm:ss`);
};

const getRunTimeMinutes = (runtime) => runtime % MINUTES_IN_HOUR;

const getRunTimeHours = (runtime) => Math.floor(runtime / MINUTES_IN_HOUR);


export {
  formatCommentDate,
  formatElapsedTime,
  getRunTimeHours,
  getRunTimeMinutes,
};
