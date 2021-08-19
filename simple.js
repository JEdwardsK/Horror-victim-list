/*------------------------------------*\
  # CHARACTER SORTER - SIMPLE METHOD
\*------------------------------------*/
/*
  This version asks if the character is the archetype, if they are then the name is pushed into the relevant key on a object or map
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
  'protagonist'
]

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
const questionContinue = { 
  name: 'response', 
  pattern: /([yn])+/i,
  message: 'valid response must be "y" for yes or "n" for no',
  description: 'Would you like to add another character?',
  required: true
}
const questions = () => {
  prompt.start()
  prompt.get([questionName], (err, { response }) => {
    characterName = response
    prompt.get([questionBlack], (err, { response }) => {
      if (response.toLowerCase() === 'y') {
        characterMap.get('black').push(characterName)
        nextCharacter()
      } else{
        prompt.get([questionFirstChar], (err, { response }) => {
          if (response.toLowerCase() === 'y') {
            characterMap.get('firstCharacter').push(characterName)
            nextCharacter()
          } else{
            prompt.get([questionProtagonist], (err, { response }) => {
              if (response.toLowerCase() === 'y') {
                characterMap.get('protagonist').push(characterName)
                nextCharacter()
              } else{
                prompt.get([questionToken], (err, { response }) => {
                  if (response.toLowerCase() === 'y') {
                    characterMap.get('tokenMinority').push(characterName)
                    nextCharacter()
                  } else{
                    prompt.get([questionGender], (err, { response }) => {
                      if (response.toLowerCase() === 'y') {
                        prompt.get([questionWhore], (err, { response }) => {
                          if (response.toLowerCase() === 'y') {
                            characterMap.get('firstCharacter').unshift(characterName)
                            nextCharacter()
                          } else{
                            prompt.get([questionStoner], (err, { response }) => {
                              if (response.toLowerCase() === 'y') {
                                characterMap.get('stoner').unshift(characterName)
                                nextCharacter()
                              } else{
                                prompt.get([questionSporty], (err, { response }) => {
                                  if (response.toLowerCase() === 'y') {
                                    characterMap.get('cheerleader').push(characterName)
                                    nextCharacter()
                                  } else{
                                    
                                  }
                              }
                          }
                      } else {
                        
                      }
                  }
              }
          }
      }
    } )
  })
}

const nextCharacter = () => {
  prompt.get([questionContinue], (err, { response }) => {
    if (response.toLowerCase() === 'y') questions()
    else console.log(Array.from(characterMap.values()).filter(group => group.length > 0).flat().join(' => '))
  })
}

questions()




'whore',
'cheerleader',
'jock',
'stoner',
'nerd',
'goodGuy',

