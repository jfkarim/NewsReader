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

    this.$rootEl.html(feedsIndexView.render().$el);
  },

  show: function (id) {
    var feed = this.feeds.findWhere({id: parseInt(id)});
    var entries = new NR.Collections.Entries(feed.get("entries"));

    var feedView = new NR.Views.FeedView({
      model: feed,
      collection: entries
    });

    this.$rootEl.html(feedView.render().$el);
  }

});