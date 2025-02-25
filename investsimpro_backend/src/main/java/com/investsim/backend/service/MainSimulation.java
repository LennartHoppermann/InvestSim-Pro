package com.investsim.backend.service;

import com.investsim.backend.model.Anlageklasse;
import org.springframework.stereotype.Service;

import java.util.*;

/**
 * Die Klasse MainSimulation führt die Simulation des Kapitalverlaufs einer Anlageklasse durch.
 */
@Service
public class MainSimulation {

    /**
     * Simuliert den Verlauf des Kapitals über die Laufzeit der Anlageklasse.
     * 
     * @param anlageklasse die zu simulierende Anlageklasse
     * @return eine Liste von Maps, die den Kapitalverlauf für jedes Jahr enthalten
     * @throws NumberFormatException wenn eine ungültige Zahleneingabe vorliegt
     */
    public List<Map<String, Object>> simuliereVerlauf(Anlageklasse anlageklasse) throws NumberFormatException {
        List<Map<String, Object>> verlauf = new ArrayList<>();
        double kapital = anlageklasse.getStartkapital();
        Random random = new Random();

        try {
            for (int jahr = 1; jahr <= anlageklasse.getLaufzeit(); jahr++) {
                double zufall = random.nextGaussian();
                double jahresrendite = anlageklasse.getDurchschnittlicheRendite() + (anlageklasse.getVolatilitaet() * zufall);
                double kapitalAlt = kapital;
                kapital *= (1 + jahresrendite / 100);
                kapital += anlageklasse.getJaehrlicheEinzahlung();

                Map<String, Object> jahrDaten = new LinkedHashMap<>();
                jahrDaten.put("jahr", jahr);
                jahrDaten.put("startkapital", kapitalAlt);
                jahrDaten.put("rendite", jahresrendite);
                jahrDaten.put("endkapital", kapital);

                verlauf.add(jahrDaten);
            }
        } catch (NumberFormatException e) {
            throw new NumberFormatException("Fehler: Ungültige Zahleneingabe. Bitte stellen Sie sicher, dass alle Eingabefelder nur Zahlen enthalten.");
        } catch (Exception e) {
            throw new RuntimeException("Ein unerwarteter Fehler ist aufgetreten: " + e.getMessage());
        }

        return verlauf;
    }
}