// phone.js

// Split the phone number into parts
const area = "416";
const prefix = "994";
const line = "7266";

// Construct formatted number and tel link
const formatted = `${area}-${prefix}-${line}`;
const telLink = `tel:${area}${prefix}${line}`;

// Insert into the anchor with ID 'phone-link'
document.addEventListener("DOMContentLoaded", () => {
  const phoneAnchor = document.getElementById("contact-link");
  if (phoneAnchor) {
    phoneAnchor.textContent = formatted;
    phoneAnchor.href = telLink;
  }
});
