
(function () {
debugger;
    var url = "http://localhost:58832/";

    // start connection on a different port
    $.connection(url).start().done(function () {
        var someHub = $.connection.connectionHub;

        $.connection.hub.logging = true;
        $.connection.hub.error(function () {
            console.error('An error occurred with the hub connection.');
        });

        // seems to be a bug in CORs signalR client library that
        // the URL host in the connection object is not passed through to the hub
        $.connection.hub.url = url;

        someHub.client.broadCast = function (message) {
            console.log(message);
        };

        // since you have set the `$.connection.hub.url` this now works
        $.connection.hub.start(function () {
            console.log('Connection Established.');
        });

    });
});