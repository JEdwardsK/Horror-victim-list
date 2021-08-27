

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
      //prepend
      if (character.score < current.score) {
        this.head = character
        character.next = current
        this.size++
        return
      }
      //append
      if (character.score > current.score) {
        console.log('list', this)
        const tempNext = current.next
        //node is at end of list
        if (!tempNext) {
          current.next = character
          this.size++
          return
        }
        // insert node inbetween current and next
        if (tempNext.score > character.score) {
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

export const coinToss = () => {
  const result = Math.round(Math.random())
  return result === 0 ? -1 : 1
}