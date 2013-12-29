var events = require('events'),
    inherits = require('util').inherits,
    diff = require('changeset'),
    clone = require('clone'),
    createError   = require('errno').create
    LevelUPError  = createError('LevelUPError')
    NotFoundError = createError('NotFoundError', LevelUPError);

NotFoundError.prototype.notFound = true;
NotFoundError.prototype.status   = 404;

LivelyDb.NotFoundError = NotFoundError;

module.exports = LivelyDb;
module.exports.LivelyDb = LivelyDb;
function LivelyDb() {
  events.EventEmitter.call(this);
}
inherits(LivelyDb, events.EventEmitter);

LivelyDb.prototype.get = function (key, cb) {
  throw new Error('LivelyDb#get() not implemented');
};

LivelyDb.prototype.put = function (key, value, cb) {
  throw new Error('LivelyDb#put() not implemented');
};

LivelyDb.prototype.del = function (key, cb) {
  throw new Error('LivelyDb#del() not implemented');
};
