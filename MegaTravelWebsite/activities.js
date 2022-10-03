function showResults(selectedObject) {
   let newZealDiv = document.getElementById("newZealDiv");
   let maldivesDiv = document.getElementById("maldivesDiv");
   let veniceDiv = document.getElementById("veniceDiv");
   let cancunDiv = document.getElementById("cancunDiv");

   newZealDiv.style.visibility = 'hidden';
   maldivesDiv.style.visibility = 'hidden';
   veniceDiv.style.visibility = 'hidden';
   cancunDiv.style.visibility = 'hidden';

   if(selectedObject == "New Zealand"){
    newZealDiv.style.visibility = 'visible';
   }
   else if(selectedObject == "Maldives, South Asia"){
    maldivesDiv.style.visibility = 'visible';
   }
   else if(selectedObject == "Venice, Italy"){
    veniceDiv.style.visibility = 'visible';
   }
   else if(selectedObject == "Cancun"){
    cancunDiv.style.visibility = 'visible';
   }
}
