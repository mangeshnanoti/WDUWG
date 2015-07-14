$('document').ready(function(){
	$('body').click(function(event)
	{
		console.log(event.target.nodeName);
	})
})