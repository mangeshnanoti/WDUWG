Template.addBizTemp.events({
'click #addb' : function(e){
    e.preventDefault();
	val = newb.value;
	if(val === '')
	{
		alert("No Value inserted");
	}
	else
	{
	Businesses.insert({

		name:val, 
		count_total:0,
		user:Meteor.userId()
	});
}
}
})