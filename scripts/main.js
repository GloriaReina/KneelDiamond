import { KneelDiamonds } from "./KneelDiamonds.js"
import { DiamondSizes } from "./DiamondSizes.js"
import { Orders } from "./Orders.js"
import { Metals } from "./Metals.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = KneelDiamonds()
}

renderAllHTML()

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})
