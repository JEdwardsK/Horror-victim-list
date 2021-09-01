

export class CharacterNode {
  constructor (name, score) {
    // if (typeof score !== 'number') throw new Error('invalid type, score must be a number')
    this.name = name
    this.score = score
    this.next = null
  }
}

export class CharacterLinkedList {
  constructor () {
    this.head = null
    this.size = 0
    this.usedScores = new Map()
  }

  addCharacter(character) {
    if (!this.head) {
      this.head = character
      this.size++
      // this.usedScores.set(character.score)
      return
    }
    let current = this.head
    while (current) {
      if (current.score === character.score) {
        if(typeof current.name === 'string') {
          current.name = [current.name]
        }
        current.name.push(character.name)
        this.size++
        return
      }
      //prepend
      if (character.score < current.score) {
        this.head = character
        character.next = current
        this.usedScores.set(character.score)
        this.size++
        return
      }
      //append
      if (character.score > current.score) {
        const tempNext = current.next
        //node is at end of list
        if (!tempNext) {
          current.next = character
          // this.usedScores.set(character.score)
          this.size++
          return
        }
        // insert node in between current and next
        if (character.score < tempNext.score) {
          current.next = character
          character.next = tempNext
          // this.usedScores.set(character.score)
          this.size++
          return
        }
      }
      
      current = current.next

      // sort by score 
    }

  }

  printCharacters() {
    if (!this.head) return null

    const characterList = []
    let current = this.head

    while (current) {
      characterList.push(current.name)
      current = current.next
    }
    return characterList
  }
}

/**
 * used to arbitrarily decide the order where two characters have the same score. the character being added has either 1 or -1 added to their score, to allow entry
 * @returns 1 or -1
 */
export const coinToss = () => {
  const result = Math.round(Math.random())
  // return result === 0 ? -1 : 1
  return -1
}

export const scores = {
  child: 1,
  teenager: 6,
  youngAdult: 5,
  adult: 4,
  OAP: 3,

  virgin: 1,
  Slut: 10,

  Hero: 1,
  Villain: 9,
  FinalGirl: -9000,

  black: 9000,
  ethnicMinority: 20,
  white: 1,

  male: 5,
  female: 7,
  
  bestFriend: 3,
  parent: 3,
  sibling: 3,

  mentalDisability: 1,
  physicalDisability: 5,

  redShirt: -10, //guidance counsellor
  police: 4,
  mentor: 5,
  scientist: 5,

  niceGuy: 2

}

console.log(scores.campCounsellor)
const yesNo = [['yes', true],['no', false]]
export const questions = {
  age: ['how old is the character?', [
      ['0 - 10', 'child'],
      ['11-21', 'teenager'],
      ['21-30', 'youngAdult'], 
      ['31-60', 'adult'], 
      ['61+', 'OAP']
  ]],
  ethnicity: ['what ethnicity is the character?', [
      ['White', 'white'], 
      ['Black', 'black'], 
      ['Other Ethnic Minority', 'ethnicMinority']
  ]],
  isProtagonist: ['is the character the protagonist?', yesNo],
  isAntagonist: ['is the character the main villain?', yesNo],
  gender: ['is the character male or female?',[
      ['male', 'male'],
      ['female', 'female']
    ]
  ],
  occupation: ['what does the character do for a living?', [
    ['law enforcement', 'police'], 
    ['role model/ someone protagonist looks up to/ mentor figure', 'mentor'], 
    ['scientist or skilled technician', 'scientist'], 
    ['guidance counsellor', 'redShirt'], 
    ['other', false]
  ]],
  relationship: ['is the character related to the protagonist?',[['mother', 'parent'],['father', 'parent'],['sibling', 'sibling']]],
  hasDisability: ['does the character have a disability?', [ ['mental', 'mentalDisability'], ['physical', 'physicalDisability'], ['none', false]]],
  isNiceGuy: ['is the character generally the most average amongst the group', yesNo]

}

export const bonus = {
  woods: 'does the character enjoy exploring poorly lit wooded areas?',
  hauntedHouse: 'is the character\'s perfect group holiday a visit to an abandoned murder house?',
  shortcuts: 'does the character prefer to take an unexplored, untested \'shortcut\' to reach a destination, instead of following a planned route, or asking for directions',
  confirmTheKill: 'if the character was to successfully injure or overpower a villain, would they proceed to kill, maim, or otherwise incapacitate them, or would they run away?',
  confirmTheKillBonus: 'when running away from the downed baddie, will they drop their weapon next to the baddie?',
  everythingUnlocked: 'does the character lock doors behind them when it is logical to do so?',
  scoobyGang: 'Does the character recommend splitting up to search an area?',
  loneWanderer: 'Would the character drift away from the party without telling anyone where they are going or why?',
  oneLiner: 'Is the character likely to say cliche lines like',
  peerPressure:'if the answer was no to any of the previous questions, would the character cave to the demands of the rest of the group and follow along (they may mumble or whine that it is a bad idea after the fact)?'
}



//TODO: write a function that returns a reasonable number if a user requests a random score be generated. This is based on a string identifying how likely the user thinks the character is to die
const randomScore = modifier => {

  const randomNumber = Math.floor(Math.random() * 90)
  let score = 0
  switch (modifier) {
    case 'immortal':
      score = 100 // some high score
      break;
    case 'very unlikely':
      score = randomNumber * 20
      break;
    case 'unlikely':
      score = randomNumber * 10
      break;
    case 'likely':
      score = randomNumber * .5
      break;
    case 'very likely':
      score = randomNumber * .1
      break;
    case 'red shirt':
      score = randomNumber * -10
      break;

    default:
      break;
  }
}