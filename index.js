var name = document.querySelector("#exempleInputName");
var gender = document.querySelectorAll("#form-user-create [name-gender]:checked");
var birth = document.querySelector("#exempleInputBirth");
var country = document.querySelector("#exempleInputCountry");
var email = document.querySelector("#exempleInputEmail");
var password = document.querySelector("#exempleInputPassword");
var photo = document.querySelector("#exempleInputFile");
var admin = document.querySelector("#exempleInputAdmin");


var fields = document.querySelectorAll('#form-user-create [name]');

fields.forEach(function(field, index){

    if (field.name == 'gender') {

        if (field.checked){

            console.log('sim', field)
        }
        
    } else {

        console.log('nao')
        
    }

    //console.log(field.name)
})