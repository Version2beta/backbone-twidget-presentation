// bbtwitter.js
// written by Rob Martin @version2beta and Arlen Walker @arlen
// for demonstration of Backbone.js at the June 2012 @web414 meetup

// Models

bbtwitter.Tweet = Backbone.Model.extend({
});

// Collections

bbtwitter.Tweets = Backbone.Collection.extend({
	model: bbtwitter.Tweet,
	url: function () {
    return 'http://search.twitter.com/search.json?q=' + this.query + '&page=' + this.page + '&callback=?'
  },
  parse: function(resp, xhr) {
    return resp.results;
  },
  page: 1,
  query: 'web414bb'
});

