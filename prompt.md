SEIZ ADLERS — COMPLETE PRODUCTION WEBSITE BUILD PROMPT

ROLE

You are acting as a world-class multidisciplinary digital product studio responsible for designing and engineering the official website of SEIZ ADLERS.

You are simultaneously operating as:

- Creative Director
- Brand Strategist
- UX/UI Designer
- Senior Product Designer
- Senior Frontend Engineer
- Senior Next.js Engineer
- Motion Designer
- 3D/WebGL Engineer
- Conversion Rate Optimization Specialist
- Technical SEO Specialist
- Accessibility Specialist
- Performance Engineer
- Digital Art Director

Your responsibility is NOT to produce a generic website.

You are building the digital headquarters and first major public demonstration of Seiz Adlers' capabilities.

The website itself must demonstrate:

BRANDING + DESIGN + TECHNOLOGY + STRATEGY + GROWTH + ATTENTION TO DETAIL


==================================================
01 — PRIMARY OBJECTIVE
==================================================

Build a production-quality website for:

SEIZ ADLERS

Primary brand statement:

"BUILD THE BRAND PEOPLE REMEMBER."

Supporting statement:

"We create brands, digital experiences and growth systems that turn ambitious businesses into memorable ones."

The website should communicate:

- Premium
- Intelligent
- Modern
- Strategic
- Creative
- Technically sophisticated
- Confident
- Human
- Youthful but mature
- Ambitious
- Business-focused
- Results-oriented

The visitor's emotional progression should be:

0–3 seconds:

"WOW. THIS LOOKS PREMIUM."

5–15 seconds:

"THESE PEOPLE UNDERSTAND BRANDING AND DESIGN."

15–30 seconds:

"THEY UNDERSTAND TECHNOLOGY TOO."

30–60 seconds:

"THEY UNDERSTAND BUSINESS AND GROWTH."

60–120 seconds:

"THERE ARE REAL PEOPLE BEHIND THIS."

2–3 minutes:

"I SHOULD TALK TO THESE PEOPLE."


==================================================
02 — ABSOLUTE DESIGN RULE
==================================================

DO NOT create:

- Generic agency template
- SaaS landing page
- Basic portfolio
- Startup template
- Excessive glassmorphism
- Excessive gradients
- Excessive glowing cards
- Random 3D objects
- Random particles
- Generic illustrations
- Stock-image-heavy sections
- Fake dashboards
- Fake statistics
- Fake testimonials
- Fake awards
- Fake clients
- Fake case studies
- Fake credentials
- Fake technology expertise

The website must feel custom-designed specifically for Seiz Adlers.

Premium does NOT mean adding more effects.

Premium means:

- Better typography
- Better spacing
- Better hierarchy
- Better composition
- Better imagery
- Better interaction
- Better storytelling
- Better restraint


==================================================
03 — EXISTING ASSETS — IMPORTANT
==================================================

The project already contains the company's visual assets inside:

/public

There are already:

- Seiz Adlers logo assets
- Founder/team photographs
- Business card/contact assets
- Brand/reference imagery
- Other supplied visual material

BEFORE DESIGNING ANYTHING:

Inspect the entire /public directory.

Do not assume filenames.

Understand what assets are available and where they belong.

Use the REAL available assets.

DO NOT:

- Generate replacement founder photographs
- Replace supplied faces
- Create fake logos
- Use random stock photos when real company assets exist
- Recreate the logo unnecessarily
- Distort supplied photographs
- Apply filters that significantly alter people's appearance

If an asset is clearly intended for a specific person, correctly map it to that person.

If there are multiple versions of a photo, choose the highest-quality and most suitable version.


==================================================
04 — CRITICAL TEAM PRESENTATION PRINCIPLE
==================================================

This is one of the most important requirements of the entire project.

The team section must NOT feel like:

"Mugesh is the main person and everyone else works below him."

It must feel like:

"ONE TEAM. ONE VISION."

The website should visually communicate:

"Different strengths. One standard."

Even if individual roles have different levels of responsibility, the founding/team experience should communicate collaboration and equal importance.

DO NOT design the team section as a conventional corporate hierarchy.

DO NOT:

- Put one founder in a giant hero portrait
- Put Mugesh visually above everyone else
- Put the others in tiny cards below him
- Number people in a way that implies ranking
- Make the first person visually dominant
- Make the last person visually insignificant
- Make the visual order imply importance
- Create a hierarchy diagram for the main team presentation

Instead create a visual composition where:

- No person is clearly "first"
- No person is clearly "last"
- All portraits have comparable visual weight
- All names use comparable typography
- All roles use comparable typography
- Interaction applies equally to everyone
- Every person can become the visual focus
- Everyone feels like part of the same founding/team story

The team section should feel like:

"These people built this together."

NOT:

"This is one founder with employees underneath him."


==================================================
05 — TEAM DATA
==================================================

The currently supplied team information contains five named people:

1. Nitheesh Chinnusamy
2. Mugesh Muniyappan
3. Dinesh Boopathi
4. Elumalai Kumar
5. Soundhar

There is also an existing organizational reference where Mugesh is shown as Founder & Managing Director, with Creative, Growth, and Digital & Execution functions.

However, DO NOT translate that organizational hierarchy directly into the visual team section.

The team section should communicate collective identity rather than corporate ranking.

Use the actual company information available in the project.

If the exact founding structure or role structure is uncertain, make the data editable.

Create:

data/team.ts

Example:

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  specialization: string
  image: string
  socials?: {
    linkedin?: string
    instagram?: string
  }
  statement?: string
}

NEVER invent biographies.

NEVER invent achievements.

NEVER invent credentials.

