
/**
 * Created by Motmaen Store on 9/26/2016.
 */

function mail() {

    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var message = document.getElementById('message');
    var contact = document.getElementById('contact');

    var filtermail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var filterphone = /^\d{11}$/;

    if (name == "" || email == "" || contact == "") {
        alert(" pls fill requires fields");
    }
    else if (!filterphone.test(contact.value)) {
        alert("wrong contact format");
    }

    else if ( !filtermail.test(email.value)){

        alert("wrong email format");
    }

    else{
        $('#tbl-body').append('<tr>')
            .append('<td>' +name.value+ '</td>')
            .append('<td>'+email.value+'</td>')
            .append('<td>'+contact.value+'</td>')
            .append('<td>'+message.value+'</td>')
            .append('</tr>');
            return false;
    }


}