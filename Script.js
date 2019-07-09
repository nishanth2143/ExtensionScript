$.connection.hub.start().done(function() {  
        alert("Hub Connected");  
    }).fail(function() {  
        alert("Hub error");  
    })