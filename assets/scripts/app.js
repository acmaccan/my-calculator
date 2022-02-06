// Recibir todos los botones
const buttons = document.getElementById('buttons');
const clearBtn = document.getElementById('btn-clear');
const submitBtn = document.getElementById('btn-equal');

let expressionInput = []; // Crear un array
let stringeredExpression = [];

// Limpiar la consulta y mostrar 0 - backspace, delete y click on C
const clearInput = () => {
  expressionInput = []; // Reset expression
  document.getElementById('display').innerHTML = 0; // Display vuelve a 0
}

// Que cada input forme expresión que se muestre por display, generando string hasta clickear =
const getInput = (input) => {
  let singleInput = input.key || input.target.textContent; // keystroke || mouseclick

  expressionInput.push(singleInput); // Insertar valores

  let joinedExpression = expressionInput.join(''); // Remove commas
  stringeredExpression = joinedExpression.toString(); // Convertir a string

  document.getElementById('display').innerHTML = expressionInput.join(''); // Display expression
  console.log(stringeredExpression);
}

// Submitear el resultado y mostrar por pantalla - Enter y click on =
// Al tocar igual eval(expression) Puede evaluar una expresion 
const submitInput = () => {
  console.log(eval(stringeredExpression));
  document.getElementById('display').innerHTML = eval(stringeredExpression);
  expressionInput = [];
}

// Escuchar a todos los botones o teclas
buttons.addEventListener('click', getInput);
document.addEventListener('keydown', getInput);
clearBtn.addEventListener('click', clearInput);
submitBtn.addEventListener('click', submitInput);