NEVER invent awards.

NEVER invent company history.

If information is unavailable, use:

[INSERT BIO]

[INSERT SPECIALIZATION]

[INSERT SOCIAL LINK]


==================================================
06 — BRAND DNA
==================================================

Use the supplied Seiz Adlers visual reference as the PRIMARY BRAND DIRECTION.

The reference establishes:

- Black background
- Electric blue accent
- Premium dark surfaces
- Strong white typography
- Futuristic but sophisticated aesthetic
- Blue handwritten accent typography
- Technology aesthetic
- Digital interface language
- Device/mockup direction
- Eagle-inspired visual language
- Strong hierarchy
- Premium contrast

DO NOT recreate the reference image literally.

DO NOT turn the website into a poster.

Instead:

Extract the brand DNA and translate it into an interactive digital experience.

The result should feel like:

PREMIUM CREATIVE AGENCY

+

HIGH-END TECHNOLOGY COMPANY

+

DIGITAL PRODUCT STUDIO

+

GROWTH CONSULTANCY


==================================================
07 — DESIGN SYSTEM
==================================================

Primary background:

#030405

Secondary background:

#070A0E

Surface:

#0B0F14

Elevated surface:

#10151C

Primary text:

#F5F7FA

Secondary text:

#9AA3AE

Muted text:

#626B76

Primary blue:

#008CFF

Bright blue:

#00A8FF

Deep blue:

#0057A8

Border:

rgba(255,255,255,0.10)

Blue border:

rgba(0,140,255,0.35)

Glow:

rgba(0,140,255,0.25)

Overall visual ratio should feel approximately:

BLACK: 70–80%

WHITE: 15–20%

BLUE: 5–10%

Blue is an accent.

DO NOT make every component blue.


==================================================
08 — TYPOGRAPHY
==================================================

Use a premium modern sans-serif.

Preferred directions:

- Geist
- Inter
- Manrope
- Space Grotesk
- Satoshi

Choose the best combination based on actual visual quality and availability.

Typography should feel:

- Editorial
- Confident
- Tight
- Modern
- Expensive
- Minimal

Hero typography should be extremely large.

Use fluid typography with clamp().

Do not use one fixed desktop font size.

Potential hero range:

100–150px depending on viewport.

Mobile must scale intelligently.


==================================================
09 — HANDWRITTEN ACCENT
==================================================

The handwritten visual treatment from the supplied branding may be used strategically.

Example:

BUILD THE BRAND

People Remember.

Use the handwritten style as an accent.

DO NOT use script typography throughout the website.


==================================================
10 — TECHNOLOGY STACK
==================================================

Preferred stack:

Next.js
TypeScript
Tailwind CSS

Animation:

Framer Motion

Use GSAP only where it provides a meaningful advantage.

3D:

React Three Fiber
Three.js

Only if necessary.

Forms:

React Hook Form
Zod

CMS:

Architecture must be CMS-ready.

For the initial build, structured local data is acceptable.

DO NOT overengineer the initial version.


==================================================
11 — PROJECT ARCHITECTURE
==================================================

Use a scalable architecture similar to:

app/
  page.tsx

  work/
    page.tsx
    [slug]/
      page.tsx

  services/
    page.tsx
    brand-identity/
      page.tsx
    website-development/
      page.tsx
    seo/
      page.tsx
    performance-marketing/
      page.tsx
    content-creation/
      page.tsx
    marketing-automation/
      page.tsx

  about/
    page.tsx

  insights/
    page.tsx
    [slug]/
      page.tsx

  contact/
    page.tsx

  not-found.tsx

components/
  layout/
  ui/
  hero/
  work/
  services/
  method/
  team/
  insights/
  contact/
  motion/
  three/

data/
  team.ts
  services.ts
  projects.ts
  insights.ts
  testimonials.ts
  site.ts

lib/
  utils/
  seo/
  analytics/

styles/
  globals.css

Do not put everything into page.tsx.

Keep components modular and reusable.


==================================================
12 — DATA-DRIVEN CONTENT
==================================================

Do not hardcode every piece of content into JSX.

Services:

{
  slug,
  number,
  title,
  tagline,
  description,
  capabilities,
  process,
  featured
}

Projects:

{
  slug,
  title,
  category,
  services,
  industry,
  description,
  challenge,
  objective,
  strategy,
  solution,
  results,
  images,
  technology
}

Team:

{
  id,
  name,
  role,
  bio,
  specialization,
  image,
  socials
}

Insights:

{
  slug,
  category,
  title,
  excerpt,
  date,
  readingTime,
  image,
  content
}


==================================================
13 — GLOBAL NAVIGATION
==================================================

Desktop navigation:

LEFT:

SEIZ ADLERS LOGO

CENTER/RIGHT:

Work
Services
About
Insights

PRIMARY CTA:

Let's Talk →

Navigation must remain minimal.

Do not crowd the navbar.

Initial state:

transparent

Scrolled state:

dark translucent background
+
subtle backdrop blur
+
thin border

The navbar should feel integrated into the design rather than like a generic SaaS navbar.


==================================================
14 — MOBILE NAVIGATION
==================================================

Mobile navigation should be a premium fullscreen experience.

Menu:

WORK
SERVICES
ABOUT
INSIGHTS
CONTACT

CTA:

START A PROJECT →

Use elegant motion.

Do not make the menu gimmicky.

Touch targets should be approximately 44px minimum.


==================================================
15 — HOMEPAGE STRUCTURE
==================================================

Homepage narrative:

HERO

↓

NOT ANOTHER AGENCY

↓

STRATEGY → BRAND → EXPERIENCE → TECHNOLOGY → GROWTH

