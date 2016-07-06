const path = require('path'),
      Etcd = require('node-etcd');

module.exports = class nodeRegistery {

	constructor(config) {
		this.etcd = new Etcd(config);
	}

	discoverSrvc(name) {
		this.etcd.get(name, cb => {
			return cb;
		});
	}

	removeSrvc(name) {
		this.etcd.del(name, cb => {
			return cb;
		});
	}

	registerSrvc(name, meta) {
		this.etcd.set(name, meta, cb => {});
	}
};

//# sourceMappingURL=index-compiled.js.map