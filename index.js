let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
    let fighterOne = pickFighter()
    let fighterTwo = pickFighter()
    stageEl.textContent = fighterOne + " vs " + fighterTwo
    // console.log(fighterOne)
    // console.log(fighterTwo)
})

function pickFighter(){
    randomIndex = Math.floor(Math.random()*fighters.length)
    return fighters[randomIndex]
}

