package investsimpro_backend.src;
import java.util.*;

public class Benutzereingaben {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double startkapital = 0;
        int laufzeit = 0;
        int simulationen = 1;
        double jaehrlicheEinzahlung = 0;
        Map<String, Double> investmentBetrag = new HashMap<>();
        List<Anlageklasse> selectedInvestments = new ArrayList<>();
        
        System.out.println("Willkommen zum Investitionsrechner!");
        
        while (true) {
            try {
                System.out.print("Geben Sie Ihr Startkapital ein: ");
                startkapital = scanner.nextDouble();
                if (startkapital > 0) break;
                System.out.println("Fehler: Das Startkapital muss positiv sein!");
            } catch (InputMismatchException e) {
                System.out.println("Fehler: Bitte geben Sie eine gültige Zahl ein!");
                scanner.next();
            }
        }
        
        while (true) {
            try {
                System.out.print("Geben Sie die Laufzeit in Jahren ein: ");
                laufzeit = scanner.nextInt();
                if (laufzeit > 0) break;
                System.out.println("Fehler: Die Laufzeit muss eine positive ganze Zahl sein!");
            } catch (InputMismatchException e) {
                System.out.println("Fehler: Bitte geben Sie eine gültige ganze Zahl ein!");
                scanner.next();
            }
        }
        
        while (true) {
            try {
                System.out.print("Wie viele Simulationen pro Anlageklasse sollen durchgeführt werden? ");
                simulationen = scanner.nextInt();
                if (simulationen > 0) break;
                System.out.println("Fehler: Die Anzahl der Simulationen muss eine positive ganze Zahl sein!");
            } catch (InputMismatchException e) {
                System.out.println("Fehler: Bitte geben Sie eine gültige ganze Zahl ein!");
                scanner.next();
            }
        }
        
        System.out.print("Möchten Sie jährliche Einzahlungen tätigen? (ja/nein): ");
        if (scanner.next().equalsIgnoreCase("ja")) {
            while (true) {
                try {
                    System.out.print("Geben Sie die jährliche Einzahlung an: ");
                    jaehrlicheEinzahlung = scanner.nextDouble();
                    if (jaehrlicheEinzahlung >= 0) break;
                    System.out.println("Fehler: Die Einzahlung muss positiv sein oder null!");
                } catch (InputMismatchException e) {
                    System.out.println("Fehler: Bitte geben Sie eine gültige Zahl ein!");
                    scanner.next();
                }
            }
        }
        
        System.out.println("Wählen Sie eine oder mehrere Anlageklassen (durch Komma getrennt): 1 = Aktien, 2 = Anleihen, 3 = Immobilien, 4 = Rohstoffe");
        scanner.nextLine();
        String[] auswahl = scanner.nextLine().split(",");
        
        for (String option : auswahl) {
            switch (option.trim()) {
                case "1" -> selectedInvestments.add(new Aktien(startkapital, laufzeit, jaehrlicheEinzahlung));
                case "2" -> selectedInvestments.add(new Anleihen(startkapital, laufzeit, jaehrlicheEinzahlung));
                case "3" -> selectedInvestments.add(new Immobilien(startkapital, laufzeit, jaehrlicheEinzahlung));
                case "4" -> selectedInvestments.add(new Rohstoffe(startkapital, laufzeit, jaehrlicheEinzahlung));
                default -> System.out.println("Fehler: Ungültige Auswahl " + option);
            }
        }
        
        System.out.println("Simulation gestartet...");
        for (Anlageklasse investment : selectedInvestments) {
            System.out.println("Ergebnisse für " + investment.name + ":");
            Map<Integer, Double> verlauf = investment.simuliereVerlauf();
            verlauf.forEach((jahr, kapital) -> System.out.println("Jahr " + jahr + ": " + kapital + " €"));
            System.out.println("--------------------------------------");
        }
        
        scanner.close();
    }
}
