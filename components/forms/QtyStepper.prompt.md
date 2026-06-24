Quantity stepper for cart and item screens — two hard-keyline square buttons (black, hover to red) flanking a display-face tabular count.

```jsx
const [qty, setQty] = React.useState(1);
<QtyStepper value={qty} onChange={setQty} />
<QtyStepper value={qty} onChange={setQty} size="lg" min={1} max={20} />
```

Controlled: pass `value` + `onChange`. `size`: `sm | md | lg`. Clamps to `min`/`max`.
