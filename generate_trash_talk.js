function generateTask(careerNum) {
  const task = ['加個按鈕', '畫一張圖', '週末加班']
  return task[careerNum]
}

function generatePhrase(careerNum) {
  const phrase = ['很容易', '很快', '很正常']
  return phrase[careerNum]
}

function generateTalk(career) {
  const target = ['工程師', '設計師', '創業家']
  let careerNum = -1
  switch (career) {
    case 'developer':
      careerNum = 0
      break;
    case 'designer':
      careerNum = 1
      break;
    case 'founder':
      careerNum = 2
      break;
    default:
      careerNum = -1
      break;
  }
  if (careerNum >= 0) {
    return '身為一個' + target[careerNum] + '，' + generateTask(careerNum) + '，' + generatePhrase(careerNum) + '吧！'
  }　else {
    return '請選擇一個職業'
  }
}

module.exports = generateTalk