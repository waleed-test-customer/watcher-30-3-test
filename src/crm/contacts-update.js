// crm.contacts.update: turns an SDK call's contact into the CRM's update body.
// The owner is sent as its id, and left out for a contact with no owner.
export const toUpdateBody = (contact) => ({
  id: contact.id,
  properties: {
    email: contact.email,
    firstname: contact.firstName,
    lastname: contact.lastName,
    ...(contact.owner ? { hubspot_owner_id: contact.owner.id } : {}),
  },
});
