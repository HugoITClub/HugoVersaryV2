export function joinCls(...classNames) {
  return classNames
    .map((className) => {
      if (typeof className == "string") return className?.trim();
      else return className;
    }) // Remove redundant white spaces
    .filter(Boolean) // Remove falsy items
    .join(" "); // Join with white space;
}
