var allComments = []
var singleComment = {
	author:"Christian Wallker",
	commentID: 0,
	upvotes:1000,
	downvotes:0
};



$("#get-sf-more-info").click(function(){
    $("#sf-more-info").slideToggle();
  })

  window.onload = function(){
    for(x=0; x<9;x++) {
       var tip = document.createElement('div');
       tip.className = "mdl-cell mdl-cell--7-col";

       var innerHtml =    "<div class=\"mdl-cell mdl-cell--12-col-desktop\">" +
                          "<div class=\"mdl-card mdl-shadow--2dp tip-card\">" +
                          "<div class=\"mdl-card__supporting-text\">"+
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
                          "Mauris sagittis pellentesque lacus eleifend lacinia..." +
                          "<div class=\"interactive\">" +
                          "<div class=\"arrow-up\" id=\"upvote" + x.toString()  + "\"></div>" +
                          "<div class=\"arrow-down\" id=\"downvote" + x.toString()  + "\"></div>" +
                          "</div>" +
                          "</div>" +
                          "</div>" +
                          "</div>";
      tip.innerHTML = innerHtml; 
      document.getElementById('tipsContainer').appendChild(tip);

      var upvote = document.getElementById("upvote" + x.toString());
      var downvote = document.getElementById("downvote" + x.toString());

      upvote.onclick = function() {
  		alert("Clicked");
	  }

	  downvote.onclick = function() {
  		alert("Clicked");
	  }
     }
 }




