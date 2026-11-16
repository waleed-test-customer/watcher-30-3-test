import assert from "node:assert/strict";
import { test } from "node:test";
import { toUpdateBody } from "../src/crm/contacts-update.js";

// The Watcher's problem: crm.contacts.update failed with INTERNAL_ERROR for 3
// Clients. The cause: a contact with no owner. Fails before the fix.
test("updates a contact with no owner, leaving the owner out", () => {
  const body = toUpdateBody({ id: "c-2", email: "sam@example.test", firstName: "Sam", lastName: "Lee" });
  assert.equal(body.id, "c-2");
  assert.equal("hubspot_owner_id" in body.properties, false);
});
