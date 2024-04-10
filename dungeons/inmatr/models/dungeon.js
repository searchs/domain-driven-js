var dungeons = {};

var Dungeons = function (cells) {
  this.cells = cells;
  this.bookedCells = 0;
};

Dungeons.find = function (id, callback) {
  if (!dungeons[id]) {
    dungeons[id] = new Dungeons(100);
  }
  callback(null, dungeons[id]);
};

module.exports = Dungeons;
