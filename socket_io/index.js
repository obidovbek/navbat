let app = require('express')();
let server = require('http').createServer(app);
let io = require('socket.io')(server);
users = {};
officers = {};
io.on('connection', (socket) => {
  console.log('connection', socket.username)
  socket.on('disconnect', function(){
    delete users[socket.username];
    // io.emit('users-changed', {user: socket.username, event: 'left'});   
  });
  

  /////////new politex queue system
  socket.on('set-officer-data', (officer) => {
    users[officer.id] = socket.id;
    officers[officer.id] = officer;
    socket.username = officer.id;
    io.emit('users-changed', {user: name, event: 'officer joined'});    
  }); 
  /////////////////////////////////
  /////////politex queue system
  socket.on('set-name-queue', (name) => {
    users[name] = socket.id;
    socket.username = name;
    io.emit('users-changed', {user: name, event: 'queue joined 2'});    
  }); 
  socket.on('queue_next', (data) => {
      io.emit('queue_next_user', {data: data});    
  });
  socket.on('queue_new_user', (data) => {
      io.emit('queue_send_officer', {data: data});    
  }); 

  /////////////////////////////////



  socket.on('set-name', (name) => {
    users[name] = socket.id;
    socket.username = name;
    io.emit('users-changed', {user: name, event: 'joined'});    
  });
  
  socket.on('send-message', (message) => {
    if (message.send_to) {
      io.to(users[message.send_to]).emit('message', {msg: message.text, user: message.sender_token, createdAt: new Date()});    
    }else{
      io.emit('message', {msg: message.text, user: socket.username, createdAt: new Date()});    
    }
  });
  socket.on('new-messager', (new_messager) => {
      let message_to = {};
      for(key in new_messager){
        if(key !== 'send_to')message_to[key]=new_messager[key];
      }
      io.to(users[new_messager.send_to]).emit('messager', {message_to});    
  });
  socket.on('change_order', (message) => {
      let message_to = {};
      for(key in message){
        if(key !== 'send_to')message_to[key]=message[key];
      }
      // delete message_to['send_to'];
      io.to(users[message.send_to]).emit('order', {message_to});    
  });
});
 
var port = process.env.PORT || 3001;
 
server.listen(port, function(){
   console.log('listening in http://localhost:' + port);
});