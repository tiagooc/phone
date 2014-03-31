

var storeObject = Object();

$(document).on('pagebeforeshow', '#welcome', function(){
    $(function(){
        $('#side-menu').slideMenu();
    });
    
	$(document).on('click', '#helloButton', function(){
        // store some data
        
        storeObject.firstname = $('#name').val();
        console.log(storeObject.firstname);
        //Change page
        $.mobile.changePage("#hello");
    });
});

$(document).on('pagebeforeshow', '#hello', function(){
	console.log("hello loaded");
	console.log(storeObject.firstname);
	$('#spanName').html(storeObject.firstname);
});