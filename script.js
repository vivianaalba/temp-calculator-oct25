/* returns result to the console

Unsure how to make the html version take in parameters, but I have included the code for the prompt below 

Create a function called convertTemperature that takes a temperature value and a unit string ("C" for Celsius or "F" for Fahrenheit) as parameters. This function should use the appropriate conversion function to convert the temperature to the other unit and return the result. */

/* let convertTemperature = (temperature, tempType) => {
  if (tempType === "c") {
    farenheit = (temperature * 1.8) + 32;
    return `${farenheit} F`;
  } else if (tempType === "f") {
    celcius = (temperature - 32) / 1.8;
    return `${celcius} C`;
    }
}

console.log(convertTemperature(100, "c")) */

// returns result on HTML

function convertTemperature() {
  let temperature = Number(document.getElementById("temperature").value);
  let tempType = document.getElementById("tempType").value;
  let resultSpan = document.getElementById("result");
  let resultNum = null;
  
  switch (tempType) {
    case 'C':
      resultNum = (temperature * 1.8) + 32;
      resultSpan.innerHTML = `${resultNum} F`;
      break;
    case 'F':
      resultNum = (temperature - 32) / 1.8;
      resultSpan.innerHTML = `${resultNum} C`;
      break;
    default:
        console.log('Error');
  }
}


let button = document.getElementById("button");
button.addEventListener('click', convertTemperature)