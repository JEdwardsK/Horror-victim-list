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
const characterMap = new Map()

for (let i = 0; i < characterArchetypes.length; i++) {
  const element = characterArchetypes[i]
  characterMap.set(element, [])
  
}

// contains characters that answer  'N' to all asked questions, resulting in not appearing in Map
const notSorted = []



const questionName = { 
  description: 'What is the character\'s name?',
  required: true,
  name: 'response'
}

const questionConstructor = question => {
  return {
    name: 'response', 
    pattern: /([yn])+/i,
    message: 'valid response must be "y" for yes or "n" for no',
    description: `${question} (Y/N)`,
    required: true
  }
}

const questionBlack = questionConstructor('Is the character Black?')
const questionFirstChar = questionConstructor('Is the character the first character on screen?')
const questionWhore = questionConstructor('Is the character a sexually promiscuous?')
const questionToken = questionConstructor('Is the character from a minority group?')
const questionGender = questionConstructor('Is the character the female?')
const questionSporty = questionConstructor('Is the character either a member of a sports team, or in a relationship with a member of a sports team?')
const questionStoner = questionConstructor('Does the character use drugs?')
const questionNerd = questionConstructor('Is the character a nerd?')
const questionVirgin = questionConstructor('Is the character a virgin?')
const questionProtagonist = questionConstructor('Is the character the protagonist?')
const questionContinue = questionConstructor('Would you like to add another character?')

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
                                            notSorted.push(characterName)
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
                                        notSorted.push(characterName)
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
      console.log('status unknown', notSorted.join(', '))
    }
  })
}

questions()