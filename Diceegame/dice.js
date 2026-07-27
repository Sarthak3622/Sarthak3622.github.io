function rollDice() {

    const randomNumber1 = Math.floor(Math.random() * 6) + 1;

    const randomDice = "dice" + randomNumber1 + ".png";


    const randomImageSource = "images/" + randomDice;


    const image1 = document.querySelectorAll("img")[0];

    image1.setAttribute("src", randomImageSource);

    const randomNumber2 = Math.floor(Math.random() * 6) + 1;

    const randomDice2 = "images/dice"+randomNumber2+".png";

    const image2 = document.querySelectorAll("img")[1];


    image2.setAttribute("src", randomDice2);


    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "😎 Player one wins";
        document.querySelector("h1").style.color = "#fefae0";
        document.body.style.backgroundColor = "#14213d";
        document.querySelectorAll("p")[0].style.color = "#fefae0";
        document.querySelectorAll("p")[0].style.textShadow = '0 0 30px #fefae0';

        document.querySelectorAll("p")[1].style.color = "";
        document.querySelectorAll("p")[1].style.textShadow = '';
    }
    else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = "Player two wins 😎"
        document.querySelector("h1").style.color = "#ffddd2";
        document.body.style.backgroundColor = "#3d405b";
        document.querySelectorAll("p")[1].style.color = "#ffddd2";
        document.querySelectorAll("p")[1].style.textShadow = '0 0 30px #ffddd2';


        document.querySelectorAll("p")[0].style.color = "";
        document.querySelectorAll("p")[0].style.textShadow = '';
    }
    else {
        document.querySelector("h1").innerHTML = "Draw! 🤝";


        document.body.style.backgroundColor = "#393E46";
        document.querySelectorAll("p")[0].style.color = "";
        document.querySelectorAll("p")[0].style.textShadow = '';
        document.querySelectorAll("p")[1].style.color = "";
        document.querySelectorAll("p")[1].style.textShadow = '';
    }
}

const button = document.querySelector("button");
button.addEventListener("click", rollDice);
