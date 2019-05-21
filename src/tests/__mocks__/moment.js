//mock the moment creation

const moment = require.requireActual('moment');

export default (timestamp=0) => {
  return moment(timestamp);
}
