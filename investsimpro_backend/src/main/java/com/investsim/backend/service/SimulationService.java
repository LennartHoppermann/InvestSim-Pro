package com.investsim.backend.service;

import com.investsim.backend.dto.InvestmentDetail;
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
    private final MainSimulation mainSimulation;

    public SimulationService(MainSimulation mainSimulation) {
        this.mainSimulation = mainSimulation;
    }

    public Map<String, Object> simuliereInvestition(Map<String, InvestmentDetail> investitionen, int laufzeit) {
        Map<String, Object> ergebnisse = new LinkedHashMap<>();
        List<Anlageklasse> investments = new ArrayList<>();

        logger.info("Simulation gestartet mit Investitionen: " + investitionen + ", Laufzeit: " + laufzeit);

        for (Map.Entry<String, InvestmentDetail> entry : investitionen.entrySet()) {
            String typ = entry.getKey();
            double kapital = entry.getValue().getStartkapital();
            double jaehrlicheEinzahlung = entry.getValue().getJaehrlicheEinzahlung();

            Anlageklasse investment = switch (typ.toLowerCase()) {
                case "aktien" -> new Aktien(kapital, laufzeit, jaehrlicheEinzahlung);
                case "anleihen" -> new Anleihen(kapital, laufzeit, jaehrlicheEinzahlung);
                case "immobilien" -> new Immobilien(kapital, laufzeit, jaehrlicheEinzahlung);
                case "rohstoffe" -> new Rohstoffe(kapital, laufzeit, jaehrlicheEinzahlung);
                default -> {
                    logger.warn("Unbekannte Anlageklasse: " + typ);
                    yield null;
                }
            };

            if (investment != null) {
                investments.add(investment);
                List<Map<String, Object>> verlauf = mainSimulation.simuliereVerlauf(investment);
                ergebnisse.put(typ, verlauf);
            }
        }

        return ergebnisse;
    }
}