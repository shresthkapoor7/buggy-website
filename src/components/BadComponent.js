import React from "react";

function BadComponent() {
  const userData = {
    name: "Visitor",
    bio: "<script>alert('XSS!')</script>"
  };

  return (
    <div>
      <h2>About User</h2>

      {/* Security issue: unsafe raw HTML injection */}
      <div dangerouslySetInnerHTML={{ __html: userData.bio }} />

      {/* Missing alt text (a11y issue) */}
      <img src="https://placekitten.com/200/300" />

      {/* Exposed secret for testing scanners */}
      <p>API_KEY = "12345-SECRET-TOKEN"</p>
    </div>
  );
}

export default BadComponent;