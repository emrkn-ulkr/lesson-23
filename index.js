function rastgeleSayi(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const macOzeti = (evSahibiTakim, deplasmanTakim) => {
    const ozet = [];
    let evSahibiSkor = 0;
    let evSahibiToplam = 0;
    let deplasmanSkor = 0;
    let deplasmanToplam = 0;
    for (let i = 1; i <= 4; i++) {
        evSahibiSkor = rastgeleSayi(12, 26);
        deplasmanSkor = rastgeleSayi(12, 26);
        evSahibiToplam += evSahibiSkor;
        deplasmanToplam += deplasmanSkor;
        ozet.push(
            `${i}. Periyot: ${evSahibiTakim} ${evSahibiSkor} - ${deplasmanTakim} ${deplasmanSkor}`
        );
    }
    if (evSahibiToplam > deplasmanToplam) {
        ozet.push(
            `Maç Sonucu: ${evSahibiTakim} ${evSahibiToplam} - ${deplasmanToplam} kazandı`
        );
    } else if (deplasmanToplam > evSahibiToplam) {
        ozet.push(
            `Maç Sonucu: ${evSahibiTakim} ${evSahibiToplam} - ${deplasmanToplam} kaybetti`
        );
    } else {
        ozet.push(
            `Maç ${evSahibiToplam} - ${deplasmanToplam} ile uzatmalara gitti`
        );
    }
    return ozet;
};
console.log(macOzeti('Real Madrid', 'Barcelona'));

module.exports = macOzeti;
