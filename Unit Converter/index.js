/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


let convertEl = document.getElementById("convert-btn")
let lengthEl = document.getElementById("length-txt")
let volumeEl = document.getElementById("volume-txt")
let massEl = document.getElementById("mass-txt")

function calculate() {
    convertEl.addEventListener("click", function () {
        let inputEl = document.getElementById("input").value
        let lengthConversionOne = inputEl * 3.281
        let lengthConversionTwo = inputEl / 3.281
        
        let volumeConversionOne = inputEl * 0.264
        let volumeConversionTwo = inputEl / 0.264
        
        let massConversionOne = inputEl * 2.204
        let massConversionTwo = inputEl / 2.204
        
        lengthEl.textContent = `${inputEl} meters = ${lengthConversionOne.toFixed(3)} feet | ${inputEl} feet = ${lengthConversionTwo.toFixed(3)} meters`
        
        volumeEl.textContent = `${inputEl} liters = ${volumeConversionOne.toFixed(3)} gallons | ${inputEl} gallons = ${volumeConversionTwo.toFixed(3)} liters`
        
        massEl.textContent = `${inputEl} kilograms = ${massConversionOne.toFixed(3)} pounds | ${inputEl} pounds = ${massConversionTwo.toFixed(3)} kilograms`
    })
}

calculate()