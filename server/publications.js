var handle = Meteor.publish('businesses' , function(userId){
		// var usr = usr.username;
		return Businesses.find({user:this.userId});
		console.log(Businesses.find().count());
	});
