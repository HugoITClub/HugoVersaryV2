export function joinCls(...classNames) {
  return classNames
    .map((className) => {
      if (typeof className == "string") return className?.trim();
      else return className;
    }) // Remove redundant white spaces
    .filter(Boolean) // Remove falsy items
    .join(" "); // Join with white space;
}

export function randomImgUrl(width = 2000, height = 2000) {
  const seed = Math.floor(Math.random() * 1000);
  return `https://picsum.photos/${width}/${height}?random=${seed}`;
}
