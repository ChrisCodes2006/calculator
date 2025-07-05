let screen = document.querySelector(".screen");
let last = "empty";
let stat = "complete";
let button1 = document.querySelector("#one")
let button2 = document.querySelector("#two")
let button3 = document.querySelector("#three")
let button4 = document.querySelector("#four")
let button5 = document.querySelector("#five")
let button6 = document.querySelector("#six")
let button7 = document.querySelector("#seven")
let button8 = document.querySelector("#eight")
let button9 = document.querySelector("#nine")
let button0 = document.querySelector("#zero")
let buttona = document.querySelector("#add")
let buttons = document.querySelector("#subtract")
let buttonm = document.querySelector("#multiply")
let buttond = document.querySelector("#divide")
let buttonc = document.querySelector("#clear")
let buttonb = document.querySelector("#back")
let buttone = document.querySelector("#equal")
button1.onclick = () => {
    if (stat == "complete") {
        stat = "incomplete";
        screen.textContent = "1";
    }
    else {
        screen.textContent += "1";
    }
    last = "num";
}
button2.onclick = () => {
    if (stat == "complete") {
        stat = "incomplete";
        screen.textContent = "2";
    }
    else {
        screen.textContent += "2";
    }
    last = "num";
}
button3.onclick = () => {
    if (stat == "complete") {
        stat = "incomplete";
        screen.textContent = "3";
    }
    else {
        screen.textContent += "3";
    }
    last = "num";
}
button4.onclick = () => {
    if (stat == "complete") {
        stat = "incomplete";
        screen.textContent = "4";
    }
    else {
        screen.textContent += "4";
    }
    last = "num";
}
button5.onclick = () => {
    if (stat == "complete") {
        stat = "incomplete";
        screen.textContent = "5";
    }
    else {
        screen.textContent += "5";
    }
    last = "num";
}
button6.onclick = () => {
    if (stat == "complete") {
        stat = "incomplete";
        screen.textContent = "6";
    }
    else {
        screen.textContent += "6";
    }
    last = "num";
}
button7.onclick = () => {
    if (stat == "complete") {
        stat = "incomplete";
        screen.textContent = "7";
    }
    else {
        screen.textContent += "7";
    }
    last = "num";
}
button8.onclick = () => {
    if (stat == "complete") {
        stat = "incomplete";
        screen.textContent = "8";
    }
    else {
        screen.textContent += "8";
    }
    last = "num";
}
button9.onclick = () => {
    if (stat == "complete") {
        stat = "incomplete";
        screen.textContent = "9";
    }
    else {
        screen.textContent += "9";
    }
    last = "num";
}
button0.onclick = () => {
    if (stat == "complete") {
        stat = "incomplete";
        screen.textContent = "0";
    }
    else {
        screen.textContent += "0";
    }
    last = "num";
}
buttond.onclick = () => {
    if (last=="negate"){}
    else if (last == "empty") { }
    else if (last == "op") {
        screen.textContent = screen.textContent.slice(0, -1) + "/";
        stat = "incomplete"
    }
    else if (last == "num") {
        screen.textContent += "/";
        last = "op";
        stat = "incomplete"
    }
}
buttona.onclick = () => {
    if (last=="negate"){}
    else if (last == "empty") { }
    else if (last == "op") {
        screen.textContent = screen.textContent.slice(0, -1) + "+";
        stat = "incomplete"
    }
    else if (last == "num") {
        screen.textContent += "+";
        last = "op";
        stat = "incomplete"
    }
}
buttons.onclick = () => {
    if (last=="negate"){}
    else if (last == "empty" ) {
        console.log("yes")
        if (last == "empty") { 
            screen.textContent = "-" 
            last="negate"}
        else {
            screen.textContent += "-"
            last = "op"
        }
        
        stat = "incomplete"
    }
    else if (last == "op") {
        
        screen.textContent += "-";
        last="negate"
        stat = "incomplete"
    }
    else if (last == "num") {
        screen.textContent += "-";
        last = "op";
        stat = "incomplete"
    }
}
buttonm.onclick = () => {
    if (last=="negate"){console.log(1)}
    else if (last == "empty") { console.log(2)}
    else if (last == "op") {
        console.log(3)
        screen.textContent = screen.textContent.slice(0, -1) + "*";
        stat = "incomplete"
    }
    else if (last == "num") {
        console.log(4)
        screen.textContent += "*";
        last = "op";
        stat = "incomplete"
    }
}
buttonc.onclick = () => {
    screen.textContent = "";
    last = "empty";
    stat = "complete";
}
buttonb.onclick = () => {
    if (screen.textContent != "") {
        screen.textContent = screen.textContent.slice(0, -1);
        last="num"
        if (screen.textContent.at(screen.textContent.length - 1) == "-" || screen.textContent.at(screen.textContent.length - 1) == "+" || screen.textContent.at(screen.textContent.length - 1) == "*" || screen.textContent.at(screen.textContent.length - 1) == "/") {
            last = "op";
            if (screen.textContent.length > 1) {
                if (screen.textContent.at(screen.textContent.length - 2) == "-" || screen.textContent.at(screen.textContent.length - 2) == "+" || screen.textContent.at(screen.textContent.length - 2) == "*" || screen.textContent.at(screen.textContent.length - 2) == "/") {
                    last = "negate"
                }
            }
        }
    }
    if (screen.textContent == "") {
        stat = "complete"
        last = "empty"
    }
}

buttone.onclick = () => {
    if (last != "op") {
        screen.textContent = eval(screen.textContent)
        last = "num";
        stat = "complete"
    }
}