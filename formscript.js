function valid() {
    // USERNAME
    let name = document.forms["myform"]["name"].value;
    if (name == "") {
        alert("ENTER USERNAME");
        return false;
    }
    if (/^[0-9_@#]/.test(name)) {
        alert("USERNAME SHOULD NOT START WITH DIGIT,_,@,#")
    }


    //PASSWORD
    let password = document.forms["myform"]["password"].value;
    if (password == "") {
        alert("ENTER PHONE NO.");
        return false;
    }

    if (!(/^\d{10}$/.test(password))) {
        alert("ENTER VALID PHONE NO");
        return false;
    }

    //ADDRESS
    let address = document.getElementById("address").value;
    if (address == "") {
        alert("ENTER EMAIL ID");
        return false;
    }

    if (!(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(address))) {
        alert("ENTER VALID EMAIL ADDRESS");
        return false;
    }

    //GENDER
    let gender;
    let gen = document.getElementsByName("gen");
    let isvalid = false;

    for (let i = 0; i < gen.length; i++) {
        if (gen[i].checked) {
            isvalid = true;
            gender = gen[i].value;
            break;
        }
    }

    if (!isvalid) {
        alert("SELECT GENDER");
        return false;
    }



    alert("REGISTRATION COMPLETE")
    return true;
}