App.Collections.Shots = Backbone.Collection.extend({
	initialize: function(models, options){
		Backbone.Collection.prototype.initialize.call(this, arguments);
	},
	url: 'https://api.dribbble.com/v1/shots?sort=viewsuser&access_token=2c48f81bf4957e1bfb80bfad0823f2cc2eaff65539dfb3febbbfa28fb3570a4f',
	model: App.Models.Shots,
	fetch: function(options) {
		options = options || {};
		Backbone.Collection.prototype.fetch.call(this, options);
	}
});