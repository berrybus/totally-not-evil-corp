# Totally Not Evil Corp™ — New Employee Orientation

A satirical, interactive **corporate onboarding experience** built as a digital art project for a cultural anthropology autoethnography (ANTH101).

You click "Next" through a cheerful new-hire orientation. The chipper tone is the surface; the inequality underneath is the point. The deck argues — through irony — that **meritocracy is a story capitalism tells** to make workers internalize bias as personal failure and reproduce it themselves.

## The modules

1. **Your Achievement** — "You earned this, purely on merit." (Marx: the worker as commodity; flaws forced inward.)
2. **Your Role** — a side-by-side "ideal female vs. ideal male colleague" chart. (Butler's gender as *"a stylized repetition of acts"*; Martin on stereotypes hidden in "neutral" language.)
3. **Equality** — "We are all equal," over an image of seated white-collar diners served by Black staff. (Tatum; Gilmore: *"Capitalism requires inequality. Racism enshrines it."*)
4. **Our Mission** — "We rise together… to make as much money as possible." (Marx's estranged labor.)
5. **Sign-Off** — agree that your chains are a personal choice.
6. **Artist's Statement** — the reveal: sources, thesis, and what each module was really doing.

## Run it

It's plain HTML/CSS/JS — no build step.

```bash
# just open it
open index.html        # macOS
start index.html       # Windows

# or serve locally
python -m http.server
```

## Deploy to GitHub Pages

1. Create a repo and push these files to `main`.
2. **Settings → Pages → Source: Deploy from a branch → `main` / `root`.**
3. Your site goes live at `https://<username>.github.io/<repo>/`.

## Notes

- The illustrations are hand-coded inline SVG in the flat "corporate Memphis" style — the same visual language real companies use for "we're all happy and equal!" communications, which is part of what the piece critiques. Swap in your own art by replacing the `<svg>` blocks in `index.html`.
- This is **satire / critique**. Every claim made by "the company" is presented to be condemned, not endorsed.

## Sources

- Antipode Foundation (2020), *Geographies of Racial Capitalism with Ruth Wilson Gilmore*
- Butler, Judith (1988), "Performative Acts and Gender Constitution," *Theatre Journal* 40(4)
- Martin, Emily (1991), "The Egg and the Sperm," *Signs* 16(3)
- Marx, Karl ([1844] 2000), "Estranged Labour," *Economic and Philosophic Manuscripts of 1844*
- Tatum, Beverly Daniel (1997), *Why Are All the Black Kids Sitting Together in the Cafeteria?*
- U.S. Census Bureau (2024), "QuickFacts: United States"
