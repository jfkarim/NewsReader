NR.Views.FeedsIndexView = Backbone.View.extend({

  tagName: 'ul',

  render: function () {
    renderedContent = JST['feeds_index']({
      feeds: this.collection
    });

    this.$el.html(renderedContent);
    return this;
  }
})