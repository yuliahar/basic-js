const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (!sampleActivity || sampleActivity <= 0 || sampleActivity >= MODERN_ACTIVITY ||
      isNaN(parseFloat(sampleActivity)) || typeof sampleActivity != "string")
    return false;
  return Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / (0.693 / HALF_LIFE_PERIOD));
};
