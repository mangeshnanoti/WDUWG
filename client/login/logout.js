Template.logout.events({
	'click #logout' : function() {
		Meteor.logout(function(){
			console.log("Successful logout.");
		})
		Router.go('/');
	}
})