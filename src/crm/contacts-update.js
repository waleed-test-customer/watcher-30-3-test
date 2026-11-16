// crm.contacts.update: turns an SDK call's contact into the CRM's update body.
// The owner is sent as its id.
export const toUpdateBody = (contact) => ({
  id: contact.id,
  properties: {
    email: contact.email,
    firstname: contact.firstName,
    lastname: contact.lastName,
    hubspot_owner_id: contact.owner.id,
  },
});
