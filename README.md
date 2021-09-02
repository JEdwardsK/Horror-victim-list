# Horror-victim-list (CLI)
  Takes some characters and returns the order they should die in a horror/slasher film. 

  Playing about using Linked Lists

  TODO: 
  - [ ] finalise scores for scores object
  - [ ] add some more questions and scores (optional)

  packages used:
  - [prompt](https://www.npmjs.com/package/prompt) - simple.js
  - [prompts](https://www.npmjs.com/package/prompts#-types) - linkedVersion.js bonus.js
  - jest
  
To run from the root first run `yarn`. Then depending on which questions you would like to answer:

- simple version - `node simple.js`
- linked list version - `node linkedVersion.js`
- bonus questions (short) - `node bonus.js`

## Simple version
### How it works
  Starts by storing the input name as a variable. Uses a Map with archetypes as keys and arrays as values. 
  
  For each character, a number of questions are asked to determine which key to get using `questions()`. The function chains a number of prompts.

  Example prompt:

  ```javascript
  prompt.get([questionBlack], (err, { response }) => {
      if (response.toLowerCase() === 'y') {
        characterMap.get('black').push(characterName)
        nextCharacter()
      } else { //...
  ```
 
  If the response is `'y'` the character is added to the relevent key in the Map. Then, `nextCharacter()` prompts whether to add another character. If no, the character list is returned as a string. If yes, `questions()` is run again.

  ```javascript
  const nextCharacter = () => {
    prompt.get([questionContinue], (err, { response }) => {
      if (response.toLowerCase() === 'y') questions()
      else {
        const list = Array.from(characterMap.values())
        list.length === 0 
          ? console.log('Death order: none listed')
          : console.log('Death order: ', list.filter(group => group.length > 0).flat().join(' => '))
        notSorted.length > 0 && console.log('status unknown: ', notSorted.join(', '))
      }
    })
  }
  ```
  If the character reaches the end of the chained prompts, they are added to an array `notSorted`

  #### Black Guy Dies First

  Historically as the character with the least relevance to the plot, often used as a dramatic death to showcase the big bad, or any other Cannon Fodder role
  #### First Character

  If the First Character is not the protagonist, generally considered more cannon fodder to set the scene

  #### Whore
  
  Sex is bad and must be punished, typically the pair of teenagers sneaking of to have sex will be the first to die, the 'pure' characters who avoid vice lasting longer. Female characters more likely to be punished than males. If the character is female they `unshift` into the archetypes array. If male `push`.

  #### Token Minority
  
  Same as Black Guy dies first, but for any other minority, based on race, sexuality, etc

  #### Cheerleader
  
  Attractive female in group, potentially an 'Alpha Bitch', usually in relationship with Jock, probably blonde, if tied to the 'whore' archetype will die early, else will die probably soon or immediately after the Jock, who may attempt to save her. Can also be the best friend of the Final Girl.

  #### Jock
  
  Alpha male, can be jerk or 'Alpha Bastard'. Probably in a relationship with cheerleader. Can also be a loveable Jock'. Likely the leader of the group due to strength, popularity or charisma. Likely to die attacking the killer, saving someone or in general being used as a guide to show the strength of the killer. Can also be a suspect behind the killings before their death.

  #### Nerd

Most likely a voice of reason. A sceptic or complainer, bullied the most out of the group. Likely to be portrayed as a coward. Generally has to die early so as to prevent logical thinking and end the problems in the film early.

  #### Good Guy

Can be any of the following:
  - the secret or not-so-secret love interest of the protagonist, 
  - best friend of the protagonist 
  - generally the least unlikeable of the group. 

Can survive to the end as the final victim before the Final Girl kills the big bad.
#### Final Girl

Guaranteed to make it to the end, female protagonist. Almost certainly a virgin, or at least the least promiscuous female of the group. Avoids drugs, smoking or alcohol. A 'pure' heart. Generally starts in a weak position building courage to face the big bad at the end and triumph. 

## Linked List version

### How it works

Characters  are assigned a score value. After this score is generated, a new character node is created using the following `CharacterNode` class:
```javascript
class CharacterNode {
  constructor (name, score) {
    this.name = name
    this.score = score
    this.next = null
  }
}
```
A list is constructed using the following `CharacterLinkedList` class :
```javascript
export class CharacterLinkedList {
  constructor () {
    this.head = null
    this.size = 0
    this.usedScores = new Map()
  }

  addCharacter(character) {//...
  }

  printCharacters() {//...
  }
} 
```
First following the prompts package, a response object is created using the inputs from the users in response to questions asked.

(example)
```javascript
{
  characterName: 'John Doe',
  age: 5,
  ethnicity: 1,
  protagonist: 1,
  gender: 5,
  relationToProtagonist: 3,
  hasDisability: 1,
  occupation: 4,
}
```

The name is set to a variable `characterName` and deleted. Using `Object.values()` and `reduce()` the total `score` is generated. a new CharacterNode is created using these values.

Using the `addCharacter` method, a character runs through the linked list, placing themselves in before or after a node depending on if the score is higher or lower. Where the score is equal, the current node's name changes from a string to an array of strings. This could symbolise characters dying in a group.

After all the characters are added, the `printCharacters()` method returns an array of character names in order.

### Scores
|Character Trait | Scores | Descriptors|
|---|---|---|
|child| | generally immortal, to young to die
|teenager| | prime age for deaths, usually age group of main characters
|youngAdult| | second likely age for characters
|adult| | average survivability, if main cast is young, they are either absent or ineffectual
|OAP| | generally immortal, to old to die, usually there to give cryptic creepy messages
|virgin|500 | generally immortal, to pure to die
|slut| | generally incredibily mortal, to impure to live
|hero| 8000 | the protagonist, practically immortal til the end, unless either heroic sacrifice is required, or everyone must die
|villain| 7000 | immortal until last act Second to last to die. required as is the person doing all the killing
|finalGirl| 9000| Final Girls never dies
|black| -9000| Black Dudes Die First.
|minorityGroup| |see above, applies to other minorities in the group
|white| | generally safe
|male| | as likely or slightly less likely to die compared to women dependant on situation. Genre tends towards women as people [don't respond](https://tvtropes.org/pmwiki/pmwiki.php/Main/MenAreTheExpendableGender) to men displaying weakness and abject terror
|female| | more likely to die than male counterparts, but more likely to have deaths spread apart for even screams throughout, see above regarding gender expectations
|bestFriend| | Coin toss. Either dies early to set the stakes or later as the final motivator/ last bastion of innocence for the final girl.
|parent| | Low mortality, low effectiveness, high likelihood of responsibility for present situation
|sibling| | Average. dependant on age, presence and involvement in plot
|mentalDisability|| Quite immortal
|physicalDisability|| Coin toss. Can range from average mortality to minority group level of  
|redShirt| -10| Catch All for squishy Cannon Fodder, such as: <br/> <ul><li>mentor figures </li><li> babysitters </li><li>guidance counsellors</li></ul>|
|police| 4| May or may not die, but will be ineffectual if present
|scientist| | Have to die early, either due to causing the outbreak scenario, or possessing the skill/ intelligence to end it
|cheerleader| 7|
|jock| 6|
|babysitter| | red shirt
|niceGuy| 2 | |

#### addCharacters()





## Bonus version

Asks some yes/no questions, returns a string as a result as to the character's suitability for the genre
