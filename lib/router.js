Router.configure({
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

Router.route('/businesses/:_id', function(){
	var business = Businesses.findOne({_id:this.params.id})
	//this.render('details', {data:business});
	{template: "details"}
});