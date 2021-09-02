/*------------------------------------*\
  # DEATH LIST GENERATOR - 
\*------------------------------------*/
/*
  quick bonus questions to test if character belongs in a slasher film
*/


import prompts from 'prompts'
import { bonus } from './linked.js'


const bonusQuestions = async() => {
  const entries = Object.entries(bonus)
  const response = await prompts(entries.map (entry => {
    return {
      type:'select',
      name: entry[0],
      message: entry[1],
      choices: [
        {title: 'Yes', value: true},
        {title: 'No', value: false}
      ]
    }
  }))
  const results = Object.values(response)

  console.log('\nRESULTS:', results.some(answer => answer) ? '\nYour character will fit perfectly as a potential victim' : '\nYour character will either: \n\t a) survive by virtue of not being present, or  \n\t b) immediately be killed so that they can\'t prevent others from falling for pitfalls and ending the film early. c) be killed whilst abandoning the group, probably in a way that punishes them for their \'cowardly\' behaviour')
}
bonusQuestions()