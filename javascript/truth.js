let fname = "";

function greet() {
    let greetparagraph = document.getElementById("greet");

    fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let age = document.getElementById("age").value;

    greetparagraph.innerHTML = "Greetings " + age + " year old " + fname + " " + lname;
}

function trivia1() {
    let triviaAnswer = document.getElementById("trivia1-answer");

    let chocolateSelected = document.getElementById("chocolate").checked;
    let tunaSelected = document.getElementById("tuna").checked;
    let honeySelected = document.getElementById("honey").checked;

    if (chocolateSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong. Sweet tooth?";
    } else if (tunaSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong. Rotten Tuna. Yuck!";
    } else if (honeySelected) {
        triviaAnswer.innerHTML = fname + ", you are correct!";
    }
}

function truths() {
    let truthsResult = document.getElementById("truths-result");

    let truth1Selected = document.getElementById("truth1").checked;
    let truth2Selected = document.getElementById("truth2").checked;
    let truth3Selected = document.getElementById("truth3").checked;

    if (truth1Selected) {
        truthsResult.innerHTML = fname + ", you are correct! I actually don't have a pet dragon.";
    } else if (truth2Selected) {
        truthsResult.innerHTML = fname + ", you are wrong. I have been to 10 different countries.";
    } else if (truth3Selected) {
        truthsResult.innerHTML = fname + ", you are wrong! I can speak 1 language fluently.";
    }
}