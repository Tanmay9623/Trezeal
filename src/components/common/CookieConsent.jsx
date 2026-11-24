import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const storageKey = "trezeal-analytics-consent";

function readConsent() {
  try {
    const storedChoice = window.localStorage.getItem(storageKey);
    return storedChoice === "accepted" || storedChoice === "rejected"
      ? storedChoice
      : null;
  } catch {
    return null;
  }
}

export default function CookieConsent() {
  const [consent, setConsent] = useState(readConsent);
  const [isOpen, setIsOpen] = useState(() => !readConsent());
  const [storageWarning, setStorageWarning] = useState(false);

  useEffect(() => {
    const openPreferences = () => setIsOpen(true);
    window.addEventListener("trezeal:open-cookie-preferences", openPreferences);
    return () =>
      window.removeEventListener(
        "trezeal:open-cookie-preferences",
        openPreferences,
      );
  }, []);

  useEffect(() => {
    const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
    if (consent === "rejected" && window.gtag) {
      window.gtag("consent", "update", { analytics_storage: "denied" });
      return;
    }

    if (consent !== "accepted" || !measurementId) return;
    if (document.getElementById("ga4-loader")) {
      window.gtag?.("consent", "update", { analytics_storage: "granted" });
      return;
    }

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", measurementId);

    const script = document.createElement("script");
    script.id = "ga4-loader";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
    document.head.appendChild(script);
  }, [consent]);

  const chooseConsent = (choice) => {
    setConsent(choice);

    try {
      window.localStorage.setItem(storageKey, choice);
      setStorageWarning(false);
      setIsOpen(false);
    } catch {
      setStorageWarning(true);
    }
  };

  if (!isOpen) return null;

  return (
    <aside className="cookie-consent" aria-label="Cookie preferences">
      <div>
        <h2>Optional analytics</h2>
        <p>
          Trezeal only loads Google Analytics if you allow it and a measurement
          ID is configured. Your choice is stored in this browser.
        </p>
        <Link to="/cookie-policy">Read the cookie policy</Link>
        {storageWarning && (
          <>
            <p role="status">
              Your choice applies for this visit but could not be saved in this
              browser.
            </p>
            <button type="button" onClick={() => setIsOpen(false)}>
              Continue for this visit
            </button>
          </>
        )}
      </div>
      <div className="cookie-consent-actions">
        <button type="button" onClick={() => chooseConsent("rejected")}>
          Reject optional
        </button>
        <button
          className="btn btn-dark"
          type="button"
          onClick={() => chooseConsent("accepted")}
        >
          Allow analytics
        </button>
      </div>
    </aside>
  );
}
