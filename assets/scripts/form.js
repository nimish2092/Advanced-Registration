$(document).ready(function(){

	$('input').focus(function(){
		$(this).next().slideDown();
	}).blur(function(){
		$(this).next().slideUp();
	});

	$('#pass').focus(function(){
		$('.pwd-help').slideDown();
	}).blur(function(){
		$('.pwd-help').slideUp();
	});
/*-----------------------------PASSWORD BOX CHECKS-----------------------------*/
	$('#pass').keyup(function(e){

		var len = $('#pass').val().length;
		var count = 0;

		if(/\d/g.test(this.value)){
			$('#num-present').addClass('correct');
			$('#num-present-img').attr('src','assets/images/tick.png');
			count++;
			$('#pro').attr('value',count);
		}else{
			$('#num-present').removeClass('correct');
			$('#num-present-img').attr('src','assets/images/cross.png');
			/*count--;
			$('#pro').attr('value',count);*/
		}

		if(/[!@#$%^*?]/g.test(this.value)){
			$('#special-present').addClass('correct');
			$('#special-present-img').attr('src','assets/images/tick.png');
			count++;
			$('#pro').attr('value',count);
		}else{
			$('#special-present').removeClass('correct');
			$('#special-present-img').attr('src','assets/images/cross.png');
			/*count--;
			$('#pro').attr('value',count);*/
		}

		if(/(\W*\w){4,}/g.test(this.value)){
			$('#alpha').addClass('correct');
			$('#alpha-img').attr('src','assets/images/tick.png');
			count++;
			$('#pro').attr('value',count);
		}else{
			$('#alpha').removeClass('correct');
			$('#alpha-img').attr('src','assets/images/cross.png');
			/*count--;
			$('#pro').attr('value',count);*/
		}

		if(/\s/g.test(this.value)){
			$('#no-spaces').addClass('wrong');
			$('#no-spaces-img').attr('src','assets/images/cross.png');
			count--;
			$('#pro').attr('value',count);
		}else{
			$('#no-spaces').removeClass('wrong');
			$('#no-spaces-img').attr('src','assets/images/tick.png');
		}

		if( len >= 7 && len <= 20){
			$('#length').addClass('correct');
			$('#length-img').attr('src','assets/images/tick.png');
			count++;
			$('#pro').attr('value',count);
		}else{
			$('#length').removeClass('correct');
			$('#length-img').attr('src','assets/images/cross.png');
		}
	});

/*------------------------VERIFY PASSWORD-------------------------------------------*/

	$('#vpass').keyup(function(){
		var match = $('#pass').val() == $('#vpass').val();
		console.log(match);
		if(match == true){
			console.log("in loop");
			$('#vp').css('color','#13ad51');
			$(this).css('border','1px solid #13ad51');
		}
		else{
			console.log("in else loop");
			$('#vp').css('color','#ff3162');
			$(this).css('border','1px solid #ff3162');
		}
	});

/*-----------------------EMAIL CHECK-----------------------------------------------*/

	$('#email').blur(function(){
		if(/^\S+@\S+\.\S+$/.test(this.value)){
			$(this).css('border','1px solid #13ad51');
		}
		else{
			$(this).css('border','1px solid #ff3162');
		}
	});

/*----------------------------VERIFY EMAIL----------------------------------------*/

	$('#vemail').blur(function(){
		var ematch = $('#email').val() == $('#vemail').val();
		if(ematch == true){
			console.log("in loop");
			$(this).css('border','1px solid #13ad51');
		}
		else{
			console.log("in else loop");
			$(this).css('border','1px solid #ff3162');
		}
	});

/*------------------------------MOBILE NUMBER-------------------------------------*/

	$('#mob').keypress(function(e){
		if(e.which < 48 || e.which > 57){
			console.log("in if loop");
			e.preventDefault();
		}

	});

	$('#mob').keyup(function(){
		if($(this).val().length == 10){
			$(this).css('border','1px solid #13ad51');
		}else{
			$(this).css('border','1px solid #ff3162');
		}

	});

/*-------------------------Sending AJAX Request-------------------------------*/

	$('button').click(function(){
		var formDetails = [$('#uid').val(),$('#pass').val(),$('#email').val(),$('#sq1').val(),$('#sa1').val(),$('#sq2').val(),
													$('#sa2').val(),$('#mob').val(),$('#add').val(),$('#com').val()];
		var request = new XMLHttpRequest();
		request.open("POST", "http://localhost:8080", true);
		request.addEventListener("load", function(){
			console.log("check1");
			console.log(request.responseText);
		});
		request.send(formDetails);

	});
return false;

});
