package investsimpro_backend.src;

class Rohstoffe extends Anlageklasse {
    public Rohstoffe(double startkapital, int laufzeit, double jaehrlicheEinzahlung) {
        super("Rohstoffe", startkapital, laufzeit, jaehrlicheEinzahlung, 6.0, 10.0);
    }
}