↓

SELECTED WORK

↓

WHAT WE BUILD

↓

THE ADLER METHOD

↓

CREATIVE THINKING.
ENGINEERING DISCIPLINE.

↓

FOUR/FIVE MINDS.
ONE VISION.

↓

WHY SEIZ ADLERS

↓

MANIFESTO

↓

INSIGHTS

↓

LET'S BUILD SOMETHING GREAT.

↓

FOOTER

Do not make every section visually identical.

Each section should have its own visual rhythm.


==================================================
16 — HERO
==================================================

This is the most important part of the site.

Create a cinematic, premium hero.

Headline:

BUILD
THE BRAND
PEOPLE REMEMBER.

Alternative composition:

BUILD THE BRAND

People Remember.

Use the handwritten accent for:

People Remember.

Supporting copy:

"We create brands, digital experiences and growth systems that turn ambitious businesses into memorable ones."

CTA 1:

START A PROJECT →

CTA 2:

EXPLORE OUR WORK ↓

The hero should occupy most of the initial viewport.


==================================================
17 — HERO VISUAL
==================================================

Create a sophisticated visual environment.

Potential elements:

- Abstract eagle-inspired geometry
- Digital identity system
- Thin blue light lines
- UI fragments
- Typography fragments
- Device fragments
- Data points
- Network connections
- Subtle geometric forms

If 3D is implemented:

- Low-poly
- Optimized
- Subtle
- Black/chrome
- Blue reflections
- Slow movement
- Subtle mouse response

DO NOT make a giant eagle logo.

DO NOT make 3D the entire website.

The visual must support the brand story.


==================================================
18 — PERFORMANCE-FIRST 3D
==================================================

3D must be:

- Lazy-loaded
- Dynamically imported
- Disabled/simplified on low-power devices
- Simplified on mobile
- Respectful of prefers-reduced-motion
- Equipped with a static fallback

Never allow 3D to damage:

- LCP
- CLS
- INP
- Initial bundle size

If the layout is stronger without 3D:

REMOVE THE 3D.


==================================================
19 — HERO INTERACTIONS
==================================================

CTA hover:

- Subtle magnetic movement
- Subtle blue glow
- Arrow movement
- Slight background shift

Never:

- Bounce
- Shake
- Excessive enlargement
- Cartoon-like effects

Desktop cursor interaction is optional.

Mobile must remain natural.


==================================================
20 — NOT ANOTHER AGENCY
==================================================

Headline:

NOT ANOTHER AGENCY.

A GROWTH PARTNER.

Supporting copy:

"Strategy, creative, technology and growth — brought together under one roof."

Create a scroll-driven sequence:

STRATEGY
↓
BRAND
↓
EXPERIENCE
↓
TECHNOLOGY
↓
GROWTH

Words should activate progressively.

Use typography and spacing rather than excessive effects.


==================================================
21 — WHAT WE BUILD
==================================================

Heading:

WHAT WE BUILD

Supporting:

"From the first idea to measurable growth."

Services:

01
BRAND IDENTITY

"Stand out. Be remembered."

02
WEBSITE DEVELOPMENT

"Build. Optimize. Scale."

03
SEO

"Rank higher. Grow faster."

04
PERFORMANCE MARKETING

"Drive. Convert. Grow."

05
CONTENT CREATION

"Create. Captivate. Convert."

06
MARKETING AUTOMATION

"Automate. Nurture. Scale."

Do not create six identical SaaS cards.

Use an editorial composition.


==================================================
22 — SERVICE INTERACTION
==================================================

Desktop:

Collapsed:

01
BRAND IDENTITY
→

Expanded:

01
BRAND IDENTITY

Strategy
Naming
Visual Identity
Typography
Art Direction
Brand Guidelines

EXPLORE SERVICE →

Other services should subtly reduce emphasis.

Mobile:

Use accordion behavior.

All interactions must remain keyboard accessible.


==================================================
23 — SELECTED WORK
==================================================

Heading:

SELECTED WORK

Supporting:

"Good work speaks for itself."

CRITICAL:

If actual client work does not exist, DO NOT invent it.

Use:

PROJECT 01
COMING SOON

PROJECT 02
COMING SOON

or create an internal Seiz Adlers case study.

Preferred internal project:

SEIZ ADLERS

Brand & Digital Experience

Project cards should contain:

- Large visual
- Project number
- Project name
- Industry
- Services
- Outcome
- View Case Study →

Hover:

- Image zoom
- Metadata movement
- Arrow movement
- Subtle overlay


==================================================
24 — INTERNAL SEIZ ADLERS CASE STUDY
==================================================

Create a real internal case study based on the company itself.

Title:

SEIZ ADLERS

Category:

Brand & Digital Experience

Challenge:

"Create a premium identity and digital presence for a new digital company."

Strategy:

"Combine branding, technology and growth into one cohesive digital experience."

Solution:

"A high-performance interactive website designed to demonstrate the capabilities of the company itself."

Results:

"Performance and business results will be measured after launch."

NEVER fabricate metrics.


==================================================
25 — CASE STUDY ARCHITECTURE
==================================================

Every case study page should support:

Hero
Project Overview
Challenge
Objective
Strategy
Creative Direction
UX Approach
Design System
Development
Results
Gallery
Technology
Final Outcome
CTA

Metadata:

INDUSTRY
SERVICES
TIMELINE
TEAM

If results are unavailable:

"Results will be published after launch."


==================================================
26 — THE ADLER METHOD
==================================================

Heading:

THE ADLER METHOD

Subheading:

"Good work starts before the first pixel."

Stages:

01 DISCOVER

Understand the business, audience and market.

