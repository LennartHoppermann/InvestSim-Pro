
class RohstoffInvestment extends Anlageklasse {
    public RohstoffInvestment(double startkapital, int laufzeit) {
        super(startkapital, laufzeit, 0.06, 0.20); // Beispielwerte für Rendite und Volatilität
    }
}