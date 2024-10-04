export default function calculateResult(answers) {
    const scores = {
      junmai: 0,
      ginjo: 0,
      daiginjo: 0,
      nigori: 0
    }
  
    answers.forEach((answer, index) => {
      switch (index) {
        case 0: // Flavor intensity
          if (answer === 'light') {
            scores.ginjo += 1
            scores.daiginjo += 1
          } else {
            scores.junmai += 1
            scores.nigori += 1
          }
          break
        case 1: // Dry or sweet
          if (answer === 'dry') {
            scores.junmai += 1
            scores.ginjo += 1
          } else {
            scores.daiginjo += 1
            scores.nigori += 1
          }
          break
        case 2: // Fruity or savory
          if (answer === 'fruity') {
            scores.ginjo += 1
            scores.daiginjo += 1
          } else {
            scores.junmai += 1
            scores.nigori += 1
          }
          break
        case 3: // Adventurous or traditional
          if (answer === 'adventurous') {
            scores.daiginjo += 1
            scores.nigori += 1
          } else {
            scores.junmai += 1
            scores.ginjo += 1
          }
          break
        case 4: // Serving temperature
          if (answer === 'chilled') {
            scores.ginjo += 1
            scores.daiginjo += 1
          } else {
            scores.junmai += 1
            scores.nigori += 1
          }
          break
      }
    })
  
    return Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b)
  }