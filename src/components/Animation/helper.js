export function generateWiggleTransform(xPercent, yPercent, maxTranslateRange = 10, maxRotateRange = 32, maxScaleRange = -16) {
  const translateXPercent = -xPercent * maxTranslateRange;
  const translateYPercent = -yPercent * maxTranslateRange;

  const rotateXDeg = xPercent * maxRotateRange;
  const rotateYDeg = yPercent * maxRotateRange;

  const scaleXPercent = Math.abs(xPercent) * maxScaleRange + 100;
  const scaleYPercent = Math.abs(yPercent) * maxScaleRange + 100;

  return `translate(${translateXPercent}%, ${translateYPercent}%) rotateX(${rotateXDeg}deg) rotateY(${rotateYDeg}deg) scale(${scaleXPercent}%, ${scaleYPercent}%)`;
}
