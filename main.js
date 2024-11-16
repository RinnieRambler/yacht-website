



// Step #1. Start with our constants to define all our buttons
const buttons = document.querySelectorAll('.expandButton');
const expandingSections = document.querySelectorAll('.expandable');

console.log(buttons)
// Step #2. Create a function that finds the element that was clicked
// then finds the element next to it and removes the class of hidden
function dropDownAnswer() {
    
    this.classList.toggle('active');
    
    let targetExpandableDiv = this.dataset.targetButton;
    expandingSections.forEach(section => {
        if (targetExpandableDiv == section.dataset.targetMore) {
            section.classList.toggle('hidden');
        }
    })
    
    // Step #5. Now we get to something new. We are going to target an element
    // based off of it's position relative to the triggering element. 
    
    // console.log(this.previousElementSibling);
    // console.log(this.nextElementSibling);
    
    // Step #6. Using the this keyword we can target the section we want to appear
    // and toggle the hidden class 
    // this.nextElementSibling.classList.toggle('hidden');
}

// Step #3. We want to loop over all our buttons using forEach method
buttons.forEach(button => {
    console.log('got to here')
    // Step #4. Add an event listener to each of them that triggers our function
    button.addEventListener('click', dropDownAnswer)
})