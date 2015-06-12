'use strict';

let KindaObject = require('kinda-object');

let KindaWebStorage = KindaObject.extend('KindaWebStorage', function() {
  this.get = function(key) {
    let val = sessionStorage.getItem(key);
    if (val == null) val = localStorage.getItem(key);
    if (val == null) return null;
    return JSON.parse(val);
  };

  this.set = function(key, val, isPersistent) {
    this.remove(key);
    if (val == null) return null;
    let storage = isPersistent ? localStorage : sessionStorage;
    storage.setItem(key, JSON.stringify(val));
    return val;
  };

  this.remove = function(key) {
    sessionStorage.removeItem(key);
    localStorage.removeItem(key);
  };

  this.isPersistent = function(key) {
    let val = localStorage.getItem(key);
    return val != null;
  };
});

module.exports = KindaWebStorage;
