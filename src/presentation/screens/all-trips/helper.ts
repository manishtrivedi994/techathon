export const getGradientColors = (score: number) => {
  if (score >= 4.5) {
    return ['#C5FFD4', '#060F0D'];
  } else if (score >= 3.5) {
    return ['#C5FFD4', '#181403'];
  } else {
    return ['#CA3A31', '#190C0C'];
  }
};

export const getBgColors = (score: number) => {
  if (score >= 4.5) {
    return '#18201E';
  } else if (score >= 3.5) {
    return '#181403';
  } else {
    return '#190C0C';
  }
};

export const getTextColors = (score: number) => {
  if (score >= 4.5) {
    return '#30D158';
  } else if (score >= 3.5) {
    return '#C0BD74';
  } else {
    return '#CA3A31';
  }
};
