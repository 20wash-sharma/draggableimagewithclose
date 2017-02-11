/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//var xmlhttp = new XMLHttpRequest();
//
//xmlhttp.onreadystatechange = function () {
//    if (xmlhttp.readyState == XMLHttpRequest.DONE) {
//        if (xmlhttp.status == 200) {
//            //document.getElementById("divid").innerHTML = xmlhttp.response[0].name;
//            //alert(JSON.parse(xmlhttp.responseText));
//            // console.log(xmlhttp.response[0].name);
//            //var abc= JSON.parse(xmlhttp.response);
//            //alert(abc);
//            //console.log(xmlhttp.response);
//            // json = xmlhttp.response;
//            localStorage.setItem('testObject', JSON.stringify(xmlhttp.response));
//            // console.log(json);
////              for(var i = 0; i < json.length; i++) {
////   
////        var obj = json[i];
////
////    //console.log(obj.name+obj.location+obj.phone+obj.address);
////    
////}
//
//        } else if (xmlhttp.status == 400) {
//            alert('There was an error 400');
//        } else {
//            alert('something else other than 200 was returned');
//        }
//    }
//};
//
//xmlhttp.open("GET", "weekthirdjson.json");
//xmlhttp.responseType = 'json';
//
//
//xmlhttp.send();
//var retrievedObject = localStorage.getItem('testObject');
//
//console.log(retrievedObject);
//var originalObject = JSON.parse(retrievedObject);



function populateInTable()
{
    var table = document.getElementById('myTable');
    while(table.rows.length > 1) {
  table.deleteRow(1);
}
    var retrievedObject = localStorage.getItem('testObject');


    var originalObject = JSON.parse(retrievedObject);

    for (var i in originalObject)
    {
        var tableRef = document.getElementById('myTable').getElementsByTagName('tbody')[0];

        // Insert a row in the table at row index 0
        var newRow = tableRef.insertRow(tableRef.rows.length);

        // Insert a cell in the row at index 0

        // Append a text node to the cell
        var newCell = newRow.insertCell(0);
        var newText = document.createTextNode(originalObject[i].name);
        newCell.appendChild(newText);

        newCell = newRow.insertCell(1);
        newText = document.createTextNode(originalObject[i].location);
        newCell.appendChild(newText);

        newCell = newRow.insertCell(2);
        newText = document.createTextNode(originalObject[i].phone);
        newCell.appendChild(newText);

        newCell = newRow.insertCell(3);
        newText = document.createTextNode(originalObject[i].address);
        newCell.appendChild(newText);
        newCell = newRow.insertCell(4);
        newText = document.createTextNode(originalObject[i].email);
        newCell.appendChild(newText);

    }   
}


