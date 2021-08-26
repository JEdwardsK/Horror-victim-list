

export class CharacterNode {
  constructor (name, score) {
    // if (typeof score !== 'number') throw new Error('invalid type, score must be a number')
    this.name = name
    this.score = score
  }
}

export class CharacterLinkedList {
  constructor () {
    this.head = null
    this.next = null
    this.size = 0
  }

  addCharacter(character) {
    if (!this.head) {
      this.head = character
      this.size++
      return
    }
    if(this.head)
  }
}
