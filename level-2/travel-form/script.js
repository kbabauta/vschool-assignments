const form = document.travelForm

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const checkedInputs = [];

    for (let i = 0; i < form.dietary.length; i++){
        if(form.dietary[i].checked){
            checkedInputs.push(form.dietary[i].value)
        } 
    }
    alert(
        "First Name: " + form.firstName.value + "\n" +
        "Last Name: " + form.lastName.value + "\n" +
        "Age: " + form.age.value + "\n" +
        "Gender: " + form.gender.value + "\n" +
        "Destination: " + form.destination.value + "\n" +
        "Dietary Restrictions: " + checkedInputs
    )

})