public abstract class Anlageklasse {
    private int id;
    private double anfangswert;
    private double aktuellerWert;
    private float rendite;

    Anlageklasse(double pAnfangswert, float pRendite) {
        anfangswert = pAnfangswert;
        aktuellerWert = pAnfangswert;
        rendite = pRendite;
    }
    public void simulate() {
        
    }
}