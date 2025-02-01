
import java.util.ArrayList;
import java.util.List;

abstract class Anlageklasse {
    protected double startkapital;
    protected int laufzeit;
    protected double erwarteteRendite;
    protected double volatilität;
    
    public Anlageklasse(double startkapital, int laufzeit, double erwarteteRendite, double volatilität) {
        this.startkapital = startkapital;
        this.laufzeit = laufzeit;
        this.erwarteteRendite = erwarteteRendite;
        this.volatilität = volatilität;
    }
    
     public List<String> simuliereVerlauf() {
        List<String> verlauf = new ArrayList<>();
        double kapital = startkapital;
        verlauf.add(String.format("1       | %.2f €    | ---        | %.2f €", kapital, kapital));
        
        for (int jahr = 1; jahr <= laufzeit; jahr++) {
            double zufallsfaktor = Math.random() * 2 - 1;
            double rendite = (erwarteteRendite + volatilität * zufallsfaktor) * 100;
            kapital *= (1 + erwarteteRendite + volatilität * zufallsfaktor);
            verlauf.add(String.format("%d       | %.2f €    | %.2f %%       | %.2f €", jahr, kapital / (1 + erwarteteRendite + volatilität * zufallsfaktor), rendite, kapital));
        }
        return verlauf;
    }
}