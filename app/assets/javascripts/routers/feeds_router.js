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

    var feedFormView = new NR.Views.FeedFormView({
      collection: this.feeds
    });

    this.$rootEl.html(feedsIndexView.render().$el);
    this.$rootEl.append(feedFormView.render().$el);
  },

  show: function (id) {
    var feed = this.feeds.findWhere({id: parseInt(id)});
    console.log(feed);
    var entries = new NR.Collections.Entries(feed.get("entries"));
    console.log(entries);
    var feedView = new NR.Views.FeedView({
      model: feed,
      collection: entries
    });

    this.$rootEl.html(feedView.render().$el);
  }

});