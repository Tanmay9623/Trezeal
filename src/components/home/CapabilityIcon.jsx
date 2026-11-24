const iconContent = {
  ai: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <path d="M9 9h6v6H9zM2 9h2m-2 6h2m16-6h2m-2 6h2M9 2v2m6-2v2m-6 16v2m6-2v2" />
    </>
  ),
  automation: (
    <>
      <circle cx="6" cy="7" r="2" />
      <circle cx="18" cy="17" r="2" />
      <path d="M8 7h3a3 3 0 0 1 3 3v4a3 3 0 0 0 3 3m-7-8 2-2m-2 2 2 2" />
    </>
  ),
  responsive: (
    <>
      <rect x="3" y="5" width="13" height="10" rx="1.5" />
      <path d="M7 19h5m-2-4v4" />
      <rect x="18" y="8" width="4" height="9" rx="1" />
      <path d="M19.5 14.5h1" />
    </>
  ),
  software: (
    <>
      <path d="m8 7-5 5 5 5m8-10 5 5-5 5m-2-12-4 14" />
    </>
  ),
  digitisation: (
    <>
      <path d="M7 3h7l4 4v14H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
      <path d="M14 3v5h5m-10 4h6m-6 4h6" />
    </>
  ),
  dashboard: (
    <>
      <path d="M3 19V5m0 14h18" />
      <path d="m6 15 4-4 3 2 6-7m-1 0h2v2" />
    </>
  ),
  project: (
    <>
      <path d="m4 16-.8 4.8L8 20l11-11a2.8 2.8 0 0 0-4-4L4 16Z" />
      <path d="m13.5 6.5 4 4M3 5h5m-5 4h3" />
    </>
  ),
  career: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m-13 5h18m-11 0v2h4v-2" />
    </>
  ),
};

export default function CapabilityIcon({ name }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {iconContent[name]}
    </svg>
  );
}
