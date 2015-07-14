
	Template.header.helpers({
		currentUser : function()
		{
			return Meteor.user(this).username;
		}
	});

