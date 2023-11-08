document.getElementById("calculatorForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let num1 = parseFloat(document.getElementById("number1").value);
    let num2 = parseFloat(document.getElementById("number2").value);
    let operation = document.getElementById("operation").value;
    let resultDiv = document.getElementById("results");
    let errorDiv = document.querySelector(".error");

    if (isNaN(num1) || isNaN(num2) || !operation) {
        errorDiv.style.display = "block";
        errorDiv.textContent = "Veuillez entrer un nombre valide.";
        resultDiv.textContent = "";
    } else {
        errorDiv.style.display = "none";
        let result;
        switch (operation) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
                break;
            default:
                result = "Operation invalide";
        }
        resultDiv.textContent = ` ${result}`;
    }
});

function resetForm() {
    document.getElementById("calculatorForm").reset();
    document.getElementById("results").textContent = "";
    document.querySelector(".error").style.display = "none";
}
