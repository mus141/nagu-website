Primary action control — distressed-caps label on a hard black keyline with the signature offset block-shadow; press "stamps" it down into the shadow. Use for any CTA, order action, or drop button.

```jsx
<Button variant="primary" size="lg" onClick={order}>Order Now</Button>
<Button variant="dark" iconRight={<ArrowRight size={18} />}>See the menu</Button>
<Button variant="outline" size="sm">Add to cart</Button>
```

Variants: `primary` (red, black keyline, black shadow — hovers to bright red), `dark` (black with a *red* offset shadow), `outline` (transparent, black keyline), `ghost` (no shadow/border — secondary text actions). Sizes `sm | md | lg`. `block` stretches full width. Pass `iconLeft` / `iconRight` (Lucide icons recommended, ~18px).
