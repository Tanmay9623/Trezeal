import { useState } from "react";
import { Link } from "react-router-dom";

export default function NewsletterForm() {
  const [status, setStatus] = useState({ message: "", type: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const endpoint = import.meta.env.VITE_NEWSLETTER_ENDPOINT;
    if (!endpoint) {
      setStatus({
        message:
          "Newsletter delivery is not configured. Your address was not subscribed.",
        type: "error",
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ message: "", type: "" });

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });

      if (!response.ok) {
        throw new Error(`Newsletter request failed with ${response.status}`);
      }

      form.reset();
      setStatus({
        message: "Thanks. Your subscription request has been received.",
        type: "success",
      });
    } catch {
      setStatus({
        message:
          "We could not subscribe you right now. Please try again later.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form className="newsletter-form" onSubmit={submit}>
        <label         className="sr-only" htmlFor="newsletter-email">
          Email address for Trezeal updates
        </label>
        <input
          autoComplete="email"
          id="newsletter-email"
          name="email"
          placeholder="Your email address"
          required
          type="email"
        />
        <button
          aria-label="Subscribe to Trezeal updates"
          disabled={isSubmitting}
          type="submit"
        >
          {isSubmitting ? "…" : "↗"}
        </button>
        <label className="newsletter-consent">
          <input name="consent" required type="checkbox" />
          <span>I agree to receive occasional updates.</span>
        </label>
        <Link className="newsletter-privacy" to="/privacy-policy">
          Read the privacy policy
        </Link>
      </form>
      <p
        className={`newsletter-status ${status.type ? `newsletter-status-${status.type}` : ""}`}
        role={status.type === "error" ? "alert" : "status"}
        aria-live={status.type === "error" ? "assertive" : "polite"}
      >
        {status.message}
      </p>
    </>
  );
}
