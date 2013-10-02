NR.Collections.Entries = Backbone.Collection.extend({
  model: NR.Models.Entry,
  url: "/feeds/:feed_id/entries"
})