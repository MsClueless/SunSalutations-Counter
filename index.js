let count = 0;
let totalSum = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let totalEl = document.getElementById("total-el");


function increment() {
    count += 1;
    countEl.textContent = count;
    totalSum += 1;
    totalEl.textContent = totalSum;
}

//increment();


function save() {
    let saveCount = count + " - ";
    saveEl.textContent += saveCount;
    countEl.textContent = 0;
    count = 0;

    console.log(count);
};
//save();
