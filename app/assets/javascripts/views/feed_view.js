NR.Views.FeedView = Backbone.View.extend({

  tagName: "ul",

  render: function () {
    renderedContent = JST['feed']({
      entries: this.collection, // need the entries of feed
      feed: this.model
    });

    this.$el.html(renderedContent);
    return this;
  }
})