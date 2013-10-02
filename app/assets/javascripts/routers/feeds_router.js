NR.Routers.FeedsRouter = Backbone.Router.extend({

  initialize: function ($rootEl, feeds) {
    this.$rootEl = $rootEl;
    this.feeds = feeds;
  },

  routes: {
    "": "index",
    "feeds/:id": "show"
  },

  index: function () {
    var feedsIndexView = new NR.Views.FeedsIndexView({
      collection: this.feeds
    });

    var feed = new NR.Models.Feed();

    var feedFormView = new NR.Views.FeedFormView({
      model: feed,
      collection: this.feeds
    });

    this.$rootEl.html(feedsIndexView.render().$el);
    this.$rootEl.append(feedFormView.render().$el);
  },

  show: function (id) {
    var that = this;
    var feed = this.feeds.findWhere({id: parseInt(id)});
    //feed.get("entries")

    var entries = new NR.Collections.Entries([], { url: "/feeds/" + parseInt(id) + "/entries" });
    entries.fetch({
      success: function () {
        var feedView = new NR.Views.FeedView({
          model: feed,
          collection: entries
        });
        that.$rootEl.html(feedView.render().$el);
      }
    });
  }

});