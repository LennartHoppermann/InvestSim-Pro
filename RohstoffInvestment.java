class RohstoffInvestment extends Anlageklasse {
    public RohstoffInvestment(double startkapital, int laufzeit) {
        super(startkapital, laufzeit, 0.06, 0.20); // Beispielwerte für Rendite und Volatilität
    }
    
    @Override
    public double simulieren() {
        double kapital = startkapital;
        for (int i = 0; i < laufzeit; i++) {
            double zufallsfaktor = Math.random() * 2 - 1;
            kapital *= (1 + erwarteteRendite + volatilität * zufallsfaktor);
        }
        return kapital;
    }
}