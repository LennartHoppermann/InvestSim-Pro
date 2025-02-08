package com.investsim.backend.service;

import com.investsim.backend.model.Anlageklasse;
import com.investsim.backend.model.Aktien;
import com.investsim.backend.model.Anleihen;
import com.investsim.backend.model.Immobilien;
import com.investsim.backend.model.Rohstoffe;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class SimulationService {

    public Map<Integer, Double> simuliereInvestition(double startkapital, int laufzeit, List<String> anlageklassen) {
        Map<Integer, Double> simulationErgebnisse = new LinkedHashMap<>();
        List<Anlageklasse> investments = new ArrayList<>();

        for (String typ : anlageklassen) {
            switch (typ.toLowerCase()) {
                case "aktien" -> investments.add(new Aktien(startkapital, laufzeit, 0));
                case "anleihen" -> investments.add(new Anleihen(startkapital, laufzeit, 0));
                case "immobilien" -> investments.add(new Immobilien(startkapital, laufzeit, 0));
                case "rohstoffe" -> investments.add(new Rohstoffe(startkapital, laufzeit, 0));
            }
        }

        for (int jahr = 1; jahr <= laufzeit; jahr++) {
            double gesamtKapital = 0;
            for (Anlageklasse investment : investments) {
                Map<Integer, Double> verlauf = investment.simuliereVerlauf();
                gesamtKapital += verlauf.getOrDefault(jahr, 0.0);
            }
            simulationErgebnisse.put(jahr, gesamtKapital);
        }
        return simulationErgebnisse;
    }
}
