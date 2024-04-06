"use strict";

const imageContainer = document.getElementById("imageContainer");
const btnElement = document.querySelector(".btn");
const random = Math.trunc(Math.random() * 250);

//////////////////////////////////////////////////////////////////

const getFlag = async function () {
  try {
    const fetchFlag = await fetch("https://restcountries.com/v3.1/all");

    const flagParse = await fetchFlag.json();
    const flag = flagParse[random].flags.png;
    const flagName = flagParse[random].name;

    imageContainer.insertAdjacentHTML(
      "beforeend",
      `<img src="${flag}" alt="Flag">`
    );

    console.log(flagName);
    console.log(flagName.common);
  } catch (err) {
    console.error(err);
  }
};

getFlag();

btnElement.addEventListener("click", function () {
  let inputElement = document.querySelector("input");
  let inputValue = inputElement.value;
  console.log(inputValue);
});