02 DEFINE

Clarify positioning, goals and opportunities.

03 DESIGN

Create a memorable visual and digital experience.

04 DEVELOP

Build a fast, scalable and reliable product.

05 DEPLOY

Launch, measure and learn.

06 GROW

Continuously improve performance.

Create a scroll-driven process experience.

It should feel like moving through a system.


==================================================
27 — CREATIVE + ENGINEERING
==================================================

Heading:

CREATIVE THINKING.
ENGINEERING DISCIPLINE.

Supporting:

"Great digital experiences live where creative thinking meets engineering precision."

Visualization:

CODE
DESIGN
DATA
PERFORMANCE
AUTOMATION
ANALYTICS

↓

BUSINESS GROWTH

The client should understand:

"We care about both how it looks and how it works."

Do not turn this into a developer portfolio.


==================================================
28 — TECHNOLOGY
==================================================

Heading:

BUILT TO PERFORM.

Copy:

"Fast, accessible and scalable digital experiences engineered for real-world performance."

Only show technologies actually used.

Potential editable configuration:

Next.js
React
TypeScript
Node.js
PostgreSQL
AWS
Vercel
Sanity
Shopify
Stripe
Three.js

Do not claim expertise until confirmed.


==================================================
29 — PERFORMANCE VISUALIZATION
==================================================

Create a dashboard-inspired visual inspired by the supplied branding.

Example:

PERFORMANCE
99

ACCESSIBILITY
100

SEO
100

BEST PRACTICES
100

Clearly label it:

EXAMPLE PERFORMANCE BENCHMARK

These are NOT company claims.

After deployment, actual Lighthouse measurements can replace them.


==================================================
30 — TEAM SECTION
==================================================

This section must be one of the emotional highlights of the website.

Heading:

FOUR/FIVE MINDS.
ONE VISION.

Supporting:

"Seiz Adlers started with friends who believed exceptional digital work should not be divided across disconnected teams."

Then:

"Different strengths.
One standard."

CRITICAL VISUAL RULE:

The team must feel like:

ONE TEAM

NOT:

ONE BOSS + EVERYONE ELSE

Even if one person has the title Founder & Managing Director, DO NOT make that person visually dominant.

Avoid:

- Hierarchical organization charts
- One giant portrait above everyone
- One person permanently larger
- First-person/last-person ranking
- Founder numbering
- Different card sizes that imply importance
- Different image quality
- Different visual treatment based on seniority

Instead create:

- Equal portrait scale
- Equal visual weight
- Equal interaction
- Equal typography
- Equal spacing
- Shared composition
- Collective animation

The visual story should be:

COMPLEMENTARY EXPERTISE
→
ONE TEAM
→
ONE STANDARD


==================================================
31 — TEAM INTERACTION
==================================================

Desktop:

Create equal-weight vertical or editorial panels.

Default:

All team members visually balanced.

When hovering a member:

- That member expands slightly
- Their image becomes clearer
- Name becomes more prominent
- Role appears
- Specialization appears
- Short statement appears

Other members subtly recede.

The same interaction MUST work for every team member.

If the first person is hovered, they can become the focus.

If the last person is hovered, they can become the focus.

No member should be permanently dominant.

Mobile:

Use:

- Horizontal scroll
OR
- Stacked cards
OR
- Elegant carousel

Choose the strongest UX.

Do not make mobile feel like an employee directory.


==================================================
32 — TEAM ORDER
==================================================

Do NOT visually communicate:

Founder 01
Founder 02
Founder 03
Founder 04
Founder 05

as a ranking system.

Use actual names.

If a specific data ordering exists internally, do not allow it to translate into visual importance.

The visual composition should make the visitor think:

"These people built this together."

NOT:

"This is his company and these are his employees."


==================================================
33 — FOUNDER/TEAM PHOTOGRAPHY
==================================================

Use the actual photographs from /public.

Do not alter people's identity.

Maintain:

- Natural skin tone
- Natural facial proportions
- Original identity
- Professional presentation

Use a consistent art direction where possible:

- Similar crop
- Similar visual treatment
- Similar image quality
- Similar framing

DO NOT force identical poses.

Different poses can reinforce that these are different people.

The overall treatment should still feel like one team.


==================================================
34 — TEAM INTERACTION MUST NOT CREATE RANKING
==================================================

Avoid:

First person = permanently 2x larger.

Instead:

ALL EQUAL
↓
HOVER ANY PERSON
↓
TEMPORARY EMPHASIS
↓
OTHERS REMAIN VISIBLE
↓
HOVER ANOTHER PERSON
↓
FOCUS TRANSFERS

The interaction should communicate:

"EVERYONE CONTRIBUTES."


==================================================
35 — FOUNDERS STORY
==================================================

Heading:

IT STARTED WITH FOUR FRIENDS.

IMPORTANT:

The currently supplied team data contains five named people.

Therefore, do not hardcode historical claims until the exact founding structure is confirmed.

Make the headline and story configurable.

Possible editable copy:

"We started Seiz Adlers because we believed great digital work should bring strategy, design, technology and growth closer together."

Then:

"Different perspectives.
One shared ambition."

End:

"BUILD SOMETHING WORTH REMEMBERING."

Never fabricate the origin story.


==================================================
36 — WHY SEIZ ADLERS
==================================================

Heading:

WHY SEIZ ADLERS?

Five principles:

01 — ONE TEAM

"No unnecessary handoffs."

02 — STRATEGY FIRST

"We solve the problem before designing the solution."

03 — DESIGN + ENGINEERING

"Beautiful experiences that actually work."

04 — BUILT FOR GROWTH

"The website is a business tool, not just a brochure."

