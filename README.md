# watcher-30-3-test

A stand-in for our server in the Watcher's 30.3 demo (the agent fixes our own code). It has one planted bug: `crm.contacts.update` crashes on a contact with no owner (`contact.owner.id` on `undefined`), which every Client hits as INTERNAL_ERROR.

`npm test` runs the tests with Node's own runner. No dependencies.

Fixes go into `development` through a pull request. `main` and `development` take no direct pushes, and a pull request needs the "Watcher approval" check, which only our server sets when someone approves the fix in the Appnigma inbox.
