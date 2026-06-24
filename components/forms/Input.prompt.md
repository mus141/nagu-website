Hard-keyline text field. On focus the keyline turns red and a small offset shadow "stamps" the field. Supports label, hint, error, and a left icon.

```jsx
<Input label="Your name" placeholder="Type it" />
<Input label="Search menu" iconLeft={<Search size={16} />} />
<Input label="Phone" error="Enter a valid number" tone="dark" />
```

`tone`: `light | dark`. Pass `error` to show the red error state; `hint` for helper text.
