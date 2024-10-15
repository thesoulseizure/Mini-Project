let h1 = document.createElement('h1')
h1.setAttribute('id', 'title')
h1.innerText = 'Iphone Calculator'
document.body.append(h1)

let br = document.createElement('br')
document.body.append(br)

let p = document.createElement('p')
p.setAttribute('id', 'description')
p.innerText = 'task using dom'
document.body.append(p)

let br1 = document.createElement('br')
document.body.append(br1)

let div = document.createElement("div")
div.setAttribute('class', 'container')
document.body.append(div)

let input = document.createElement('input')
input.setAttribute('type', 'text')
input.setAttribute('id', 'result')
input.setAttribute('class', 'display')
div.append(input)

let div2 = document.createElement("div")
div2.setAttribute('class', 'buttons')
div.append(div2)

let button1 = document.createElement('button')
button1.setAttribute('class', 'operator')
button1.setAttribute('id', 'clear')
button1.setAttribute('data-value', 'AC')
button1.innerText = 'AC'
div2.append(button1)

let button2 = document.createElement('button')
button2.setAttribute('class', 'operator')
button2.setAttribute('data-value', 'DEL')
button2.innerText = 'DEL'
div2.append(button2)

let button3 = document.createElement('button')
button3.setAttribute('class', 'operator')
button3.setAttribute('data-value', '%')
button3.innerText = '%'
div2.append(button3)

let button4 = document.createElement('button')
button4.setAttribute('class', 'operator')
button4.setAttribute('data-value', '/')
button4.innerText = '/'
div2.append(button4)


let button5 = document.createElement('button')
button5.setAttribute('data-value', '7')
button5.innerText = '7'
div2.append(button5)

let button6 = document.createElement('button')
button6.setAttribute('data-value', '8')
button6.innerText = '8'
div2.append(button6)

let button7 = document.createElement('button')
button7.setAttribute('data-value', '9')
button7.innerText = '9'
div2.append(button7)

let button8 = document.createElement('button')
button8.setAttribute('class', 'operator')
button8.setAttribute('data-value', '*')
button8.innerText = '*'
div2.append(button8)



let button9 = document.createElement('button')
button9.setAttribute('data-value', '4')
button9.innerText = '4'
div2.append(button9)

let button10 = document.createElement('button')
button10.setAttribute('data-value', '5')
button10.innerText = '5'
div2.append(button10)

let button11 = document.createElement('button')
button11.setAttribute('data-value', '6')
button11.innerText = '6'
div2.append(button11)

let button12 = document.createElement('button')
button12.setAttribute('class', 'operator')
button12.setAttribute('id', 'subtract')
button12.setAttribute('data-value', '-')
button12.innerText = '-'
div2.append(button12)




let button13 = document.createElement('button')
button13.setAttribute('id', '1')
button13.setAttribute('data-value', '1')
button13.innerText = '1'
div2.append(button13)

let button14 = document.createElement('button')
button14.setAttribute('id', '2')
button14.setAttribute('data-value', '2')
button14.innerText = '2'
div2.append(button14)

let button15 = document.createElement('button')
button15.setAttribute('id', '3')
button15.setAttribute('data-value', '3')
button15.innerText = '3'
div2.append(button15)

let button16 = document.createElement('button')
button16.setAttribute('class', 'operator')
button16.setAttribute('id', 'add')
button16.setAttribute('data-value', '+')
button16.innerText = '+'
div2.append(button16)



let button17 = document.createElement('button')
button17.setAttribute('data-value', '0')
button17.innerText = '0'
div2.append(button17)

let button18 = document.createElement('button')
button18.setAttribute('data-value', '00')
button18.innerText = '00'
div2.append(button18)

let button19 = document.createElement('button')
button19.setAttribute('data-value', '.')
button19.innerText = '.'
div2.append(button19)

let button20 = document.createElement('button')
button20.setAttribute('class', 'operator')
button20.setAttribute('id', 'equal')
button20.setAttribute('data-value', '=')
button20.innerText = '='
div2.append(button20)






const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChar = ["%", "*", "/", "-", "=", "+"]
let output = "";
    const calculate = (btnValue) => {
  try {
    if (btnValue === "=" && output !== "") {
      output = eval(output.replace("%", "/100"));
    } else if (btnValue === "AC") {
      output = "";
    } else if (btnValue === "DEL") {
      output = output.toString().slice(0, -1);
    } else {
      if (output === "" && specialChar.includes(btnValue)) return;
      output += btnValue;
    }
    display.value = output;
  } catch (error) {
    alert('Invalid Expression');
    output = ""; // Clear the output in case of an error
    display.value = output;
  }
};
  document.addEventListener('keydown', function (event) {
  const key = event.key;

  // Check if the pressed key is a number or an operator
  if (!(key >= '0' && key <= '9') && !['+', '-', '*', '/'].includes(key)) {
    alert('Only numbers are allowed!');
    event.preventDefault();
  }
});

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));

  });