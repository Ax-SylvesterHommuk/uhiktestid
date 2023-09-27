const chai = require('chai');
const expect = chai.expect;
const matemaatilisedArvutused = require('./matemaatilisedArvutused');

describe('matemaatilisedArvutused', () => {
    it('arvutab õige summa', () => {
        const tulemus = matemaatilisedArvutused(10, 5);
        expect(tulemus.summa).to.equal(15);
    });

    it('arvutab õige vahe', () => {
        const tulemus = matemaatilisedArvutused(10, 5);
        expect(tulemus.vahe).to.equal(5);
    });

    it('arvutab õige jagatise', () => {
        const tulemus = matemaatilisedArvutused(10, 5);
        expect(tulemus.jagatis).to.equal(2);
    });

    it('arvutab õige korrutise', () => {
        const tulemus = matemaatilisedArvutused(10, 5);
        expect(tulemus.korrutis).to.equal(50);
    });
});