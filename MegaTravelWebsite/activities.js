function showResults(selectedObject) {
   let newZealDiv = document.getElementById("newZealDiv");
   let maldivesDiv = document.getElementById("maldivesDiv");
   let veniceDiv = document.getElementById("veniceDiv");
   let cancunDiv = document.getElementById("cancunDiv");

   newZealDiv.style.display= 'none';
   maldivesDiv.style.display= 'none';
   veniceDiv.style.display= 'none';
   cancunDiv.style.display= 'none';

   if(selectedObject == "New Zealand"){
    newZealDiv.style.display= 'block';
   }
   else if(selectedObject == "Maldives, South Asia"){
    maldivesDiv.style.display= 'block';
   }
   else if(selectedObject == "Venice, Italy"){
    veniceDiv.style.display= 'block';
   }
   else if(selectedObject == "Cancun"){
    cancunDiv.style.display= 'block';
   }
}

function validateForm() {
   let fname = document.forms["reservationForm"]["fname"].value;
   let lname = document.forms["reservationForm"]["lname"].value;
   let phoneNum = document.forms["reservationForm"]["phoneNum"].value;
   let adults = document.forms["reservationForm"]["adults"].value;
   let children = document.forms["reservationForm"]["children"].value;
   let dateStart = document.forms["reservationForm"]["dateStart"].value;
   let dateEnd = document.forms["reservationForm"]["dateEnd"].value;
   let location = document.getElementById("cancunDiv");
   let selectedLocation = location.options[location.selectedIndex].value;

   if (fname == "") {
     alert("Name must be filled out");
     return false;
   }
   if (lname == "") {
      alert("Name must be filled out");
      return false;
    }
    if (phoneNum == "") {
      alert("Phone number must be filled out");
      return false;
    }
    if (isNaN(phoneNum) || phoneNum < 1) {
      alert("Phone number not valid");
      return false;
    }
    if (adults == "") {
      alert("Please fill out number of adults traveling");
      return false;
    }
    if (children == null) {
      alert("Please fill out number of children traveling");
      return false;
    }
    if (dateStart == null) {
      alert("Please select a travel start date");
      return false;
    }
    if (dateEnd == null) {
      alert("Please select a travel end date");
      return false;
    }
    if (location == null) {
      alert("Please select a travel end date");
      return false;
    }
    if (selectedLocation == "location"){
      alert("Please select a vacation destination");
      return false;
   }
 }
