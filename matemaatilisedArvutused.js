function matemaatilisedArvutused(a, b) {
    let summa = a + b;
    let vahe = a - b; // Parandatud, et lahutaks b a-st, mitte a-st iseendast
    let jagatis = Math.floor(a / b);
    let korrutis = a * b; // Parandatud, et korrutaks a ja b, mitte ainult a-d

    return { summa, vahe, jagatis, korrutis };
}

module.exports = matemaatilisedArvutused;