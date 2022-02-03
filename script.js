// function addTwoIntegers(firstInteger, secondInteger) {
//     // console.log(firstInteger + secondInteger)
//     // return firstInteger + secondInteger
//     // return "Hello"
//     if(typeof firstInteger === "number" && typeof secondInteger  === "number"){
//         return firstInteger + secondInteger
//     }
//     else{
//         return "One of the arguments are not a number, can't work"
//     }
// };

// console.log(addTwoIntegers("12", 13));
// console.log(addTwoIntegers(1920, 85));
// console.log(0 === "0")


function loadEvent(eventObject) {
    // console.log(eventObject);
    const rootElement = document.getElementById("root");
    // console.dir(document);
    console.dir(rootElement);
    
    const listOfSectionElements = document.querySelectorAll("section");
    console.log(listOfSectionElements);
    // rootElement.classList.add("newClass");
    /* // listOfSectionElements[0].classList.add("newClass");
    // listOfSectionElements[1].classList.add("newClass");
    // listOfSectionElements[2].classList.add("newClass");
    // listOfSectionElements[3].classList.add("newClass"); */


    let anchors = "";

    for (const sectionElement of listOfSectionElements) {
        // sectionElement.classList.add("newClass");
        // anchors = anchors + `<a>${sectionElement.id}</a>`
        anchors += `<a href="#${sectionElement.id}">${sectionElement.id}</a>`;
    }

    console.log(anchors);
    rootElement.insertAdjacentHTML("afterbegin", `<header>${anchors}</header>`);
}

window.addEventListener("load", loadEvent);