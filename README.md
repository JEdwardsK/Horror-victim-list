# Horror-victim-list (CLI)
  Takes some characters and returns the order they should die in a horror/slasher film

  packages used:
    prompt [https://www.npmjs.com/package/prompt]
  
## Simple version

To run, from project root in terminal run `yarn; node simple.js`

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

