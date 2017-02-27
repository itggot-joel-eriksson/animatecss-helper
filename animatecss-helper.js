Node.prototype.addPrefixedEventListener = function(type, callback) {
	"use strict";

	var prefixes = ["webkit", "moz", "MS", "o", ""];
	for (var i = 0; i < prefixes.length; i++) {
        if (!prefixes[i]) type = type.toLowerCase();
        this.addEventListener(prefixes[i] + type, callback, false);
    }
};

Node.prototype.animateCss = function(animationName) {
	"use strict";

	var node = this;

	return new Promise(function(resolve) {
		node.classList.add("animated", animationName);
		node.addPrefixedEventListener("animationEnd", function() {
			node.classList.remove("animated", animationName);

			resolve(node);
		});
	});
};

NodeList.prototype.animateCss = function(animationName) {
	"use strict";

	var nodes = this;

	var promises = [];

	nodes.forEach(function(node) {
		promises.push(node.animateCss(animationName));
	});

	return Promise.all(promises);
};
