    const form = document.querySelector("form")
    let div = document.querySelector('.container')
    let output = document.querySelector("#results")
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const height = parseFloat(document.querySelector("#height").value)
        const weight = parseFloat(document.querySelector("#weight").value)

        if (height === '' || height<0 || isNaN(height)) {
            output.innerHTML = `Please enter a valid height`
        }
        else if (weight === '' || weight<0 || isNaN(weight)) {
                    output.innerHTML = `Please enter a valid weight`
        }else{
            const BMI = (weight)/(height * height);
            output.innerHTML = `Your BMI is ${BMI}` 
            div.appendChild(output)
        }

    })



    


