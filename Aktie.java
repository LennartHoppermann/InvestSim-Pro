public class Aktie extends Anlageklasse {
    private String WKN;
    private String ISIN;
    private String name;

    Aktie(String pWKN, String pISIN, String pName, double pAnfangswert, float pRendite){
        super(pAnfangswert,pRendite);
        WKN = pWKN;
        ISIN = pISIN;
        name = pName;
    }
}