05 — LONG-TERM THINKING

"We build relationships, not one-off deliverables."


==================================================
37 — MANIFESTO
==================================================

Create a cinematic full-screen manifesto.

Black background.

Large typography.

Progressive text reveal.

WE BELIEVE

Brands should mean something.

Websites should do more than exist.

Design should have purpose.

Technology should simplify complexity.

Marketing should be measurable.

Growth should be intentional.

WE BUILD WHAT COMES NEXT.

Keep animation restrained.

The section should feel emotional, sophisticated and memorable.


==================================================
38 — TESTIMONIALS
==================================================

If real testimonials do not exist:

DO NOT invent them.

Instead:

CLIENT TESTIMONIALS
COMING SOON

Design the component so it can later support:

quote
name
role
company
photo
logo
result
project


==================================================
39 — INSIGHTS
==================================================

Categories:

BRANDING
WEB
SEO
GROWTH
TECHNOLOGY
CONTENT

If articles do not exist:

Use clearly labelled draft placeholders.

NEVER publish fake thought leadership.

Each article card:

- Category
- Title
- Excerpt
- Reading time
- Date
- Image
- Arrow

Visual direction:

Premium editorial publication.


==================================================
40 — CONTACT
==================================================

Major final CTA:

LET'S BUILD
SOMETHING GREAT.

Supporting:

"Tell us what you're building, where you're stuck, or where you want to go."

CTA:

START A PROJECT →

The contact experience should feel like starting a collaboration.

Not like filling out a generic corporate form.


==================================================
41 — MULTI-STEP CONTACT FORM
==================================================

STEP 01:

WHAT ARE YOU LOOKING TO BUILD?

Options:

Brand
Website
E-commerce
SEO
Performance Marketing
Content
Automation
Digital Product
Something Else

STEP 02:

TELL US ABOUT THE PROJECT

Use a large text area.

STEP 03:

WHAT IS YOUR TIMELINE?

ASAP
1–3 MONTHS
3–6 MONTHS
EXPLORING

STEP 04:

BUDGET RANGE

Use configurable ranges.

Do not assume final pricing.

STEP 05:

CONTACT INFORMATION

Name
Email
Company
Phone (optional)

Final CTA:

START THE CONVERSATION →

Success message:

WE'VE GOT IT.

"One of the Seiz Adlers team will get back to you shortly."

Do not promise response times unless confirmed.


==================================================
42 — FOOTER
==================================================

Large footer.

SEIZ ADLERS

BUILD THE BRAND
PEOPLE REMEMBER.

Navigation:

WORK
SERVICES
ABOUT
INSIGHTS
CONTACT

Social:

Only use actual supplied profiles.

Contact:

Use actual configured company information.

Bottom:

© 2026 SEIZ ADLERS

Privacy
Terms


==================================================
43 — CONTACT INFORMATION
==================================================

Use centralized configuration.

Do not hardcode contact information throughout components.

Create:

data/site.ts

Example:

export const siteConfig = {
  name: "SEIZ ADLERS",
  email: "...",
  phone: "...",
  website: "...",
  instagram: "...",
  linkedin: "..."
}

Only use verified/supplied information.


==================================================
44 — MOBILE EXPERIENCE
==================================================

Mobile is NOT a compressed desktop layout.

Design mobile intentionally.

Test:

375px
390px
430px
768px
1024px
1280px
1440px
1920px

Requirements:

- No horizontal overflow
- Excellent typography
- Touch-friendly controls
- Minimum ~44px touch targets
- Readable body text
- Simplified motion
- Optimized imagery
- Simplified 3D
- Premium hero
- Intentional spacing
- Sticky CTA only where useful


==================================================
45 — RESPONSIVE DESIGN
==================================================

Support:

Small Mobile
Mobile
Tablet
Desktop
Large Desktop

Do not blindly rely on Tailwind default breakpoints.

Use fluid layouts and clamp() where appropriate.

Desktop container:

Approximately 1440px max-width.

Large visual sections may occasionally use full viewport width.

Grid:

12-column desktop
8-column tablet
4-column mobile


==================================================
46 — MOTION SYSTEM
==================================================

Use motion intentionally.

Available techniques:

- Fade
- Translate
- Scale
- Clip-path
- Mask reveal
- Stagger
- Horizontal movement
- Subtle parallax
- Magnetic buttons
- Image reveal
- Line drawing
- Cursor interaction

Timing:

Fast UI:
150–250ms

Normal:
300–600ms

Hero/editorial:
600–1200ms

Do not animate everything.

Some sections should remain nearly static.

Contrast creates sophistication.


==================================================
47 — ACCESSIBILITY
==================================================

Must include:

- Semantic HTML
- Correct heading hierarchy
- Keyboard navigation
- Visible focus states
- Accessible buttons
- Proper form labels
- Good color contrast
- Image alt text
- Reduced motion support
- No keyboard traps
- No hover-only information
- Accessible accordions
- Accessible navigation
- Accessible dialogs/menus
- Appropriate ARIA only where necessary

The website must remain usable with:

prefers-reduced-motion

enabled.

Never sacrifice accessibility for visual effects.


==================================================
48 — PERFORMANCE
==================================================

Performance is a core design requirement.

Development goals:

Lighthouse Performance: 90+
Accessibility: 95+
Best Practices: 95+
SEO: 95+

These are DEVELOPMENT TARGETS.

They must NOT be presented as marketing claims.

Optimize:

- Fonts
- Images
- JavaScript
- CSS
- Dynamic imports
- 3D
- Animation
- Video
- Third-party scripts

Use Next.js image optimization.

Lazy-load content below the fold where appropriate.

