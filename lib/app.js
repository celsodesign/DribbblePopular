App = new (Backbone.View.extend({
  
  Models: {},
  Collections: {},
  Views: {},

  start: function(rootEl){
    this.initializeShots();
    this.render(rootEl);
  },

  initializeShots: function() {
    shots = new App.Collections.Shots([]);
  },

  render: function(rootEl){
    this.el = rootEl;
    this.renderShots();
    return this;
  },

  renderShots: function() {
    shotsViews = new App.Views.ShotsViews({collection: shots});
    shotsViews.render().$el.appendTo(this.el);
  },

}))();