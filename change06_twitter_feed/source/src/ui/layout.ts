// Deterministic text layout: we wrap text ourselves with canvas measureText so
// every line and word has a known position. That lets the camera aim at exact
// words and lets highlight bars sweep line by line.

export const FONT = "Inter, 'Noto Color Emoji', sans-serif";
export const BODY = { size: 15, lineH: 20, weight: 400 };

export type Word = { text: string; x: number; w: number; start: number; end: number };
export type Line = { words: Word[]; y: number };

let ctx: OffscreenCanvasRenderingContext2D | null = null;
const measure = (s: string, size: number, weight: number) => {
  if (!ctx) ctx = new OffscreenCanvas(1, 1).getContext("2d");
  ctx!.font = `${weight} ${size}px ${FONT}`;
  return ctx!.measureText(s).width;
};

export const wrap = (
  text: string,
  width: number,
  size = BODY.size,
  lineH = BODY.lineH,
  weight = BODY.weight,
  maxLines = Infinity,
): { lines: Line[]; truncated: boolean } => {
  const lines: Line[] = [];
  const space = measure(" ", size, weight);
  let idx = 0;
  let truncated = false;
  const paras = text.split("\n");
  outer: for (const para of paras) {
    let cur: Word[] = [];
    let x = 0;
    const tokens = para.split(" ");
    if (para.length === 0) {
      if (lines.length >= maxLines) { truncated = true; break; }
      lines.push({ words: [], y: lines.length * lineH });
      idx += 1;
      continue;
    }
    for (const tok of tokens) {
      const w = measure(tok, size, weight);
      if (cur.length && x + w > width) {
        if (lines.length + 1 >= maxLines) { lines.push({ words: cur, y: lines.length * lineH }); truncated = true; break outer; }
        lines.push({ words: cur, y: lines.length * lineH });
        cur = [];
        x = 0;
      }
      cur.push({ text: tok, x, w, start: idx, end: idx + tok.length });
      x += w + space;
      idx += tok.length + 1;
    }
    if (lines.length >= maxLines) { truncated = true; break; }
    lines.push({ words: cur, y: lines.length * lineH });
  }
  // drop trailing empty lines
  while (lines.length && lines[lines.length - 1].words.length === 0) lines.pop();
  return { lines, truncated };
};

// Character range [a,b) of a phrase inside text (first match, case-sensitive).
export const rangeOf = (text: string, phrase?: string): [number, number] | null => {
  if (!phrase) return null;
  const a = text.indexOf(phrase);
  return a < 0 ? null : [a, a + phrase.length];
};

export const inRange = (w: Word, r: [number, number] | null) =>
  !!r && w.start < r[1] && w.end > r[0];
