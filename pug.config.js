const cv = require('./resume.json');

module.exports = {
  locals: {
    title: 'Ilja A. Panic',
    cv: cv,
    work: cv.work,
    education: cv.education,
  }
};
