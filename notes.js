var webStorage = require('kinda-web-storage');

var status = webStorage.get('status');

webStorage.set('status', 'signed-in', { store: 'local' });

webStorage.remove('status');
