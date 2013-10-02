NR.Views.FeedFormView = Backbone.View.extend({
  render: function () {
    var renderedContent = JST["feed_form"]();

    this.$el.html(renderedContent);
    return this;
  },

  events: {
    "click input[type=submit]": "addFeed"
  },

  addFeed: function (event) {
    event.preventDefault();
    var formData = $("form.create-feed").serializeJSON();

    this.collection.create(formData.feed);

  }
});