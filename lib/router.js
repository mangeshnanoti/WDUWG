Router.configure({
	layoutTemplate: "layout",
	loadingTemplate:'loading',
	waitOn : function(){ 
		return Meteor.subscribe('businesses');}
});

Router.route('/',function(){
	this.render('new')
});

Router.route('/main',function(){
	this.render('main')
});

Router.route('/details',function(){
	this.render('details')
});

Router.route('/businesses/:_id',
	{name: "businessPost",
	 data:function(){ return Businesses.findOne(this.params._id); }
	});

