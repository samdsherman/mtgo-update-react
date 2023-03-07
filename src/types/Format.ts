enum Format {
  Standard = "Standard",
  Pioneer = "Pioneer",
  Modern = "Modern",
  Legacy = "Legacy",
  Vintage = "Vintage",
  Limited = "Limited",
}

export const isFormat = (value: unknown): value is Format => {
  return Object.values(Format).includes(value as Format);
};

export default Format;
