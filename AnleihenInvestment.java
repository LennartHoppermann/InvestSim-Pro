
class AnleihenInvestment extends Anlageklasse {
    public AnleihenInvestment(double startkapital, int laufzeit) {
        super(startkapital, laufzeit, 0.03, 0.05); // Beispielwerte für Rendite und Volatilität
    }
}