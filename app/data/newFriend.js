const friends = require('./friends');

const NewFriend = function(req) {
  this.name = req.name;
  this.photo = req.photo;
  this.score = req.scores;
  this.bestMatch = 101;
  this.total = 0;
  this.match = '';

  for (let [i] of friends.entries()) {
    this.total = 0;
    for (let [j, v] of this.score.entries()) {
      let diff = Math.abs(this.score[j] - friends[i].scores[j]);
      this.total += diff;
    }
    console.log(this.total);
    if (this.total < this.bestMatch) {
      this.bestMatch = this.total;
      this.match = i;
    }
  }
  console.log(friends[this.match]);
};

module.exports = NewFriend;
