class AktienInvestment extends Anlageklasse {
    public AktienInvestment(double startkapital, int laufzeit) {
        super(startkapital, laufzeit, 0.07, 0.15); // Beispielwerte für Rendite und Volatilität
    }
    
    @Override
    public double simulieren() {
        double kapital = startkapital;
        for (int i = 0; i < laufzeit; i++) {
            double zufallsfaktor = Math.random() * 2 - 1; // Zufällige Schwankung zwischen -1 und 1
            kapital *= (1 + erwarteteRendite + volatilität * zufallsfaktor);
        }
        return kapital;
    }
}