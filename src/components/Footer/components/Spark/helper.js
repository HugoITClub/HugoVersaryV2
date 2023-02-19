export function generateSpark(
  xRange = { from: 0, to: 500 },
  yEndRange = { from: 0, to: 500 },
  sizeRange = { from: 0, to: 5 },
  rotateEndRange = { from: 0, to: 360 },
  timeRange = { from: 0, to: 5 }
) {
  return {
    x: (xRange.to - xRange.from) * Math.random() + xRange.from,
    yEnd: (yEndRange.to - yEndRange.from) * Math.random() + yEndRange.from,
    size: (sizeRange.to - sizeRange.from) * Math.random() + sizeRange.from,
    rotateEnd: (rotateEndRange.to - rotateEndRange.from) * Math.random() + rotateEndRange.from,
    transitionTime: (timeRange.to - timeRange.from) * Math.random() + timeRange.from,
  };
}
