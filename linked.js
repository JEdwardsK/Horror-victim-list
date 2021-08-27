

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
    let current = this.head
    if (current.score > character.score) {
      this.head = character
      this.next = current
      this.size++
      return
    }
    if (current.score < character.score) {
      this.next = character
      this.size++
    }

  }

  printCharacters() {
    if (!this.head) return []

    const characterList = []
    let current = this.head
    console.log(current)
    while (current) {
      characterList.push(current.name)
      current = current.next
    }
    return characterList
  }
}


const test = new CharacterNode('test', 19)
const testList = new CharacterLinkedList()
testList.addCharacter(test)
const characters = testList.printCharacters()

