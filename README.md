# livelydb

Abstract base class for Lively live-streaming database implementations.

[![build status](https://secure.travis-ci.org/eugeneware/livelydb.png)](http://travis-ci.org/eugeneware/livelydb)

## Installation

This module is installed via npm:

``` bash
$ npm install livelydb
```

## Description

This is a base class that gets extended by database implementations that wish
to be able to synchronize a remote database with a local javascript object
using the Lively framework.

For an example, check out [MemLively](https://github.com/eugeneware/memlively).

The intention is for implementations of [levelup](https://github.com/rvagg/node-levelup)
and even SQL-based servers to be able to synchronize their data live, in
real-time to a local javascript object in both directions.

## API

### LivelyDb()

Constructor.

### livelydb.get(key, callback)

Retrieve the object stored in the database pointed to by the key.

The callback will be called with an error, and the data as the second argument.

### livelydb.put(key, value, callback)

Puts the object ```value``` into the database, referenced by the key ```key```.

### livelydb.del(key, callback)

Delets the object from the database, referenced by the key ```key```.

