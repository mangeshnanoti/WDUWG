Meteor.startup(function(){try{
var userId = Meteor.userId(this);
}catch(e)
{
	console.log(e);
}
Meteor.subscribe('businesses',userId);
})
