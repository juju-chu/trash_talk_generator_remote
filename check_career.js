function checkCareer(career) {
  let careerTitle = {}
  switch (career) {
    case 'developer':
      careerTitle = { developer: 'on' }
      break;
    case 'designer':
      careerTitle = { designer: 'on' }
      break;
    case 'founder':
      careerTitle = { founder: 'on' }
      break;
    default:
      break;
  }
  return careerTitle
}

module.exports = checkCareer