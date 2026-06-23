# Totally Not Evil Corp™ — New Employee Onboarding

A satirical, interactive **corporate onboarding experience** built as a digital art project for a cultural anthropology autoethnography (ANTH101).

You sign in to an "Employee Portal" and click through a cheerful new-hire onboarding deck. The chipper tone is the surface; the inequality underneath is the point. The piece argues — through irony — that **meritocracy is a story capitalism tells** to make workers internalize bias as personal failure and reproduce it themselves.

**Live site:** https://berrybus.github.io/totally-not-evil-corp/ · **Password:** `anth`

## The slides

0. **Sign in** — a corporate "Employee Portal" login gate (password `anth`).
1. **Cover** — "New Employee Onboarding for Totally Not Evil Corp™."
2. **Merit** — "Congratulations, you *earned* this." Any setback from here is your own. (Marx: the worker as commodity; flaws forced inward.)
3. **Your Role** — "Please stay in your role": a side-by-side ideal-woman (collaborative / agreeable / soft-spoken) vs. ideal-man (authoritative / argumentative / always right). (Butler's gender as *"a stylized repetition of acts"*; Martin on stereotypes hidden in "neutral" language.)
4. **Equality** — "We are all equal here" / "We don't see race," over a cafeteria scene of seated white-collar diners served by Black kitchen staff. (Tatum; Gilmore: *"Capitalism requires inequality. Racism enshrines it."*)
5. **Our Mission** — "Above all, we rise together — to make as much money as possible," with a "Synergy Engine" turning workers' labor into an executive's profit. (Marx's estranged labor.)
6. **Welcome** — "Welcome to the family": you may now begin reproducing this culture for everyone who comes after you.

## Design & tech

- Plain **HTML / CSS / JS** — no build step, no dependencies (just a Google Fonts link for Inter).
- **Illustrations are emoji**, composed with CSS framing (a winner's podium, a serving counter, a profit machine). Emoji are professionally-drawn glyphs rendered by the visitor's OS — a deliberately bland "corporate" look that's part of what the piece critiques. Swap in your own art by editing the scene markup in `index.html`.
- **Image-forward:** each slide is one short slogan plus a large, animated illustration.
- **Mobile-first**, fully responsive: stacks on phones, side-by-side on wider screens. Includes swipe navigation, a `dvh`-based sticky bottom nav (so it isn't hidden by the iOS Safari toolbar), and a single sticky header.
- **Animations:** staggered entrances per slide plus ambient looping motion (spinning gears, floating confetti, bouncing coins, a pulsing CTA). These intentionally run for everyone rather than opting out under `prefers-reduced-motion`, since motion is core to the piece.
- **Navigation:** Next/Back buttons, arrow keys, swipe, and clickable progress chips.

## The login gate is not real security

The password (`anth`) is checked **client-side**, so it — and all the content — are visible to anyone who opens the page source or DevTools. It keeps casual visitors out; it is not real protection. Real password protection requires a host with a server/auth (e.g. Netlify or Cloudflare Access), not GitHub Pages.

## Run it locally

```bash
# just open the file
start index.html        # Windows
open index.html         # macOS

# or serve it
python -m http.server
```

## Deploy / update

The site is already hosted via **GitHub Pages** (deploy from `main` / root). To update it, just push — Pages rebuilds automatically in about a minute:

```bash
git add .
git commit -m "your message"
git push
```

## Sources

- Antipode Foundation (2020), *Geographies of Racial Capitalism with Ruth Wilson Gilmore*
- Butler, Judith (1988), "Performative Acts and Gender Constitution," *Theatre Journal* 40(4)
- Martin, Emily (1991), "The Egg and the Sperm," *Signs* 16(3)
- Marx, Karl ([1844] 2000), "Estranged Labour," *Economic and Philosophic Manuscripts of 1844*
- Tatum, Beverly Daniel (1997), *Why Are All the Black Kids Sitting Together in the Cafeteria?*
- U.S. Census Bureau (2024), "QuickFacts: United States"

---

*This is satire / critique. Every claim made by "the company" is presented to be condemned, not endorsed.*
