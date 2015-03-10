Template.postItem.helpers({
  domain: function() {
    var a = document.createElement('a');
    a.href = this.url;
    return a.hostname;
  },
  ownPost: function(){
  	console.log(this);
  	return this.userId == Meteor.userId();
  }

});