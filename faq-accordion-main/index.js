const questions = document.getElementsByClassName('questions');
console.log(questions);




// Loop through all the questions and add a click event listener to each of them
for(let i = 0; i < questions.length; i++){
    questions[i].addEventListener("click", function(){
        // Select the plus and minus images inside the clicked question
        const plus = this.getElementsByClassName("plus")[0];
        const minus = this.getElementsByClassName("minus")[0];
        // Toggle the display of the plus and minus images and the content div
        //toggle the hidden class
        plus.classList.toggle("hidden");
        minus.classList.toggle("hidden");
        //select the next sibling
        const content = this.nextElementSibling;
        if (content.style.display === "block"){
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

