function generateTask(career) {
  const task = {
  developer: ['加個按鈕','加新功能','切個版', '改一點 code'],
  designer: ['畫一張圖', '改個 logo','順便幫忙設計一下','隨便換個設計'],
  founder: ['週末加班', '要能賺錢','想個 business model','找 VC 募錢']
  }
  let index = 0
  // const index = Math.floor(Math.random()*(task.career.length))
  switch (career) {
    case 'developer':
      index = Math.floor(Math.random()*(task.developer.length))
      return task.developer[index]
    case 'designer':
      index = Math.floor(Math.random()*(task.designer.length))
      return task.designer[index]
    case 'founder':
      index = Math.floor(Math.random()*(task.founder.length))
      return task.founder[index]
    default:
      return
  }
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
    return '身為一個' + target[careerNum] + '，' + generateTask(career) + '，' + generatePhrase(careerNum) + '吧！'
  }　else {
    return '請選擇一個職業'
  }
}

module.exports = generateTalk