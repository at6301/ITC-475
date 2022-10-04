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
