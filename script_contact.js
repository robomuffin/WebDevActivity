function validateForm() {
	var name = document.getElementById("uname").value;
	var email = document.getElementById("uemail").value;
	var mess = document.getElementById("umess").value;
	if (name == "" && email == "" && mess == "") {
		alert("Please enter all required information.");
		return false;
	}
	else if (name == "") {
		alert("Please enter your name.");
		return false;
	}
	else if (email == "") {
		alert("Please enter your email address.");
		return false;
	}
	else if (mess == "") {
		alert("Please enter your feedback about the website.");
		return false;
	}
	
	else {
		return true;
	}
}

function submitToMail() {
	
	if (validateForm())
	{
    var link = "mailto:robsmedrano00@gmail.com"
             + "?cc=" + encodeURIComponent(document.getElementById("uemail").value)
             + "&subject=" + encodeURIComponent("Feedback Message")
             + "&body=" + encodeURIComponent(document.getElementById("umess").value);
	alert("Thank you for sending us your feedback!");
    window.location.href = link;
	}
}