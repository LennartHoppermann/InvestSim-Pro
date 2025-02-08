package com.investsim.backend.service;

import com.investsim.backend.model.Anlageklasse;
import com.investsim.backend.model.Aktien;
import com.investsim.backend.model.Anleihen;
import com.investsim.backend.model.Immobilien;
import com.investsim.backend.model.Rohstoffe;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class SimulationService {
    private static final Logger logger = LoggerFactory.getLogger(SimulationService.class);

    public Map<Integer, Double> simuliereInvestition(double startkapital, int laufzeit, List<String> anlageklassen) {
        Map<Integer, Double> simulationErgebnisse = new LinkedHashMap<>();
        List<Anlageklasse> investments = new ArrayList<>();

        logger.info("Simulation gestartet mit Startkapital: " + startkapital + ", Laufzeit: " + laufzeit + ", Anlageklassen: " + anlageklassen);

        for (String typ : anlageklassen) {
            switch (typ.toLowerCase()) {
                case "aktien" -> investments.add(new Aktien(startkapital, laufzeit, 0));
                case "anleihen" -> investments.add(new Anleihen(startkapital, laufzeit, 0));
                case "immobilien" -> investments.add(new Immobilien(startkapital, laufzeit, 0));
                case "rohstoffe" -> investments.add(new Rohstoffe(startkapital, laufzeit, 0));
                default -> logger.warn("Unbekannte Anlageklasse: " + typ);
            }
        }

        for (int jahr = 1; jahr <= laufzeit; jahr++) {
            double gesamtKapital = 0;
            for (Anlageklasse investment : investments) {
                Map<Integer, Double> verlauf = investment.simuliereVerlauf();
                double kapitalJahr = verlauf.getOrDefault(jahr, 0.0);
                gesamtKapital += kapitalJahr;
                logger.info("Jahr {}: Kapital {} für {}", jahr, kapitalJahr, investment.getClass().getSimpleName());
            }
            simulationErgebnisse.put(jahr, gesamtKapital);
        }

        logger.info("Simulation abgeschlossen. Ergebnisse: " + simulationErgebnisse);
        return simulationErgebnisse;
    }
}
