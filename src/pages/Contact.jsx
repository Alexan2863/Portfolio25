import { useState, useEffect } from "react";
import axios from "axios";
import Button from "../components/UI/Button";

const API_URL =
  "https://portfolio-app-c82f9-default-rtdb.firebaseio.com/messages.json";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [submitted]);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await axios.post(API_URL, formData);
      console.log(response.data);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Error:", err);
      setError("Submission failed. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="container mt-4 mb-5">
      <h1>I'd love to hear from you</h1>
      <p>
        Whether you have a question about my work, a potential project, or just
        want to say hello, feel free to reach out. I am always open to
        discussing new ideas and opportunities. You can contact me via email,
        phone, or by filling out the form.
      </p>

      {submitted && (
        <p className="alert alert-success">Message sent successfully!</p>
      )}
      {error && <p className="alert alert-danger">{error}</p>}

      <form onSubmit={handleSubmit} className="shadow p-4 bg-light rounded">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea
            name="message"
            className="form-control"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <Button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
}

export default Contact;
