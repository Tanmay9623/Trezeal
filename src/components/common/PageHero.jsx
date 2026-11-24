import { useState } from "react";

import { fallbackImage } from "../../data/pageHeroes.js";

export default function PageHero({
  eyebrow,
  title,
  emphasis,
  description,
  image,
  alt,
  objectPosition = "center",
  children,
}) {
  const [imageSource, setImageSource] = useState(image);

  const handleImageError = (event) => {
    if (imageSource === fallbackImage) {
      event.currentTarget.style.display = "none";
      return;
    }

    setImageSource(fallbackImage);
  };

  return (
    <section className="page-hero page-hero-with-image">
      <div
        className="page-hero-image-wrap absolute inset-0"
        style={{
          backgroundImage: `url("${imageSource}")`,
          backgroundPosition: objectPosition,
        }}
      >
        <img
          className="page-hero-image h-full w-full object-cover"
          src={imageSource}
          alt={alt}
          style={{ objectPosition }}
          loading="eager"
          onError={handleImageError}
        />
      </div>
      <div className="page-hero-overlay absolute inset-0" aria-hidden="true" />
      <div className="container relative z-10">
        <p className="eyebrow light-eyebrow">
          <span />
          {eyebrow}
        </p>
        <h1>
          {title} {emphasis && <em>{emphasis}</em>}
        </h1>
        <p>{description}</p>
        {children}
      </div>
    </section>
  );
}
