
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

const LinkedListCLI = async () => {
  const response = await prompts([
    {
    type:'select',
    name: 'age',
    message: questions.age[0],
    choices: questions.age[1].map(option => {
      const [key, value] = option
      return {title: key, value: scores[value]}
    })
    }
  ])

  console.log(response)
  const score = Object.values(response).reduce((a,b) => a+b)
  const newCharacter = new CharacterNode(characterName, score)
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
    deathList.printCharacters()
  }
}
nextCharacterOrEnd()