Avoid unnecessary dependencies.


==================================================
49 — IMAGE SYSTEM
==================================================

For every real image:

- Use optimized formats
- Correct dimensions
- Responsive sizes
- Proper alt text
- Lazy load where appropriate
- Priority load only for critical hero imagery

Support:

- Desktop image
- Mobile image
- Gallery images
- Video
- Poster image

Never use random stock imagery merely to fill empty space.


==================================================
50 — SEO
==================================================

Every page needs:

- Title
- Description
- Canonical
- Open Graph
- Twitter/X metadata
- Structured data

Create:

sitemap.xml
robots.txt

Support:

Organization schema
WebSite schema
Breadcrumb schema
Article schema
Service schema

Never create fake review/rating schema.


==================================================
51 — ANALYTICS
==================================================

Create configurable analytics hooks.

Track:

page_view
CTA_click
contact_start
contact_complete
project_view
service_view
outbound_social_click

Do not track unnecessary personal information.

Analytics provider should be replaceable.


==================================================
52 — CUSTOM CURSOR
==================================================

Desktop only.

Normal:

Small subtle dot.

Hover interactive:

Slightly larger.

Project hover:

VIEW

CTA hover:

OPEN →

Disable on:

- Mobile
- Touch
- Reduced motion

Never interfere with normal browser usability.


==================================================
53 — PAGE TRANSITIONS
==================================================

Use subtle transitions.

Possible:

Current page fades/slides
↓
Thin blue line
↓
New page enters

Keep it quick.

Never delay navigation unnecessarily.


==================================================
54 — LOADING EXPERIENCE
==================================================

Minimal.

Potential:

SEIZ ADLERS

────────────

A thin blue progress line.

Target perceived loading:

Under approximately one second where possible.

Never create a 5-second intro.

If content is ready, display it immediately.


==================================================
55 — 404
==================================================

Create an artistic 404.

NOTHING TO SEE HERE.

"Looks like this page took a wrong turn."

BACK HOME →

Optional subtle geometric animation.


==================================================
56 — ERROR STATES
==================================================

Support polished states for:

- Contact failure
- Missing project
- Missing article
- Network issue

Example:

SOMETHING WENT WRONG.

"Let's try that again."

RETRY →


==================================================
57 — CONTENT AUTHENTICITY
==================================================

This rule overrides everything else.

NEVER invent:

- Clients
- Revenue
- Statistics
- Awards
- Certifications
- Testimonials
- Founder credentials
- Client logos
- Case study metrics
- Performance results
- Years of experience
- Number of clients
- Business achievements

If unavailable, use:

COMING SOON

or:

[INSERT REAL RESULT]

or another elegant editable placeholder.


==================================================
58 — VISUAL STORYTELLING
==================================================

The website should feel like entering the Seiz Adlers world.

The emotional sequence:

BLACK

↓

LIGHT

↓

TYPE

↓

MOTION

↓

BRAND

↓

TECHNOLOGY

↓

PEOPLE

↓

GROWTH

↓

ACTION

Final emotional message:

"These people build things worth remembering."


==================================================
59 — MICROCOPY
==================================================

Use concise language.

Examples:

EXPLORE ↓

VIEW CASE STUDY →

EXPLORE SERVICE →

START A PROJECT →

START THE CONVERSATION →

BUILD SOMETHING WORTH REMEMBERING.

Avoid:

"We are a passionate team dedicated to..."

"We leverage cutting-edge solutions..."

"Take your business to the next level..."

"We provide innovative end-to-end solutions..."

Prefer:

We build.
We design.
We engineer.
We measure.
We grow.


==================================================
60 — DESIGN DETAILS
==================================================

Use:

- Thin 1px borders
- Subtle dividers
- Editorial typography
- Large whitespace
- Asymmetric layouts
- Numbers
- Section labels
- Fine blue accents
- Controlled lighting
- Subtle texture

Section labels can use:

01 / INTRODUCTION
02 / SELECTED WORK
03 / CAPABILITIES
04 / PROCESS
05 / PEOPLE
06 / CONTACT

This should create a sophisticated editorial system.


==================================================
61 — ROUTES
==================================================

Implement:

/
 /work
 /work/[slug]

 /services
 /services/brand-identity
 /services/website-development
 /services/seo
 /services/performance-marketing
 /services/content-creation
 /services/marketing-automation

 /about

 /insights
 /insights/[slug]

 /contact

 /404

Architecture must allow future additions:

/client-portal
/resources
/careers
/lab

Do not build future routes unless required.


==================================================
62 — SERVICE PAGES
==================================================

Each service page should feel like its own editorial experience.

Structure:

Hero
↓
Problem
↓
Our Approach
↓
Capabilities
↓
Process
↓
Visual Example
↓
Technology
↓
Related Work
↓
FAQ
↓
CTA

Do not make all six service pages visually identical.

Reuse components but vary composition.


==================================================
63 — ABOUT PAGE
==================================================

About page should include:

Hero
Our Story
Team
Team Philosophy
The Adler Method
Why Seiz Adlers
Creative + Engineering
Manifesto
CTA

The team should be the emotional center.


==================================================
64 — WORK PAGE
==================================================

Create a premium editorial portfolio index.

Do NOT create a generic 3x3 portfolio grid.

Explore:

- Large featured work
- Variable card sizes
- Editorial metadata
- Full-width projects
- Alternating compositions
- Strong typography
- Category filtering only if useful

Do not add filters merely because portfolio sites commonly have filters.

Only add filtering if the number of projects justifies it.


==================================================
65 — INSIGHTS PAGE
==================================================

Treat Insights like a premium editorial publication.

Create:

