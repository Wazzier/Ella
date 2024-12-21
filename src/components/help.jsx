import React, { useEffect, useState } from "react";

const Help = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
  
    fetch("https://api.escuelajs.co/api/v1/users")
      .then((response) => response.json())
      .then((data) => setTeamMembers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div className="min-h-screen bg-[#fce8e8] p-6">
      <div className="help-container max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#f8b097]">How Can We Help You?</h2>

        <div className="faq-section mb-8">
          <h3 className="text-2xl font-semibold text-[#f8b097] mb-6">Frequently Asked Questions</h3>

          <div className="faq-item mb-6">
            <h4 className="text-xl font-medium text-[#f8b097]">How do I sign up?</h4>
            <p className="text-gray-700">
              To sign up, click on the "Sign Up" button on the top right of the page and fill out the registration form. It's a quick and easy process to get started!
            </p>
          </div>

          <div className="faq-item mb-6">
            <h4 className="text-xl font-medium text-[#f8b097]">How can I contact support?</h4>
            <p className="text-gray-700">
              You can reach our support team by emailing us at <strong>support@petalpixel.com</strong>. Our team is always ready to assist you with any issues or questions you may have.
            </p>
          </div>

       
        </div>

        <div className="team-section mb-8">
          <h3 className="text-2xl font-semibold text-[#f8b097] mb-6">Team Staff</h3>
          <div className="team-members grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.length > 0 ? (
              teamMembers.map((user) => (
                <div key={user.id} className="team-member bg-white p-4 rounded-lg shadow-md">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4"
                  />
                  <h4 className="text-lg font-semibold text-[#f8b097]">{user.name}</h4>
                  <p className="text-gray-700">{user.email}</p>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-700">Loading team members...</p>
            )}
          </div>
        </div>

        <div className="contact-info">
          <h3 className="text-2xl font-semibold text-[#f8b097] mb-6">Contact Information</h3>
          <p className="text-gray-700 mb-4">
            If you have any other questions, please reach out to us through our <strong>Contact Form</strong> or email at <strong>help@petalpixel.com</strong>.
          </p>
          <p className="text-gray-700">
            We're here to assist you with any inquiries you may have. Whether it's related to an order, product recommendations, or anything else, our support team will be happy to help.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Help;
