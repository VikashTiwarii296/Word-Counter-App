const userText = document.getElementById("userText");
const btn = document.querySelectorAll(".btn");
const noOfWords = document.getElementById("noOfWords");
const noOfChar = document.getElementById("noOfChar");
const noOfSen = document.getElementById("noOfSen");
const readingTime = document.getElementById("readingTime");
const whiteSpace = document.getElementById("whiteSpace");

//button operation
btn.forEach(element => {
    if (userText.value == "") {
        element.classList.add("disabled")
    }
    element.addEventListener("click", (e) => {
        if (e.target.textContent === "Clear All") {
            userText.value = "";
            textDetails()
        } else if (e.target.textContent === "Copy") {
            userText.select()
            document.execCommand('copy')
        } else if (e.target.textContent === "Uppercase") {
            userText.style.textTransform = "uppercase"
        } else if (e.target.textContent === "LowerCase") {
            userText.style.textTransform = "lowercase"
        } else {
            let textArr = userText.value.split(" ");
            textArr = textArr.filter((elem) => {
                if (elem !== "") {
                    return elem
                }
            })
            userText.value = textArr.join(" ");
            textDetails()
        }
    })
});

//userText Operation
userText.addEventListener("keyup", (e) => {
    textDetails()
})

function textDetails() {
    if (userText.value.length > 0) {
        btn.forEach(element => {
            element.classList.remove("disabled")
        });
    } else {
        btn.forEach(element => {
            element.classList.add("disabled")
        });
    }
    const value = userText.value;
    let textArr = value.split(" ");
    whiteSpace.textContent = textArr.length - 1;
    textArr = textArr.filter((elem) => {
        if (elem !== "") {
            return elem
        }
    })
    noOfWords.textContent = textArr.length;
    noOfChar.textContent = value.length;

    let arr = value.split(".");
    noOfSen.textContent = arr.length - 1;

    let min = Math.floor((60 / 275 * textArr.length) / 60);
    let sec = Math.floor((60 / 275 * textArr.length) % 60);
    min = min < 10 ? `0${min}` : min
    sec = sec < 10 ? `0${sec}` : sec;
    readingTime.textContent = `${min} min ${sec} sec`;
}