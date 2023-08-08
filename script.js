var state = true;
$("#switch").click(()=>{
	$("#switch").text(state ? "sign up" : "sign in");
	$("#msg").text(state ? "WELCOME BACK !!" : "SIGN UP TODAY !!");
	if (state)
	{
		$(".door").animate({
			'margin-left': "50%"
		}, 1000);
	}
	else {
		$(".door").animate({
			'margin-left': "0%"
		}, 1000);
	}
	state = !state;
})