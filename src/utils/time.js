const MINUTES_IN_HOUR = 60;


const getRunTimeMinutes = (runtime) => runtime % MINUTES_IN_HOUR;
const getRunTimeHours = (runtime) => Math.floor(runtime / MINUTES_IN_HOUR);


export {
  getRunTimeHours,
  getRunTimeMinutes,
};
