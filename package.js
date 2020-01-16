Package.describe({
    name: 'chfritz:accounts-zotero',
    summary: "Login service for Zotero accounts",
    git: 'https://github.com/chfritz/meteor-accounts-zotero',
    version: "0.2.3",
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.2.1');
    api.use('accounts-base', ['client', 'server']);
    // Export Accounts (etc) to packages using this one.
    api.imply('accounts-base', ['client', 'server']);
    api.use('accounts-oauth', ['client', 'server']);
    api.use('chfritz:zotero@0.2.1', ['client', 'server']);

    api.addFiles('zotero_login_button.css', 'client');
    api.addFiles("zotero.js");
});
