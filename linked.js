

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
  }

  addCharacter(character) {
    if (!this.head) {
      this.head = character
      this.size++
      return
    }
    let current = this.head
    while (current) {
      if (character.score === current.score) {
        // coin toss returns either a -1 or 1
        const value = coinToss()
        character.score += value
        // if (value > 0) {
        //   // check next value
        // }
      }
      //prepend
      if (character.score < current.score) {
        this.head = character
        character.next = current
        this.size++
        return
      }
      //append
      if (character.score > current.score) {
        const tempNext = current.next
        //node is at end of list
        if (!tempNext) {
          current.next = character
          this.size++
          return
        }
        // insert node inbetween current and next
        if (character.score < tempNext.score) {
          current.next = character
          character.next = tempNext
          this.size++
          return
        }
      }
      
      current = current.next
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