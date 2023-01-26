export function joinCls(...classNames) {
  return classNames
    .map((className) => {
      if (typeof className == "string") return className?.trim();
      else return className;
    }) // Remove redundant white spaces
    .filter(Boolean) // Remove falsy items
    .join(" "); // Join with white space;
}

export function randomImgUrl(size = 2000) {
  const seed = Math.floor(Math.random() * 1000);
  return `https://picsum.photos/${size}?random=${seed}`;
}
