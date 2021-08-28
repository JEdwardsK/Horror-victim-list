

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
        // insert node inbetween current and next
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