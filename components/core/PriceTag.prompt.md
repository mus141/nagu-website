Stamped price block in Saudi Riyal (SR) — display face, hard keyline + offset shadow, tilted slightly like a poster price stamp. Use on menu items, product cards, combos.

```jsx
<PriceTag amount={22} />
<PriceTag amount="18–24" size="lg" tone="ink" />
<PriceTag amount={18} currency="SR" rotate={false} />
```

`tone`: `red | ink | cream`. `size`: `sm | md | lg`. Set `rotate={false}` to sit flat in tight UI rows.
