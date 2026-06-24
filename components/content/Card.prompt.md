Base content surface — square corners, hard black keyline, optional hard offset shadow. The structural container everything else sits in.

```jsx
<Card>Plain paper card</Card>
<Card tone="ink" interactive>Dark, hover-lifts and stamp-presses</Card>
<Card tone="red" shadow={false} padding={28}>Flush red block</Card>
```

`tone`: `paper | cream | ink | red`. `interactive` adds hover-lift + press-stamp. `shadow` toggles the offset block shadow.
