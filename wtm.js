if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to What's the Move.";
  };

  Template.hello.events({
    'click input': function () {
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
