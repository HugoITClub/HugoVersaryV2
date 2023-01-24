export function joinCls(...classNames) {
  return classNames
    .map((className) => className?.trim()) // Remove redundant white spaces
    .filter((className) => className) // Remove falsy items
    .join(" "); // Join with white space;
}
