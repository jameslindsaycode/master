function message(){
	var name=document.getElementById("name").value;
	var email=document.getElementById("email").value;
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(email.match(mailformat)){
	alert(name+", thank you for contacting me. I will contact you via "+email+" shortly :)");
	}
	else
	{
	alert("Please input a valid e-mail address");
	}
}


