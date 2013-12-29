var LivelyDb = require('..'),
    expect = require('expect.js'),
    noop = function() {};

describe('LivelyDb', function() {
  it('should be able to create an instance of livelydb', function(done) {
    var ldb = new LivelyDb();
    done();
  });

  it('should throw when any of the methods are called', function(done) {
    var ldb = new LivelyDb();
    expect(function() {
      ldb.get('key', noop);
    }).to.throwError(/^LivelyDb#get\(\) not implemented$/);
    expect(function() {
      ldb.put('key', 'value', noop);
    }).to.throwError(/^LivelyDb#put\(\) not implemented$/);
    expect(function() {
      ldb.del('key', noop);
    }).to.throwError(/^LivelyDb#del\(\) not implemented$/);
    done();
  });
});
