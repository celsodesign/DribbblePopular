App.Models.Shots = Backbone.Model.extend({
	defaults: {
		title: 'Sem texto',
		likes_count: 'Sem texto',
		images: {
			hidpi: '',	
			teaser: '',	
		},
		likes_count: '0',
		user: {
			avatar_url: 'Sem texto',
			bio: 'Sem texto',
			name: 'Sem texto',
		},
  	},
});
