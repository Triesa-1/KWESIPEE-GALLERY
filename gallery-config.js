/**
 * ═══════════════════════════════════════════════════════════
 *  KWESI PEE — GALLERY CONFIGURATION
 *  Text, structure & room metadata only.
 *  Images are stored in separate files (images-*.js).
 * ───────────────────────────────────────────────────────────
 *  TO ADD NEW ARTWORK:
 *  Option A — Google Drive (for new drawings):
 *    Add { driveId: "FILE_ID", title: "...", medium: "...", year: "..." }
 *    to the correct room's artworks array below.
 *
 *  Option B — Send new photos to Claude and ask for a
 *    regenerated images-{room}.js file.
 *
 *  Only replace the file(s) you changed on GitHub.
 * ═══════════════════════════════════════════════════════════
 */

window.GALLERY_CONFIG = {

  site: {
    artistName:      "Kwesi Pee",
    exhibitionTitle: "Lines of Life & Imagination",
    tagline:         "Exploring reality, memory, and imagination through lines and form",
    location:        "Accra, Ghana",
    year:            "2025–2026",
    availability:    "Open for commissions",
    responseTime:    "Within 48 hours",
  },

  hero: {
    eyebrow:     "Digital Exhibition · Ghana · 2025–2026",
    title:       "Kwesi Pee",
    titleItalic: "Lines of Life & Imagination",
    subtitle:    "Exploring reality, memory, and imagination through lines and form",
    ctaText:     "Enter Exhibition",
  },

  about: {
    name: "Kwesi Pee",
    role: "Visual Artist & Illustrator",
    bio: [
      "Kwesi Pee is a self-taught artist whose work lives at the intersection of imagination and lived experience. Drawing from the worlds of anime, gaming culture, and everyday observation, Kwesi brings characters to life with raw, energetic lines that pulse with personality and motion.",
      "Every piece is a conversation between the hand, the page, and the moment — unfiltered, bold, and deeply personal. Kwesi's practice spans pencil sketches, pen work, and vibrant marker illustrations, each medium chosen to match the intensity of the subject.",
      "Based in Ghana, Kwesi Pee continues to evolve a unique visual language that honours both the discipline of traditional drawing and the freedom of pure expression."
    ],
    stats: [
      { number: "64", label: "Works"  },
      { number: "IV",  label: "Rooms"  },
      { number: "GH",  label: "Origin" }
    ]
  },

  contact: {
    heading:    "Commission & Collaborate",
    subheading: "Interested in a custom portrait, collaboration, or simply want to connect? Every commission begins with a conversation.",
    commissionTypes: [
      "Portrait Commission",
      "Character Illustration",
      "Fan Art Commission",
      "Collaboration",
      "General Inquiry"
    ]
  },

  /* ── ROOM STRUCTURE ─────────────────────────────────────────────
     Images are injected from window.IMAGES_* by index.html.
     To add a new Google Drive image, add an entry with driveId here.
     To add an embedded image, add it to the matching images-*.js file.
  ─────────────────────────────────────────────────────────────── */
  rooms: [
    {
      id: "life-roots", roman: "I", title: "Life & Roots",
      desc:     "Pencil studies, nature, and the quiet beauty of observation. Works grounded in memory and the everyday.",
      cardDesc: "A study in line and form, rendered with quiet confidence and careful observation.",
      extra: [] // Add new Drive artworks here: { driveId: "...", title: "...", medium: "...", year: "..." }
    },
    {
      id: "pop-culture", roman: "II", title: "Pop Culture & Influence",
      desc:     "Anime, video games, iconic characters — reimagined through kinetic line work charged with energy and attitude.",
      cardDesc: "Bold, kinetic lines capture the speed and intensity of iconic characters.",
      extra: []
    },
    {
      id: "imagination", roman: "III", title: "Imagination",
      desc:     "Pure creative vision. Original forms, dramatic compositions, and explorations beyond the familiar.",
      cardDesc: "Original vision given shape through expressive, fearless mark-making.",
      extra: []
    },
    {
      id: "sketches", roman: "IV", title: "Sketches & Studies",
      desc:     "The raw material of artistry — gesture drawings, quick studies, and the honest documentation of a growing practice.",
      cardDesc: "A candid look at the creative process — unfiltered and alive.",
      extra: []
    }
  ]

}; // end GALLERY_CONFIG
