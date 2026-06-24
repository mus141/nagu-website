import * as React from "react";

export interface ProductCardProps {
  /** Image URL for the hero food shot. */
  image?: string;
  /** Product name (rendered in distressed display caps). */
  name: React.ReactNode;
  /** Short flavor descriptor line. */
  tagline?: React.ReactNode;
  /** Price in SR — number or range string; rendered as a stamped PriceTag overlay. */
  price?: React.ReactNode;
  /** Flavor / category chips; the first renders red, the rest outline. */
  tags?: string[];
  /** Action slot under the body, e.g. an Add button or QtyStepper. */
  action?: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
}

/**
 * Hero food card — image block on dark with a stamped price overlay, display-caps
 * name, tagline, flavor tags, and an action slot. Hover-lifts when clickable.
 *
 * @startingPoint section="Content" subtitle="Menu product card with stamped price" viewport="320x380"
 */
export function ProductCard(props: ProductCardProps): React.ReactElement;
