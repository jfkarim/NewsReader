window.NR = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function($rootEl, feeds) {
    var feedsCollection = new NR.Collections.Feeds(feeds);
    new NR.Routers.FeedsRouter($rootEl, feedsCollection);
    Backbone.history.start();
  }
};
