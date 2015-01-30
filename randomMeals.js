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
	var first = Math.floor(Math.random() * myMeals.length)
	alert(myMeals);
	document.getElementById("firstChoice").value = myMeals[first];
	
}

