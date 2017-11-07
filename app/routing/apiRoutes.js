const friends = require('../data/friends');
const NewFriend = require('../data/newFriend');

module.exports = function(app) {
  app.get('/api/friends', function(req, res){
    res.json(friends);
  });
  app.post('/api/friends', function(req, res){
    var newFriend = new NewFriend(req.body);
    friends.push(req.body);
    console.log(newFriend.friend);
    res.json(newFriend.friend);
  });
};
