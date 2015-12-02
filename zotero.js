Accounts.oauth.registerService('zotero');
Accounts.oauth.registerService('zoteroAPI');

if (Meteor.isClient) {
  Meteor.loginWithZotero = function(options, callback) {
    // support a callback without options
    if (! callback && typeof options === "function") {
      callback = options;
      options = null;
    }

    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    Zotero.requestCredential(options, credentialRequestCompleteCallback);
  };


  Meteor.getZoteroAPIAccess = function(options, callback) {
    // support a callback without options
    if (! callback && typeof options === "function") {
      callback = options;
      options = null;
    }

    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    Zotero.requestAPIAccess(options, credentialRequestCompleteCallback);
  };

} else {
  Accounts.addAutopublishFields({
      forLoggedInUser: ['services.zotero.username',
                        'services.zotero.id'],
      forOtherUsers: ['services.zotero.username']
  });

  Accounts.addAutopublishFields({
      forLoggedInUser: ['services.zoteroAPI.username',
                        'services.zoteroAPI.id'],
      forOtherUsers: ['services.zoteroAPI.username']
  });
}
