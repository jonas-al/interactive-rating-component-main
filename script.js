const mainContainer = document.querySelector('.container')
const submitButton = document.getElementById('formSubmit')
const rates = document.querySelectorAll('.btn')

submitButton.addEventListener('click', () => {
    mainContainer.classList.add('hidden')
    console.log(rates)
})

rates.forEach((rate) => {
    rate.addEventListener('click', () => {
        rateValue = rate.innerHTML
        document.getElementById('valueRate').innerHTML = rateValue
        submitButton.disabled = false
    })
})