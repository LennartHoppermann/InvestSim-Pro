class AnleihenInvestment extends Anlageklasse {
    public AnleihenInvestment(double startkapital, int laufzeit) {
        super(startkapital, laufzeit, 0.03, 0.05); // Beispielwerte für Rendite und Volatilität
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