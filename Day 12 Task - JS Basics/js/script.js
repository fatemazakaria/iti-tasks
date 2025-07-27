
var studentName = window.prompt("Enter Student Name");
var studentAge = window.prompt("Enter Student Age");


	if (studentAge < 5 || studentAge > 25) {
		var result=document.writeln(studentName+"Not a Student");
	} else if (studentAge > 5 && studentAge < 12) {
		var result=document.writeln(studentName+"Elementary school student");
	} else if (studentAge > 12 && studentAge < 15) {
		var result=document.writeln(studentName+"Middle school student");
	} else if (studentAge > 15 && studentAge < 18) {
		var result=document.writeln(studentName+"Second year student");
	}


