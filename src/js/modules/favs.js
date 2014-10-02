define(['store', 'underscore'], function(store, _) {

  var Favs = function() {};

  Favs.prototype.key = 'faves';

  Favs.prototype.get = function() {
    var favesList = store.get(this.key);
    if(typeof favesList === "undefined") {
      return [];
    }
    else {
      return favesList;
    }
  };

  Favs.prototype.set = function(faves) {
    store.set(this.key, faves);
  };

  Favs.prototype.fav = function(teamId) {
    var favs = this.get();
    favs.push(teamId);
    this.set(_.uniq(favs));
  };

  Favs.prototype.unFav = function(teamId) {
    var favs = this.get();
    this.set(_.without(favs, teamId));
  };

  Favs.prototype.isFav = function(teamId) {
    var favs = this.get();
    return _.indexOf(favs, teamId) !== -1;
  };

  return Favs;

});
