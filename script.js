const card = document.querySelector(".rating-card");
const cardTwo = document.querySelector(".thank-you-card");
const submit = document.querySelector("#submit")
const btn = document.querySelectorAll(".rating-btn");
const span = document.querySelector("#span-rating");

submit.addEventListener("click", function(){
    cardTwo.classList.remove("thank-you-card");
    card.style.display = "none";
});

btn.forEach((rate) => {
    rate.addEventListener("click", () =>{
        span.innerHTML = rate.innerHTML;
    })
})