Featured article
Article list
Category navigation
Reading metadata
Related articles

If there are no actual articles:

Clearly label placeholders as drafts.


==================================================
66 — CONVERSION STRATEGY
==================================================

Primary conversion:

START A PROJECT →

Secondary:

VIEW OUR WORK →

Avoid ten competing CTAs.

Primary journey:

HOME
↓
WORK
↓
CASE STUDY
↓
CONTACT

Secondary:

HOME
↓
SERVICES
↓
SERVICE
↓
CONTACT

Third:

HOME
↓
ABOUT
↓
CONTACT


==================================================
67 — TEAM CONVERSION PSYCHOLOGY
==================================================

The team section should answer:

"Who will actually work on my project?"

The visitor should leave thinking:

"There are real people with complementary strengths behind this."

Show the relationship between disciplines.

Potential visual language:

CREATIVE
+
GROWTH
+
ENGINEERING
+
DIGITAL
+
CONTENT

↓

ONE TEAM

↓

ONE STANDARD

Do not create a rigid hierarchy.


==================================================
68 — ORGANIZATIONAL HIERARCHY VS TEAM IDENTITY
==================================================

This distinction is extremely important.

The company may have an organizational hierarchy.

The website's TEAM IDENTITY section does NOT need to visualize that hierarchy.

Organizational roles can remain accurate in text.

For example:

Founder & Managing Director
Creative Director
Creative Director
Growth Director
Executive Director

But the visual treatment must communicate:

ONE TEAM

not:

TOP PERSON
↓
SUBORDINATES

Do not directly translate an organizational chart into the About/team visual experience.


==================================================
69 — BACKGROUND SYSTEM
==================================================

Use subtle:

- Radial lighting
- Noise
- Grid
- Fine lines
- Geometric patterns
- Blue highlights

Do not use:

- Rainbow gradients
- Huge glowing blobs
- Bright backgrounds
- Excessive particles

The background should appear almost black at first glance.


==================================================
70 — 3D PHILOSOPHY
==================================================

If 3D is used:

It must feel:

- Mysterious
- Premium
- Technical
- Abstract
- Brand-connected

Potential object:

Abstract eagle-inspired geometric sculpture.

Characteristics:

Black/chrome
Subtle blue reflections
Low-poly
Soft lighting
Slow rotation
Subtle mouse response

DO NOT recreate the exact logo in 3D.


==================================================
71 — IMPLEMENTATION ORDER
==================================================

DO NOT attempt to blindly generate the entire application in one pass.

Follow this sequence.

PHASE 01 — AUDIT

Inspect:

- Existing repository
- Entire /public directory
- Existing assets
- Existing dependencies
- Existing configuration
- Existing fonts
- Existing logo
- Existing team photos

Do not overwrite useful existing work.

PHASE 02 — FOUNDATION

Create:

- Design tokens
- Typography
- Layout system
- Container
- Grid
- Buttons
- Navigation
- Footer
- Basic motion utilities

PHASE 03 — HOMEPAGE STRUCTURE

Build:

1. Navbar
2. Hero
3. Not Another Agency
4. Strategy → Growth sequence
5. Work
6. Services
7. Adler Method
8. Creative + Engineering
9. Team
10. Why Seiz Adlers
11. Manifesto
12. Insights
13. CTA
14. Footer

Initially focus on:

LAYOUT + TYPOGRAPHY + HIERARCHY

Do NOT add complex animation yet.

PHASE 04 — RESPONSIVE

Test:

375
390
430
768
1024
1280
1440
1920

Fix layout before adding effects.

PHASE 05 — VISUAL POLISH

Add:

- Image treatments
- Borders
- Lighting
- Fine typography
- Micro-interactions
- Section transitions

PHASE 06 — MOTION

Add motion only after the layout is strong.

PHASE 07 — 3D

Only now evaluate whether 3D improves the experience.

If yes:

Implement optimized 3D.

If no:

Use a high-quality CSS/static visual alternative.

PHASE 08 — INNER PAGES

Build:

- Work
- Case studies
- Services
- Service pages
- About
- Insights
- Articles
- Contact
- 404

PHASE 09 — QUALITY ASSURANCE

Perform:

- Visual QA
- Responsive QA
- Accessibility QA
- SEO QA
- Performance QA
- Keyboard QA
- Reduced-motion QA
- Form validation QA
- Error-state QA


==================================================
72 — VISUAL QA LOOP
==================================================

After every major section:

STOP.

Visually inspect the result.

Ask:

TYPOGRAPHY

- Is hierarchy obvious?
- Does it feel premium?
- Is line-height correct?
- Are headings too large?
- Are body sizes comfortable?

LAYOUT

- Is spacing intentional?
- Is there enough whitespace?
- Is composition too symmetrical?
- Does it feel editorial?

BRAND

- Is blue being overused?
- Does it feel like Seiz Adlers?
- Does the logo look correct?
- Does the eagle influence feel subtle?

INTERACTION

- Does the animation have a purpose?
- Is it too slow?
- Is it distracting?
- Does it still work without motion?

AUTHENTICITY

- Is any claim fabricated?
- Is any image invented?
- Is any statistic misleading?

TEAM

- Does anyone look more important because of placement?
- Does the team feel collective?
- Are all people visually respected equally?
- Does interaction work equally for everyone?

If anything feels generic:

REDESIGN IT.

Do not simply add effects.


==================================================
73 — PERFORMANCE QA
==================================================

Run a production build.

Check:

npm run build

Fix all errors.

Check:

- Hydration
- Image optimization
- Unused JavaScript
- Layout shifts
- Font loading
- Dynamic imports
- 3D bundle
- Animation performance
- Mobile performance

