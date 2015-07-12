var sf_info = "San Francisco, in northern California, is a city on the tip of a peninsula surrounded by the Pacific Ocean and San Francisco Bay. It's known for its hilly landscape, year-round fog, iconic Golden Gate Bridge, cable cars and colorful Victorian houses. The Financial District's Transamerica Pyramid is its most distinctive skyscraper. In the bay sits Alcatraz Island, site of the notorious former prison.";
var mName = undefined;
var	mLocation = undefined;
var	mPhone = undefined;
var html = undefined;

$.ajax({
	url:"https://api.foursquare.com/v2/venues/explore?ll=37.7,-122.4&oauth_token=LNSA0WL01WTTHCTUGAQAYXZXQEYERWI0QNKLRPKWYKD0DYL0&v=20150711",
	statusCode: {
		404: function() {
			console.log("call didn't work");
		}
	}, success: function(result){
		var foursquare_list = result.response.groups[0].items;
		for (var i=1;i<=10;i++){
			mName = foursquare_list[i-1].venue.name;
			mLocation = foursquare_list[i-1].venue.location.formattedAddress;
			mPhone = foursquare_list[i-1].venue.contact.formattedPhone;

			html = '<p>' + i + '. ';
			html +=  '<span><strong>Name: </strong>'+mName+'</span></p>';
			html += '<p><strong>Location: </strong>'+mLocation+'</p>';
            if (mPhone != undefined) { 
            	html += '<p><strong>Phone: </strong>'+mPhone+'</p>';
            }

          	$("#attraction-data").children().append(html);

			//console.log(mName + ' ' + mLocation + ' ' + mPhone);
		}
	}
});

$("#sf-text").html = sf_info;
$("#get-sf-more-info").click(function(){
	$("#sf-more-info").slideToggle();
});