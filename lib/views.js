App.Views.ShotsViews = Backbone.View.extend({
	initialize: function(){
		this.listenTo(this.collection, 'add', this.renderOne);
		this.listenTo(this.collection, 'reset', this.renderAll);
	},

	className: 'list-shots col-md-10 col-sm-12 col-xs-12',
	tagName: 'ul',

	events: {
		'click .dri-link-user' : 'showShots',
		'click .bt-more' : 'openModalShots',
		'click .overlay' : 'closeModal',
		'click .bt-close' : 'closeModal',
		'keydown' : 'closeModalKey',
	},

	showShots: function(e){
		e.preventDefault();
		$(e.currentTarget).closest('.shots').find('.content-user').toggleClass('show');
		var hModal = screen.availHeight / 1.5;
		var wModal = $(window).outerWidth() / 2;

		$('.modal-users').css('height', hModal);
		$('.modal-info').css('height', hModal);
		$('.modal-image').css('height', hModal);
	},

	openModalShots: function(e){
		e.preventDefault();
		$(e.currentTarget).closest('.shots').find('.modal-container').toggleClass('show');
	},

	closeModal: function(e){
		e.preventDefault();
		$(e.currentTarget).closest('.shots').find('.modal-container').toggleClass('show');	
	},

	closeModalKey: function(e){
		e.preventDefault();
		if (e.which == 27) {
			$('.shots').find('.modal-container').removeClass('show');	
		}
	},

	refresh: function(){
		this.loadingMessage('Carregando...');
		this.collection.fetch();
	},

	populate: function(){
		if(this.collection.isEmpty())
	  		this.refresh();
		else
	  		this.renderAll();
	},

	loadingMessage: function(message){
		this.$('> li').text(message);
	},

	render: function(){		
    	this.populate();
    	return this;
  	},

	renderAll: function() {
		this.$('> span').empty();
		this.collection.forEach(this.renderOne, this);
	},

	renderOne: function(shots){		
		var shotsView = new App.Views.ShotsView({model: shots}).render().$el.appendTo(shotsViews.el);
	}

});


App.Views.ShotsView = Backbone.View.extend({
	tagName: 'li',
	className: 'shots col-md-3 col-sm-12 col-xs-12',
	nome: null,
	render: function() {
		var source = $('#shots_template').html();
		var template = _.template(source);
		var innerHTML = template(this.model.toJSON());
		
		this.$el.html(innerHTML);

		return this;
	}
});