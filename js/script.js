const textElement = document.getElementById("text")
const optionButtonsElement = document.getElementById("option-buttons")

let state = {}

function startGame() {
    state = {}
    showTextNode(0)
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement(`button`)
            button.innerText = option.text
            button.classList.add(`btn`)
            button.addEventListener(`click`, () => selectOption(option))
            optionButtonsElement.appendChild(button)
        }
    })
}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
    const nextTextNodeID = option.nextText
    if (nextTextNodeID <= 0) {
        return startGame()
    }
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeID)
}

const textNodes = [
    {
        id: 0,
        text: `Welcome to my game! Do you dare to begin?`,
        options: [
            {
                text: `Start the game`,
                nextText: 1
            }
        ]
        
    },
   {
    id: 1,
    text: `Dazed and confused, you wake up in darkness. The stench of death permeates the air. How did i get here? The room is baron, however there are 3 doors. Behind one door you hear the sound of someone sobbing. Behind the second door, you hear the sound of metal grinding. Behind the last door, silence. Which door will you go through?`,
    options: [
        {
            text: `Sobbing`,
            nextText: 4
        },
        {
            text: `Grinding Metal`,
            nextText: 3
        },
        {
            text: `Silence`,
            nextText: 2
        }
    ]
   },
   {
    id: 2,
    text: `You walk into a seemingly empty room, although it is still dark. Stumbling around the cold chamber, you bump into a rusty shelf, housing 2 items. It feels like someone left behind a knife, and a torch. You are only able to bring one with you. Which do you choose?`,
    options: [
        {
            text: `Light`,
            setState: { torch: true },
            nextText: 3
        },
        {
            text: `Weapon`,
            setState: { knife: true },
            nextText: 3
        }
    ]
   },
{
    id: 3,
    text: `You enter a room with a flickering lightbulb. In the corner, a young man chained to the floor, covered in bruises and lacerations. He is struggling to break free. You see a red door and a black door. Will you help the young man escape, or save yourself and pick a door?`,
    options: [
        {
            text: `Black Door`,
            nextText: 5
        },
        {
            text: `Red Door`,
            nextText: 6
        },
        {
            text: `Help Boy`,
            nextText: 7
        }
    ]
   },

{
    id: 4,
    text: `You enter a room with a flickering light bulb. In the corner, a large figure, facing a blood splattered wall. The sobbing turns into hysterical laughter. You are murdered in cold blood! The end!`,
    options: [
        {
            text: `Restart`,
            nextText: -1
        }
    ]
    
},
{
    id: 5,
    text: `You step into a fully lit room, with messages scribbled all over the walls, written in blood. There are only 2 extra doors in this room. A white door and a red door. WHich will you go through?`,
    options: [
        {
            text: `White Door`,
            nextText: 8
        },
        {
            text: `Red Door`,
            nextText: 9
        }
    ]
   },
   {
    id: 6,
    text: `You step through the door, and trigger a trap. A giant axe falls from above and introduces you to death.`,
    options: [
        {
            text: `Restart`,
            nextText: -1
        }
    ]
    
},
{
    id: 7,
    text: `You try your best to free the young man, but no success.  You hear footsteps behind you. The young man tells you to save yourself, and go through the black door.`,
    options: [
        {
            text: `Black Door`,
            nextText: 5
        }
    ]
    
},
{
    id: 8,
    text: `You run in and slam the door behind you. A careless step leads to slipping on a pool of blood, and smashing your head on the tiled floor. You quickly become weak, and lose consciousness. Only to wake up with chains on your feet and ankles. You have been captured, prepare to die.`,
    options: [
        {
            text: `Restart`,
            nextText: -1
        }
    ]
    
},
{
    id: 9,
    text: `This room is pitch black. You feel two door handles. Do you take the door on the left, or right?`,
    options: [
        {
            text: `Left`,
            nextText: 10
        },
        {
            text: `Right`,
            nextText: 11
        }
    ]
   },
   {
    id: 10,
    text: `You see the sun starting to rise. Fresh air. Freedom. You escaped!`,
    options: [
        {
            text: `You've won! Restart the game and try a different route?`,
            nextText: -1
        }
    ]
    
},
{
    id: 11,
    text: `A dog lunges towards you, and mauls you to death.`,
    options: [
        {
            text: `Restart`,
            nextText: -1
        }
    ]
    
},
]

startGame()

