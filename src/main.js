/*
//
*/

// Some starter code
const container = document.querySelector("#thingList")

document.querySelector("#saveEntry").addEventListener("click", event => {
    /*
        Collect the user put by selecting the input fields, one
        at a time, and accessing the `value` property
    */
    const thing = document.querySelector("#thing").value
    const location = document.querySelector("#location").value

    // Once you have collected all the values, update the DOM
    // with some HTML

    //             <h1>${personName}</h1>
    //        <div>${personAddress}</div>

    container.innerHTML += `
        <section>
            <p>I can purchase ${thing} at ${location}</p>
        </section>
    `

})
