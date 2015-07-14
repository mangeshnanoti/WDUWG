Businesses = new Mongo.Collection("businesses");

Businesses.allow({
	update:function(userID, doc){
		return true;
	},
	remove:function(userID, doc){
		return true;
	},
	insert:function(userID, doc){
		return true;
	}
})