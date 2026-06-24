Hero food card for the menu — image block on dark with a stamped price overlay, display-caps name, flavor tagline, tag chips, and an action slot. Hover-lifts when `onClick` is set. Composes `PriceTag` + `Tag`.

```jsx
<ProductCard
  image="assets/products/korean-beef-smash.jpeg"
  name="Korean Beef Smash"
  tagline="Savory, punchy, distinctive."
  price={24}
  tags={["Asian Twist", "Beef"]}
  action={<Button block>Add</Button>}
  onClick={openItem}
/>
```

Pass `price` as a number or range string ("18–24"). `tags[0]` renders red, the rest outline.
