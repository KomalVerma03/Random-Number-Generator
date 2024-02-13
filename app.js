
function displayData(){
    const userInput=document.getElementById("num").value;
    const displayContent=`User input: ${userInput}`;
    document.getElementById("displayArea").innerHTML=displayContent;


const randomNumber = Math.floor(Math.random() *5) + 1;//code to generate random number 


const randomNumberElement = document.getElementById("randomNumber");
// Check if the element is found before setting innerHTML
    if (randomNumberElement) {
        // Display the random number on the HTML page
        randomNumberElement.innerHTML =`Random Number Generated: ${randomNumber}`;
    } else {
        console.error('not found');
    }
}
