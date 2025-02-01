
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.InputMismatchException;
import java.util.List;
import java.util.Scanner;

public class Benutzereingaben {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double startkapital = 0;
        int laufzeit = 0;
        List<Anlageklasse> investments = new ArrayList<>();
        
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
        
        System.out.println("Wählen Sie eine oder mehrere Anlageklassen (durch Komma getrennt): 1 = Aktien, 2 = Anleihen, 3 = Immobilien, 4 = Rohstoffe");
        scanner.nextLine();
        String[] auswahl = scanner.nextLine().split(",");
        
        for (String option : auswahl) {
            switch (option.trim()) {
                case "1" -> investments.add(new AktienInvestment(startkapital, laufzeit));
                case "2" -> investments.add(new AnleihenInvestment(startkapital, laufzeit));
                case "3" -> investments.add(new ImmobilienInvestment(startkapital, laufzeit));
                case "4" -> investments.add(new RohstoffInvestment(startkapital, laufzeit));
                default -> System.out.println("Fehler: Ungültige Auswahl " + option);
            }
        }
        
        try (FileWriter writer = new FileWriter("Investitionsbericht.txt")) {
            writer.write("Willkommen zum Investitionsrechner!\n");
            writer.write(String.format("Sie haben als Anlagebetrag %.2f€ angegeben.\n", startkapital));
            writer.write(String.format("Ihre gewünschte Laufzeit beträgt %d Jahre.\n\n", laufzeit));
            writer.write("Folgende Anlageklassen wurden gewählt:\n");
            
            for (Anlageklasse investment : investments) {
                writer.write(investment.getClass().getSimpleName().replace("Investment", "") + "\n");
            }
            
            writer.write("\nErgebnisse der Investitionssimulation:\n\n");
            writer.write("Jahr    | Startkapital   | Rendite (%)    | Endkapital\n");
            writer.write("---------------------------------------------------------\n");
            
            for (Anlageklasse investment : investments) {
                for (String zeile : investment.simuliereVerlauf()) {
                    writer.write(zeile + "\n");
                }
                writer.write("---------------------------------------------------------\n");
            }
        } catch (IOException e) {
            System.out.println("Fehler beim Schreiben der Datei: " + e.getMessage());
        }
        
        scanner.close();
    }
}

