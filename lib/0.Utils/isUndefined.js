Meteor.isUndefined = (function () {
	if (Meteor.isClient) {
		return function (varName) {
			return window[varName] === undefined;
		};
	}
	if (Meteor.isServer) {
		return function (varName) {
			return global[varName] === undefined;
		};
	}
})();
