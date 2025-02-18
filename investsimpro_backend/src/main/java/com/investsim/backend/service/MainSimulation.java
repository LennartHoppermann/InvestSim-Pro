package com.investsim.backend.service;

import com.investsim.backend.model.Anlageklasse;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class MainSimulation {

    public List<Map<String, Object>> simuliereVerlauf(Anlageklasse anlageklasse) {
        List<Map<String, Object>> verlauf = new ArrayList<>();
        double kapital = anlageklasse.getStartkapital();
        Random random = new Random();

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
        return verlauf;
    }
}
