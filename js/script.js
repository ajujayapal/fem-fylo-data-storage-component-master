const divProgress = document.querySelector(".progress");
const divSpaceUsed = document.querySelector(".used-space");
const divSpaceLeft = document.querySelector(".popup span:first-child");
const divProgressEnd = document.querySelector(".progress-end");

const diskSpace = 1000; //1000 GB - Change this for different total diskspace

divSpaceLeft.textContent = diskSpace - parseInt(divSpaceUsed.textContent);
divProgressEnd.textContent = String(diskSpace) + " GB";

console.log(diskSpace - parseInt(divSpaceUsed.textContent));

let x = setInterval(() => {
  let currentSpaceLeft = parseInt(divSpaceLeft.textContent);
  let currentSpaceUsed = parseInt(divSpaceUsed.textContent);

  divSpaceLeft.textContent = currentSpaceLeft - 1;
  divSpaceUsed.textContent = currentSpaceUsed + 1;

  let percentUsed = (currentSpaceUsed + 1) * (100 / diskSpace);

  divProgress.style.width = String(percentUsed) + "%";

  if (parseInt(divSpaceLeft.textContent) <= 0) {
    clearInterval(x);
    divProgress.style.backgroundImage = "none";
    divProgress.style.backgroundColor = "red";
  }
}, 10);
