

function c_t_f_converter(){
	
	var user_input_c = document.getElementById("user_input_c").value;
	
	if(isNaN(user_input_c)){
		document.getElementById("result_box_c").innerHTML = "<span style='color: red;'>Please enter a number, stupid.</span>"
		document.getElementById("user_input_c").value = "";
	}else{
	
	
	
	var c_in_f = user_input_c * 1.8 + 32;
	
	document.getElementById("result_box_c").innerHTML = c_in_f + " <span>&#8457;</span>";
	}
}


function t_t_c_converter(){
	var user_input_f = document.getElementById("user_input_f").value;
	
	if(isNaN(user_input_f)){
	document.getElementById("result_box_f").innerHTML = "<span style='color: red;'>Please enter a number, stupid.</span>"
		document.getElementById("user_input_f").value = "";
	}else{
	
	var c_in_f = Math.round((user_input_f - 32) / 1.8);
	
	document.getElementById("result_box_f").innerHTML = c_in_f + " <span>&#8451;</span>";
	}
}

function clearAll_c(){
	document.getElementById("user_input_c").value = "";
	document.getElementById("result_box_c").innerHTML = "";
}

function clearAll_f(){
	document.getElementById("user_input_f").value = "";
	document.getElementById("result_box_f").innerHTML = "";
}

