Template.businessPost.events({

	'click #inc' : function(e)
	{
		Businesses.update({_id:this._id}, {$inc:{count_total:1}});
	},

	'click #dec' : function(e)
	{
		Businesses.update({_id:this._id}, {$inc:{count_total:-1}});

	},

	'click #det' : function(e)
	{
		Router.go('businessPost', {_id:this._id});
	}
})

Template.businessPost.helpers({	details : function(){
	currentUser = this.currentUser;
	name = this.name;
	count_total = this.count_total;
}
})