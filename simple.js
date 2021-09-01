/*------------------------------------*\
  # CHARACTER SORTER - SIMPLE METHOD
\*------------------------------------*/
/*
  This version asks if the character is the archetype, if they are then the name is pushed into the relevant key on a Map. 
  The order for the archetypes is from most to least likely to die.
  For certain questions, characters are either pushed or unshifted into the
*/

import prompt from 'prompt'


const characterArchetypes = [
  'black',
  'firstCharacter',
  'whore',
  'tokenMinority',
  'cheerleader',
  'jock',
  'stoner',
  'nerd',
  'goodGuy',
  'virgin',
  'protagonist'
]

const uncategorised = []

const characterMap = new Map()

for (let i = 0; i < characterArchetypes.length; i++) {
  const element = characterArchetypes[i]
  characterMap.set(element, [])
  
}

let characterName = ''

const questionName = { 
  description: 'What is the character\'s name?',
  required: true,
  name: 'response'
}
const questionBlack = { 
  name: 'response', 
  pattern: /([yn])+/i,
  message: 'valid response must be "y" for yes or "n" for no',
  description: 'Is the character Black? (Y/N)',
  required: true
}
const questionToken = { 
  name: 'response', 
  pattern: /([yn])+/i,
  message: 'valid response must be "y" for yes or "n" for no',
  description: 'Is the character from a minority group? (Y/N)',
  required: true
}
const questionFirstChar = { 
  name: 'response', 
  pattern: /([yn])+/i,
  message: 'valid response must be "y" for yes or "n" for no',
  description: 'Is the character the first character on screen? (Y/N)',
  required: true
}
const questionGender = { 
  name: 'response', 
  pattern: /([yn])+/i,
  message: 'valid response must be "y" for yes or "n" for no',
  description: 'Is the character the female? (Y/N)',
  required: true
}
const questionVirgin = { 
  name: 'response', 
  pattern: /([yn])+/i,
  message: 'valid response must be "y" for yes or "n" for no',
  description: 'Is the character a virgin? (Y/N)',
  required: true
}
const questionWhore = { 
  name: 'response', 
  pattern: /([yn])+/i,
  message: 'valid response must be "y" for yes or "n" for no',
  description: 'Is the character a sexually promiscuous? (Y/N)',
  required: true
}
const questionStoner = { 
  name: 'response', 
  pattern: /([yn])+/i,
  message: 'valid response must be "y" for yes or "n" for no',
  description: 'Does the character use drugs? (Y/N)',
  required: true
}
const questionProtagonist = { 
  name: 'response', 
  pattern: /([yn])+/i,
  message: 'valid response must be "y" for yes or "n" for no',
  description: 'Is the character the protagonist? (Y/N)',
  required: true
}
const questionNerd = { 
  name: 'response', 
  pattern: /([yn])+/i,
  message: 'valid response must be "y" for yes or "n" for no',
  description: 'Is the character a nerd? (Y/N)',
  required: true
}
const questionSporty = { 
  name: 'response', 
  pattern: /([yn])+/i,
  message: 'valid response must be "y" for yes or "n" for no',
  description: 'Is the character either a member of a sports team, or in a relationship with a member of a sports team? (Y/N)',
  required: true
}
const questionContinue = { 
  name: 'response', 
  pattern: /([yn])+/i,
  message: 'valid response must be "y" for yes or "n" for no',
  description: 'Would you like to add another character? (Y/N)',
  required: true
}
const questions = () => {
  prompt.start()
  prompt.get([questionName], (err, { response }) => {
    const characterName = response
    prompt.get([questionBlack], (err, { response }) => {
      if (response.toLowerCase() === 'y') {
        characterMap.get('black').push(characterName)
        nextCharacter()
      } else {
        prompt.get([questionFirstChar], (err, { response }) => {
          if (response.toLowerCase() === 'y') {
            characterMap.get('firstCharacter').push(characterName)
            nextCharacter()
          } else {
            prompt.get([questionProtagonist], (err, { response }) => {
              if (response.toLowerCase() === 'y') {
                characterMap.get('protagonist').push(characterName)
                nextCharacter()
              } else {
                prompt.get([questionToken], (err, { response }) => {
                  if (response.toLowerCase() === 'y') {
                    characterMap.get('tokenMinority').push(characterName)
                    nextCharacter()
                  } else {
                    prompt.get([questionGender], (err, { response }) => {
                      if (response.toLowerCase() === 'y') {
                        prompt.get([questionWhore], (err, { response }) => {
                          if (response.toLowerCase() === 'y') {
                            characterMap.get('firstCharacter').unshift(characterName)
                            nextCharacter()
                          } else {
                            prompt.get([questionVirgin], (err, { response }) => {
                              if (response.toLowerCase() === 'y') {
                                characterMap.get('firstCharacter').unshift(characterName)
                                nextCharacter()
                              } else {
                                prompt.get([questionStoner], (err, { response }) => {
                                  if (response.toLowerCase() === 'y') {
                                    characterMap.get('stoner').unshift(characterName)
                                    nextCharacter()
                                  } else {
                                    prompt.get([questionSporty], (err, { response }) => {
                                      if (response.toLowerCase() === 'y') {
                                        characterMap.get('cheerleader').push(characterName)
                                        nextCharacter()
                                      } else {
                                        prompt.get([questionNerd], (err, { response }) => {
                                          if (response.toLowerCase() === 'y') {
                                          characterMap.get('nerd').unshift(characterName)
                                          nextCharacter()
                                          } else {
                                            uncategorised.push(characterName)
                                            nextCharacter()
                                          }
                                        })
                                      }
                                    })
                                  }
                                })
                              }
                            })
                          }
                        })
                      } else {
                        prompt.get([questionWhore], (err, { response }) => {
                          if (response.toLowerCase() === 'y') {
                            characterMap.get('firstCharacter').push(characterName)
                            nextCharacter()
                          } else { 
                            prompt.get([questionStoner], (err, { response }) => {
                              if (response.toLowerCase() === 'y') {
                                characterMap.get('stoner').unshift(characterName)
                                nextCharacter()
                              } else {
                                prompt.get([questionSporty], (err, { response }) => {
                                  if (response.toLowerCase() === 'y') {
                                    characterMap.get('jock').push(characterName)
                                    nextCharacter()
                                  } else {
                                    prompt.get([questionNerd], (err, { response }) => {
                                      if (response.toLowerCase() === 'y') {
                                        characterMap.get('nerd').push(characterName)
                                        nextCharacter()
                                      } else {
                                        uncategorised.push(characterName)
                                        nextCharacter()
                                      }
                                    })
                                  }
                                })
                              }
                            })
                          }
                        })
                      }
                    })
                  }
                })
              }
            })
          }
        })
      }
    })
  })
}


const nextCharacter = () => {
  prompt.get([questionContinue], (err, { response }) => {
    if (response.toLowerCase() === 'y') questions()
    else {
      console.log('Death order', Array.from(characterMap.values()).filter(group => group.length > 0).flat().join(' => '))
      console.log('status unknown', uncategorised.join(', '))
    }
  })
}

questions()






  




