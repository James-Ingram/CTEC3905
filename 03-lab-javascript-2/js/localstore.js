(function(){

  let myName = document.getElementById("my-name"); 
  let getName = document.getElementById("get-name");
  let userName = document.getElementById("user-name"); 
  let familyname = document.getElementById("family-name");
  let getFamily = document.getElementById("get-family");
  let lastname = document.getElementById("last-name");
  let nameStored = localStorage.name;
  let familyNameStored = localStorage.name;

  // Displays the name in the console at this stage:
  console.log(`Name on page load: ${nameStored}`);
  
  if(nameStored) {
    // If there's a name in localStorage, use it:
    myName.innerHTML = `again ${nameStored}`;
    console.log(`Name stored is: ${nameStored}`);
  }
  else {
    // There's no name in localStorage:
    myName.innerHTML = "stranger";
    console.log(`No name stored`);
  }

  function PerformGreeting() {
    if(userName.value === "") {
      alert("Please enter a name");
      userName.focus();
    }
  function PerformGreeting() {
    if(userName.value === "") {
      alert("Please enter a name");
      userName.focus();
    }
    // Gets the name the user entered:
    nameStored = userName.value;
    familynameStored = familynameStored
    // Shows the name in "my-name":
    myName.innerHTML = nameStored;
    
    // Puts the name into localStorage:
    localStorage.name = nameStored;
    
    // Displays the name in the console at the final stage:
    console.log(`New name stored: ${nameStored}`);
	
	//button.onsubmit.Storage.clear(nameStored);
    
    return false;
  }


  if (typeof event === "undefined") 
  {
    getFamily.onsubmit = PerformGreeting; // for Firefox
  }  
    else 
  {
    getFamily.addEventListener("submit", PerformGreeting);
    event.preventDefault();
  }
  
  if (typeof event === "undefined") 
  {
    getName.onsubmit = PerformGreeting; // for Firefox
  }
  else {
    getName.addEventListener("submit", PerformGreeting);
    event.preventDefault();
  }

}();
