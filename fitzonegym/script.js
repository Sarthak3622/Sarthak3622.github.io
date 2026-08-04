// Welcome message when user clicks Join Now
function joinNow() {
    alert("🎉 Welcome to FitZone Gym!\n\nThank you for choosing us.\nVisit our gym today and start your fitness journey!");
}

// BMI Calculator
function calculateBMI() {

    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById("result").innerHTML =
            "⚠ Please enter valid weight and height.";
        return;
    }

    // Convert cm to meters
    height = height / 100;

    let bmi = weight / (height * height);

    let status = "";

    if (bmi < 18.5) {
        status = "Underweight";
    } else if (bmi < 25) {
        status = "Normal Weight";
    } else if (bmi < 30) {
        status = "Overweight";
    } else {
        status = "Obese";
    }

    document.getElementById("result").innerHTML =
        "Your BMI is <strong>" +
        bmi.toFixed(2) +
        "</strong><br>Status: <strong>" +
        status +
        "</strong>";
}

// Reset BMI Form
function resetBMI() {

    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    document.getElementById("result").innerHTML = "";
}

// Contact Form
function submitForm(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;

    alert(
        "✅ Thank you, " +
        name +
        "!\n\nYour message has been received.\nWe will contact you soon."
    );

    event.target.reset();
}

// Welcome alert when website loads
window.onload = function () {
    console.log("FitZone Gym Website Loaded Successfully!");
};

// Scroll to Top Button
const topBtn = document.createElement("button");
topBtn.innerHTML = "⬆";
topBtn.id = "topBtn";
document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.padding = "12px 15px";
topBtn.style.fontSize = "18px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#ff9800";
topBtn.style.color = "#fff";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";

window.onscroll = function () {
    if (document.documentElement.scrollTop > 250) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

topBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};
