import assert from "node:assert/strict";
import { test } from "node:test";
import { toUpdateBody } from "../src/crm/contacts-update.js";

test("sends the owner as its id", () => {
  const body = toUpdateBody({ id: "c-1", email: "jane@example.test", firstName: "Jane", lastName: "Doe", owner: { id: "o-7" } });
  assert.equal(body.properties.hubspot_owner_id, "o-7");
});
