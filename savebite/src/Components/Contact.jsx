import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">Get In Touch</h1>

        <p className="text-secondary">
          Have a question or suggestion? We'd love to hear from you.
        </p>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-7">
          <div className="card shadow-sm p-4">
            <h3 className="fw-bold mb-4">Send Us a Message</h3>

            {submitted && (
              <div className="alert alert-success">
                Your message has been submitted successfully!
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <label className="form-label">Full Name</label>

              <input
                type="text"
                className="form-control mb-3"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />

              <label className="form-label">Email Address</label>

              <input
                type="email"
                className="form-control mb-3"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />

              <label className="form-label">Subject</label>

              <input
                type="text"
                className="form-control mb-3"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter the subject"
                required
              />

              <label className="form-label">Message</label>

              <textarea
                className="form-control mb-3"
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                required
              ></textarea>

              <button type="submit" className="btn btn-success w-100">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
