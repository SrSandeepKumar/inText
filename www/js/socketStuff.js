(function(){
    
    var socket = io("http://192.168.167.1:3000");
        socket.on('connect', function() {
            socket.on('text', function(text) {
                alert(text);
        });
    });

    $('form').submit(function(){
        var obj = {
            msg : $('#m').val(),
            from : $('#n').val(),
            to: "kumar",
            IMEI: 1234567890,
            Mobile: 8904565779
        };
      
          // JSON.stringify(obj);
          socket.emit('chat message', obj);
          // $('m').val() = "";
          return false;
    });

    socket.on('chat message', function(message){
        console.log(message);
        var textReceived =  message.from + " Says : " + message.msg ;
           $('#messages').append($('<li>').text(textReceived));
    });

})();