function validateForm(event) {
    event.preventDefault();
    var lights = document.getElementsByClassName("has-error");
    while (lights.length)
        lights[0].className = lights[0].className.replace(/\bhas-error\b/g, "");
    var elements = document.getElementsByClassName('errormsg');
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
    var name = document.forms["myForm"]["fname"].value;
    var location = document.forms["myForm"]["flocation"].value;
    var phone = document.forms["myForm"]["fphone"].value;
    var address = document.forms["myForm"]["faddress"].value;
    var email = document.forms["myForm"]["femail"].value;
    var nameSpan = document.createElement('span');
    var locationSpan = document.createElement('span');
    var phoneSpan = document.createElement('span');
    var addressSpan = document.createElement('span');
    var emailSpan = document.createElement('span');
    nameSpan.setAttribute('class', 'errormsg text-danger');
    locationSpan.setAttribute('class', 'errormsg text-danger');
    phoneSpan.setAttribute('class', 'errormsg text-danger');
    addressSpan.setAttribute('class', 'errormsg text-danger');
    emailSpan.setAttribute('class', 'errormsg text-danger');
    var validation_success = true;
    if (name == "") {
        document.forms["myForm"].children[0].appendChild(nameSpan);
        nameSpan.innerHTML = 'Name must be filled out!';
        document.forms["myForm"].children[0].className += " has-error";

        validation_success = false;
    } else if (name.length < 2)
    {
        document.forms["myForm"].children[0].appendChild(nameSpan);
        nameSpan.innerHTML = 'The length of Name should be atleast 2 characters!';
        validation_success = false;
        document.forms["myForm"].children[0].className += " has-error";
    }
    if (location == "") {
        document.forms["myForm"].children[1].appendChild(locationSpan);
        locationSpan.innerHTML = 'location must be filled out!';
        validation_success = false;
        document.forms["myForm"].children[1].className += " has-error";
    } else if (location.length < 2)
    {
        document.forms["myForm"].children[1].appendChild(locationSpan);
        locationSpan.innerHTML = 'The length of Location should be atleast 2 characters!';
        validation_success = false;
        document.forms["myForm"].children[1].className += " has-error";
    }
    if (phone == "") {
        document.forms["myForm"].children[2].appendChild(phoneSpan);
        phoneSpan.innerHTML = 'phone must be filled out!';
        validation_success = false;
        document.forms["myForm"].children[2].className += " has-error";
    } else if (phone.length < 2)
    {
        document.forms["myForm"].children[2].appendChild(phoneSpan);
        phoneSpan.innerHTML = 'The length of phone should be atleast 2 characters!';
        validation_success = false;
        document.forms["myForm"].children[2].className += " has-error";
    } else if (isNaN(phone))
    {
        document.forms["myForm"].children[2].appendChild(phoneSpan);
        phoneSpan.innerHTML = 'The  phone should be Numbers only!';
        validation_success = false;
        document.forms["myForm"].children[2].className += " has-error";
    }
    if (address == "") {
        document.forms["myForm"].children[3].appendChild(addressSpan);
        addressSpan.innerHTML = 'address must be filled out!';
        validation_success = false;
        document.forms["myForm"].children[3].className += " has-error";
    } else if (address.length < 2)
    {
        document.forms["myForm"].children[3].appendChild(addressSpan);
        addressSpan.innerHTML = 'The length of address should be atleast 2 characters!';
        validation_success = false;
        document.forms["myForm"].children[3].className += " has-error";
    }
    if (email == "") {
        document.forms["myForm"].children[4].appendChild(emailSpan);
        emailSpan.innerHTML = 'email must be filled out!';
        validation_success = false;
        document.forms["myForm"].children[4].className += " has-error";
    } else if (email.length < 2)
    {
        document.forms["myForm"].children[4].appendChild(emailSpan);
        emailSpan.innerHTML = 'The length of email should be atleast 2 characters!';
        validation_success = false;
        document.forms["myForm"].children[4].className += " has-error";
    } else
    {
        var emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!email.match(emailformat))
        {
            document.forms["myForm"].children[4].appendChild(emailSpan);
            emailSpan.innerHTML = 'The email should be in proper format!';
            validation_success = false;
            document.forms["myForm"].children[4].className += " has-error";

        }


    }
    if (validation_success)
    {
        var retrievedObject = localStorage.getItem('testObject');
        
        //console.log(retrievedObject);
       
         var originalObject = JSON.parse(retrievedObject);
          
      originalObject.push({"name":name,"location":location,"phone":phone, "address":address,"email":email});
    
        
        
         localStorage.setItem('testObject', JSON.stringify(originalObject));
        
    console.log(localStorage.getItem('testObject'));


   populateInTable();
        
        
//        var tableRef = document.getElementById('myTable').getElementsByTagName('tbody')[0];
//
//        // Insert a row in the table at row index 0
//        var newRow = tableRef.insertRow(tableRef.rows.length);
//
//        // Insert a cell in the row at index 0
//
//        // Append a text node to the cell
//        var newCell = newRow.insertCell(0);
//        var newText = document.createTextNode(name);
//        newCell.appendChild(newText);
//
//        newCell = newRow.insertCell(1);
//        newText = document.createTextNode(location);
//        newCell.appendChild(newText);
//
//        newCell = newRow.insertCell(2);
//        newText = document.createTextNode(phone);
//        newCell.appendChild(newText);
//
//        newCell = newRow.insertCell(3);
//        newText = document.createTextNode(address);
//        newCell.appendChild(newText);
//
//        newCell = newRow.insertCell(4);
//        newText = document.createTextNode(email);
//        newCell.appendChild(newText);
        document.forms["myForm"].reset();
    }
    return false;
}


var getStudentJSONData = function () {
    var promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            var xmlhttp = new XMLHttpRequest();

            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == XMLHttpRequest.DONE) {
                    if (xmlhttp.status == 200) {

                        resolve(xmlhttp.response);



                    } else if (xmlhttp.status == 400) {
                        alert('There was an error 400');
                    } else {
                        alert('something else other than 200 was returned');
                    }
                }
            };

            xmlhttp.open("GET", "weekthirdjson.json");
            xmlhttp.responseType = 'json';


            xmlhttp.send();


        }, 2000);
    });
    return promise;
};

var fn_return = getStudentJSONData();
fn_return.then(function (success_response) {
   
         var retrievedObject = localStorage.getItem('testObject');
         if(!retrievedObject)
    localStorage.setItem('testObject', JSON.stringify(success_response));
 
populateInTable();

},
        function (err) {
            document.write(err);
        });
