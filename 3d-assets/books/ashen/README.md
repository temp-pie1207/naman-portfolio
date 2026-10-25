# Ashen Books

Extracted from ashen-press. Original source: src/shaders/ashen-press/sources/ashen-press.html

Pinned source SHA-256: 5fe2554e578acac5d55cb466a9564440e7767e38797981f8e829dfd2de0bc90f

The 10 original titles are edition inputs of one book construction. The first source title is the default. Surrounding shelves, page copy, navigation, dust, and unrelated scene artwork are excluded.

Open preview.html using a static HTTP server. Query options: edition, controls=false, background=dark|light|checker|transparent, open=true. The React AshenBooks component accepts the same props, plus className and style; copy the relevant dist/3d-assets/books directories into the host public directory.

createBook(renderer, {edition}) returns a Three.js root group and dispose, plus setOpen/setPage/update for the two reading constructions. mountBook supplies an optional stage, resize handling, keyboard/pointer controls, visibility pause, and cleanup. Keep calling update(dt) while a page or cover settles.

Binary media uses immutable Supabase URLs. assets.js lists the byte-identical optional local assets for explicit self-hosting; it is not an automatic network fallback. Fonts are loaded only by the constructions that use them. Included font licenses cover those source fonts.

Controls: edition selection; pointer or arrow-key rotation; R/Home resets; background selection. Reading books also support Space to open/close and PageUp/PageDown to turn pages. Respect reduced motion and call dispose when removing the standalone view.
