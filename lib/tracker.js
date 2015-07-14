if(Meteor.isClient)
{
	Tracker.autorun(function(){
	usr = Meteor.user(this);
	bsns = Businesses.find().fetch();
	currentUserId = Meteor.userId(this);
	elem = 0;
	})
}

