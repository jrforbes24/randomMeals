var myMeals =[];

function text2Array () {
	myMeals = document.getElementById("meals").value.split(',');
}

function reveal() {
	var mealBox = document.getElementById("meals");
	
	  if (mealBox.style.display == "block") {
		  mealBox.style.display = "none";
	  }
	  else {
		mealBox.style.display = "block";
	  }
          	 
}

function getMeals () {
	
	for(var i =0; i<3; i++){
		
		
		var rand = Math.floor(Math.random() * myMeals.length)

		document.getElementById(i).innerHTML = myMeals[rand];
	
	}
	
	
	
	
	
	
}


