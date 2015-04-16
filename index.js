"use strict";

var KindaObject = require('kinda-object');

var KindaWebStorage = KindaObject.extend('KindaWebStorage', function() {
  this.get = function(key) {
    var val = sessionStorage.getItem(key);
    if (val == null) val = localStorage.getItem(key);
    if (val == null) return null;
    return JSON.parse(val);
  };

  this.set = function(key, val, isPersistent) {
    this.remove(key);
    if (val == null) return null;
    var storage = isPersistent ? localStorage : sessionStorage;
    storage.setItem(key, JSON.stringify(val));
    return val;
  };

  this.remove = function(key) {
    sessionStorage.removeItem(key);
    localStorage.removeItem(key);
  };

  this.isPersistent = function(key) {
    var val = localStorage.getItem(key);
    return val != null;
  };
});

module.exports = KindaWebStorage;
