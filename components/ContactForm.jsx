"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setStatus("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message")
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      form.reset();
      setStatus("Messaggio inviato. Ti risponderemo al più presto.");
    } catch (error) {
      setStatus("Errore durante l'invio. Riprova tra poco.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="name">Nome</label>
          <input
            id="name"
            name="name"
            type="text"
            className="form-input"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            className="form-input"
            required
          />
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="message">Messaggio</label>
        <textarea
          id="message"
          name="message"
          className="form-textarea"
          rows="4"
          required
        />
      </div>
      <button className="form-button" type="submit" disabled={loading}>
        {loading ? "Invio in corso..." : "Invia"}
      </button>
      {status ? <p className="form-status" role="status">{status}</p> : null}
    </form>
  );
}
