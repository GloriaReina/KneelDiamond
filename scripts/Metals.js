import {getMetals, setMetal} from "./database.js"

const metals = getMetals()


//Instead of showing an alert when a metal is chosen, you now need to set the corresponding property of the order builder object in application state....essentially giving the matching id/pk as the argument for the setmetal function
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
           // window.alert(`User chose metal ${event.target.value}`)
           setMetal(parseInt(event.target.value))
        }
    }
)
/*export const Metals = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const metal of metals) {
        html += `<li>
            <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
        </li>`
    }

    html += "</ul>"
    return html
}*/

export const Metals = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItemsArray = metals.map(metal =>{
        return `<li>
        <input type = "radio" name = "metal" value = "${metal.id}"/> ${metal.metal}
        </li>`
    })


    // Join all of the strings in the array into a single string
    html += listItemsArray.join("")
    html += "</ul>"

    return html
}


