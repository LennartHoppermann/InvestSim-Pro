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
    
    public abstract double simulieren();
}