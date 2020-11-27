import moment from 'moment';


const MINUTES_IN_HOUR = 60;


const formatCommentDate = (date) => {
  return moment(date).format(`MMMM DD, YYYY`);
};

const getRunTimeMinutes = (runtime) => runtime % MINUTES_IN_HOUR;

const getRunTimeHours = (runtime) => Math.floor(runtime / MINUTES_IN_HOUR);


export {
  formatCommentDate,
  getRunTimeHours,
  getRunTimeMinutes,
};