Do not accept a visually beautiful but slow website.


==================================================
74 — ACCESSIBILITY QA
==================================================

Verify:

Keyboard navigation
Tab order
Focus states
Screen-reader labels
Heading hierarchy
Contrast
Form labels
Error messages
Reduced motion
Menu accessibility
Accordion accessibility

No important information should require hover.


==================================================
75 — SEO QA
==================================================

Verify every route has:

title
description
canonical
OG metadata
Twitter/X metadata

Check:

sitemap
robots
structured data
breadcrumbs

Do not generate fake review schema.


==================================================
76 — ERROR HANDLING
==================================================

Implement appropriate:

loading.tsx
error.tsx
not-found.tsx

The experience should remain branded even when something fails.


==================================================
77 — CODE QUALITY
==================================================

Code must be:

- TypeScript
- Strongly typed
- Modular
- Maintainable
- Reusable
- Scalable
- Production-ready

Avoid:

- Giant components
- Repeated JSX
- Hardcoded content everywhere
- Magic numbers
- Unnecessary dependencies
- Unused components
- Dead CSS
- Duplicate logic


==================================================
78 — DO NOT OVERENGINEER
==================================================

Do not introduce technology merely to demonstrate technical ability.

If CSS solves it elegantly:

USE CSS.

If Framer Motion is sufficient:

USE FRAMER MOTION.

If 3D adds no meaningful value:

DO NOT USE THREE.JS.

Engineering maturity should be demonstrated through restraint.


==================================================
79 — FINAL QUALITY BAR
==================================================

Before declaring the project complete, ask:

Does this look like a serious premium digital agency built this?

Does it feel custom?

Does it feel like Seiz Adlers?

Does it look expensive without looking excessive?

Does the typography feel premium?

Does the website demonstrate strategic thinking?

Does it demonstrate technical ability?

Does it demonstrate creativity?

Does the team feel like a real team?

Does anyone visually appear subordinate?

Does the website avoid fake proof?

Does mobile feel intentionally designed?

Does it remain excellent without animation?

Is the website fast?

Is it accessible?

Is the conversion path obvious?

Would a serious business owner trust these people with their brand?

If the answer is no:

CONTINUE REFINING.


==================================================
80 — FINAL NON-NEGOTIABLES
==================================================

NEVER:

- Invent information
- Invent clients
- Invent metrics
- Invent awards
- Invent testimonials
- Invent founder achievements
- Replace supplied faces
- Ignore supplied assets
- Distort the logo
- Use random stock imagery
- Overuse blue
- Overuse gradients
- Overuse glass
- Overuse 3D
- Overuse animations
- Add fake AI features
- Add unnecessary chatbot
- Add autoplay audio
- Add intrusive popups
- Make users wait for a fancy intro
- Hide important information behind animation
- Sacrifice accessibility
- Sacrifice performance

ALWAYS:

- Use real supplied assets
- Keep information editable
- Keep claims authentic
- Maintain consistent brand language
- Prioritize typography and layout
- Make interactions purposeful
- Make mobile intentional
- Keep the team visually collaborative
- Test accessibility
- Test performance
- Test responsiveness
- Inspect the final result visually


==================================================
81 — CORE CREATIVE DIRECTION
==================================================

Everything should ultimately communicate:

STRATEGY
+
CREATIVE
+
TECHNOLOGY
+
GROWTH

And emotionally:

BLACK
↓
LIGHT
↓
TYPE
↓
MOTION
↓
BRAND
↓
TECHNOLOGY
↓
PEOPLE
↓
GROWTH
↓
ACTION

The visitor should finish thinking:

"THESE PEOPLE BUILD THINGS WORTH REMEMBERING."


==================================================
82 — MOST IMPORTANT TEAM PRINCIPLE
==================================================

The team section must communicate:

DIFFERENT STRENGTHS.
ONE STANDARD.

Not:

ONE PERSON ABOVE EVERYONE.

The website may accurately show people's roles.

It must NEVER visually imply that one person's:

- Photograph
- Placement
- Size
- Animation
- Card treatment
- Color treatment
- Typography
- Position in the sequence

makes them the "main character."

Every team member should feel like a meaningful part of the Seiz Adlers identity.

The final impression should be:

"This is a team of complementary people who built Seiz Adlers together."

NOT:

"This is one founder with a few people working under him."


==================================================
83 — FINAL IMPLEMENTATION INSTRUCTION
==================================================

Do not treat this prompt as a checklist where every requested feature must be visually added.

Treat it as a DESIGN + UX + ENGINEERING SYSTEM.

Prioritize in this order:

1. Brand
2. Typography
3. Layout
4. Content hierarchy
5. Imagery
6. UX
7. Interaction
8. Motion
9. 3D

If adding a feature makes the website worse:

DO NOT ADD IT.

If a section feels generic:

REDESIGN THE COMPOSITION.

If an animation exists only because the technology allows it:

REMOVE IT.

If a visual effect competes with the content:

REMOVE IT.

If the team composition creates hierarchy accidentally:

REDESIGN IT.

If information is unavailable:

USE AN EDITABLE PLACEHOLDER.

If an asset already exists in /public:

USE THE REAL ASSET.

If the supplied branding provides a visual clue:

TRANSLATE ITS DNA RATHER THAN COPYING IT.

The final website must feel:

CUSTOM.

INTENTIONAL.

PREMIUM.

HUMAN.

TECHNICALLY SOPHISTICATED.

RESTRAINED.

MEMORABLE.


==================================================
84 — FINAL BRAND STATEMENT
==================================================

BUILD THE BRAND PEOPLE REMEMBER.