# accounts-zotero

A login service for Zotero, providing two functions on the client:

`Meteor.loginWithZotero(options, callback)`

Provide simple login-with-zotero service.

`Meteor.getZoteroAPIAccess(options, callback)`

Provides the above but in addition asks the user to authenticate a
zotero-created key to their API, available henceforth in the
`user.service.zoteroAPI.accessToken` object on the server.

See https://www.zotero.org/support/dev/web_api/v3/start for what you
can do with that.
