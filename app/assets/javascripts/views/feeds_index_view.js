NR.Views.FeedsIndexView = Backbone.View.extend({

  initialize: function () {
    this.listenTo(this.collection, "change", this.render.bind(this));
  },

  tagName: 'ul',

  render: function () {
    var that = this;

    var renderedContent = JST['feeds_index']({
      feeds: that.collection
    });

    that.$el.html(renderedContent);
    return that;
  }
})