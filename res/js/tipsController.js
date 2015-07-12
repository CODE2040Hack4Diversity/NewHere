var allTips = [];

function tip(){
	this.comment = "";
	this.author = "";
	this.upvotes = 1000;
	this.downvotes = 0;
}

function staticTips(){
	for(x = 0; x < 10; x ++) {
		var newTip = new tip();
		newTip.comment = "Code 2040 is the place to be";
		newTip.author = "Tristan Walker";
		newTip.upvotes = x;
		newTip.downvotes = 10 - x;
		allTips[x] = newTip;
	}
}



$("#get-sf-more-info").click(function(){
    $("#sf-more-info").slideToggle();
  })

 window.onload = function(){
 	  staticTips();
      renderTips();      
 }

 function renderTips(){
 	for(x=0; x < allTips.length; x++) {
   		var tip = document.createElement('div');
   		tip.className = "mdl-cell mdl-cell--7-col";

   		var innerHtml = "<div class=\"mdl-cell mdl-cell--12-col-desktop\">" +
                           "<div class=\"mdl-card mdl-shadow--2dp tip-card\">" +
                                "<div class=\"mdl-card__title\">" +
    				                "<h2 class=\"mdl-card__title-text\">" + allTips[x].author + "</h2>" +
  					            "</div>" +
                                "<div class=\"mdl-card__supporting-text\">" +
                      				  allTips[x].comment + 
                      			"</div>" +
                                "<div class=\"interactive\">" +
                                     "<div class=\"arrow-up\" id=\"upvote" + x.toString()  + "\">" + allTips[x].upvotes + "</div>" +
                                     "<div class=\"arrow-down\" id=\"downvote" + x.toString()  + "\">" + allTips[x].downvotes + "</div>" +
                                "</div>" +
                            "</div>" +
                     "</div>";

  		tip.innerHTML = innerHtml; 
  		document.getElementById('tipsContainer').appendChild(tip);

  		var upvote = document.getElementById("upvote" + x.toString());
  		var downvote = document.getElementById("downvote" + x.toString());

  		upvote.onclick = function(event) {
  			increaseVotes(this.id.charAt(6));
 		 }

  		downvote.onclick = function() {
          decreaseVotes(this.id.charAt(8));
  		}
  	}
 }

 function compare(a ,b ){
 	var aPopularity = a.upvotes - a.downvotes;
 	var bPopularity = b.upvotes - b.downvotes;
 	if(aPopularity > bPopularity){
 		return 1;
 	}else if(aPopularity < bPopularity){
 		return -1;
 	}else{
 		return 0;
 	}
 }

 function increaseVotes(amt){
 	var thisTip = allTips[amt];
 	thisTip.upvotes = thisTip.upvotes + 1;
 	allTips[amt] = thisTip;
 	allTips.sort(compare);
 	document.getElementById("tipsContainer").innerHTML = "";
 	renderTips();
 }



 function decreaseVotes(amt){
  var thisTip = allTips[amt];
  thisTip.downvotes = thisTip.downvotes + 1;
 	allTips[amt] = thisTip;
 	allTips.sort(compare)
 	document.getElementById("tipsContainer").innerHTML = "";
 	renderTips();
 }

 

 










