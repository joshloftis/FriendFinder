const friends = require('./friends');

const NewFriend = function(req) {
  this.scores = req.scores;
  this.bestMatch = 101;
  this.total = 0;
  this.match = '';

  for (var i = 0; i < friends.length; i++) {
    this.total = 0;
    for (var j = 0; j < this.scores.length; j++) {
      var diff = Math.abs(this.scores[j] - friends[i].scores[j]);
      this.total += diff;
    }
    if (this.total < this.bestMatch) {
      this.bestMatch = this.total;
      this.match = i;
    }
  }
  this.friend = friends[this.match];
};

module.exports = NewFriend;
