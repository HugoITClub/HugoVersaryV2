export function generateSpark(
  xRange = { from: 0, to: 500 },
  yStartRange = { from: 0, to: 500 },
  yEndRange = { from: 0, to: 500 },
  sizeRange = { from: 0, to: 5 },
  rotateEndRange = { from: 0, to: 360 },
  timeRange = { from: 0, to: 5 }
) {
  const sparkInfo = {
    x: (xRange.to - xRange.from) * Math.random() + xRange.from,
    yStart: (yStartRange.to - yStartRange.from) * Math.random() + yStartRange.from,
    yEnd: (yEndRange.to - yEndRange.from) * Math.random() + yEndRange.from,
    size: (sizeRange.to - sizeRange.from) * Math.random() + sizeRange.from,
    rotateEnd: (rotateEndRange.to - rotateEndRange.from) * Math.random() + rotateEndRange.from,
    transitionTime: (timeRange.to - timeRange.from) * Math.random() + timeRange.from,
  };

  sparkInfo.key = `${sparkInfo.x}-${sparkInfo.yStart}-${sparkInfo.yEnd}`;

  return sparkInfo;
}
