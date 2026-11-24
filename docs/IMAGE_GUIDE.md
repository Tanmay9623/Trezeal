# Trezeal image guide

The site uses locally hosted photographs in `public/images/photos/`; visitors'
browsers do not request these images from a third-party host. The photos are
illustrative stock photography, not photographs of Trezeal staff, customers,
offices, or products. Replace them with approved Trezeal images when available,
and obtain permission from people shown in any original photography.

The downloaded photographs are from Unsplash and are used under the
[Unsplash License](https://unsplash.com/license). Attribution is appreciated.
The photo IDs below identify the original Unsplash CDN assets.

| Local file | Original photo ID | Subject | Download dimensions |
| --- | --- | --- | ---: |
| `photos/workspace.jpg` | `photo-1497366754035-f200968a6e72` | Glass-walled office workspace | 1600 × 1068 px |
| `photos/team.jpg` | `photo-1521737711867-e3b97375f902` | Colleagues working around laptops | 1600 × 2399 px |
| `photos/technology.jpg` | `photo-1498050108023-c5249f4df085` | Laptop displaying code | 1600 × 1065 px |
| `photos/learning.jpg` | `photo-1522202176988-66273c2fd55f` | Learners collaborating around a laptop | 1600 × 1067 px |
| `photos/creative.jpg` | `photo-1516321318423-f06f85e504b3` | Person pointing at a laptop | 1600 × 1067 px |
| `photos/ai.jpg` | `photo-1677442136019-21780ecad995` | Blue AI lettering illustration | 1600 × 900 px |
| `photos/resources.jpg` | `photo-1456324504439-367cee3b3c32` | Hands writing in a planner | 1600 × 1067 px |
| `photos/contact.jpg` | `photo-1524758631624-e2822e304c36` | Bright office lounge | 1600 × 1067 px |

| Page or component | Recommended image | Recommended source size | Current alternative text |
| --- | --- | ---: | --- |
| Home hero | Team, work environment or product context | 1920 × 1080 px, landscape | Contemporary office, learners collaborating, or laptop displaying code |
| About hero | Team or working session | 1920 × 1080 px, landscape | Small group collaborating around a laptop; stock image, not Trezeal staff |
| About section | Workspace or team at work | 1400 × 1600 px, portrait/4:5 | Small group collaborating around laptops at a shared table |
| Service pages | Product interface or relevant work context | 1920 × 1080 px, landscape | Describe the visible software, AI illustration, or work setting |
| Student development | Learners working together | 1400 × 1000 px, landscape | Three learners working together around a laptop |
| Project cards | Approved product screenshot or project illustration | 1200 × 750 px, landscape | Describe the illustrative photo; do not imply it is a product screenshot |
| Resources | Learning workspace or original diagram | 1600 × 900 px, landscape | Hands writing notes in an open planner beside coffee |
| Blog article | Original diagram or relevant work-in-progress photo | 1600 × 900 px, landscape | Describe the real subject and the article context |
| Pricing | Approved service-planning or collaboration photo | 1920 × 1080 px, landscape | Describe the actual meeting or work shown |
| Careers and partners | Team collaboration or an approved portrait | 1400 × 1000 px, landscape | Name the person only with written permission |
| FAQ | Original process diagram or service illustration | 1200 × 900 px, landscape | Summarize the diagram’s information |
| Contact hero | Approved work environment | 1920 × 1080 px, landscape | Describe the real scene; do not imply an unverified office |
| Social sharing image | Brand graphic, not a cropped page screenshot | 1200 × 630 px | Decorative image; keep meaningful copy in page metadata |

Page hero sources are configured in `src/data/pageHeroes.js`. Home and student
section sources are in `src/components/home/data.js`; project images are listed
in `src/data/projects.js`. Update those paths and alt descriptions when
replacing a stock photo. The social-sharing image is `public/og-image.svg`.

Long-form sections may also use a locally rendered geometric SVG mark,
gradients, and CSS patterns. Replace a photo slot only with an approved asset;
retain descriptive alt text, record image dimensions, and compress the file
for the web. Leave decorative artwork with empty alternative text when it
conveys no additional information.

Do not use a map screenshot to imply a street address. Trezeal's exact meeting
location is shared after an appointment is confirmed.
