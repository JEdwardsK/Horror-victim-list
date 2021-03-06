
/*------------------------------------*\
  # HORROR LIST GENERATOR - 
  LINKED LIST METHOD
\*------------------------------------*/
/*
  Using a linked list, characters are added to a list as they are created, placed in order of their values. 
  The value is a score is number that dictates how likely they are to die in a horror/slasher film
  The value is calculated using responses gained through user inputs from prompt questions
  After the last character is added, the results are printed as a string
*/

import prompts from 'prompts'
import { CharacterLinkedList, CharacterNode, questions, scores } from './linked.js'




const deathList = new CharacterLinkedList()

const selectPrompt = (question, name) => {
  return {
    type:'select',
    name: name,
    message: question[0],
    choices: question[1].map(option => {
      const [key, value] = option
      return {title: key, value: !value ? 0 : scores[value]}
    })
    }
}
const selectBoolean = (question, name) => {
  return {
    type:'select',
    name: name,
    message: question[0],
    choices: question[1].map(option => {
      const [key, value] = option
      return {title: key, value: value}
    })
    }
}

const skipBasedPrevious = (question, name) => {
  return {
    type: prev => prev ? null : 'select',
    name: name,
    message: question[0],
    choices: question[1].map(option => {
      const [key, value] = option
      return {title: key, value: value}
    })
  }
}


const LinkedListCLI = async () => {
  const response = await prompts([
    { type:'text', name: 'characterName', message: 'What is the character\'s name'},
    selectPrompt(questions.age, 'age'),
    selectPrompt(questions.ethnicity, 'ethnicity'),
    selectBoolean(questions.isProtagonist, 'protagonist'),
    skipBasedPrevious(questions.isAntagonist, 'villain'),
    selectPrompt(questions.gender, 'gender'),
    selectPrompt(questions.relationship, 'relationToProtagonist'),
    selectPrompt(questions.hasDisability, 'hasDisability'),
    selectPrompt(questions.occupation, 'occupation'),
    selectBoolean(questions.isNiceGuy, 'niceGuy'),
  ])

  // convert Booleans to scores
  response.protagonist = response.protagonist ? scores.hero : 0
  response.antagonist = response.antagonist ? scores.villain : 0
  response.niceGuy = response.niceGuy ?  scores.niceGuy : 0

  const characterName = response.characterName
  delete response.characterName

  console.log(response)
  const score = Object.values(response).reduce((a,b) => a+b)
  const tropes = Object.keys(response)
  console.log(score)
  const newCharacter = new CharacterNode(characterName, score, tropes)
  deathList.addCharacter(newCharacter)
  nextCharacterOrEnd()
}

const nextCharacterOrEnd = async () => {
  const response = await prompts ({
    type:'select',
    name: 'continue',
    message: 'Would you like to continue adding characters?',
    choices: [
      {title: 'Yes', value: true},
      {title: 'No', value: false}
    ]
  })
  if (response.continue) LinkedListCLI()
  else {
    const list = deathList.printCharacters()
    console.log(list)
  }
}


LinkedListCLI()