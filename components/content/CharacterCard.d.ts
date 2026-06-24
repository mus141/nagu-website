import * as React from "react";

export interface CharacterCardProps {
  /** Mascot portrait image URL. */
  image?: string;
  /** Character name; the last two letters color red (wordmark treatment). */
  name: string;
  /** Uppercase role / archetype line. */
  role?: React.ReactNode;
  /** Decorative Japanese accent (katakana name, etc). */
  jp?: React.ReactNode;
  /** Collectible card number (zero-padded to 2 digits). */
  number?: number;
  style?: React.CSSProperties;
}

/** Collectible mascot IP card — framed portrait, display-caps name with red tail, role line, JP accent, and a red number stamp. */
export function CharacterCard(props: CharacterCardProps): React.ReactElement;
