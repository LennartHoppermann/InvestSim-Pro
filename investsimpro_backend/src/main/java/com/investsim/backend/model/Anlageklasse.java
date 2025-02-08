package com.investsim.backend.model;

import java.util.*;

public abstract class Anlageklasse {
    protected String name;
    protected double startkapital;
    protected int laufzeit;
    protected double jaehrlicheEinzahlung;
    protected double durchschnittlicheRendite;
    protected double volatilitaet;

    public Anlageklasse(String name, double startkapital, int laufzeit, double jaehrlicheEinzahlung, double rendite, double volatilitaet) {
        this.name = name;
        this.startkapital = startkapital;
        this.laufzeit = laufzeit;
        this.jaehrlicheEinzahlung = jaehrlicheEinzahlung;
        this.durchschnittlicheRendite = rendite;
        this.volatilitaet = volatilitaet;
    }

    public Map<Integer, Double> simuliereVerlauf() {
        Map<Integer, Double> verlauf = new LinkedHashMap<>();
        double kapital = startkapital;
        Random random = new Random();

        for (int jahr = 1; jahr <= laufzeit; jahr++) {
            double zufall = random.nextGaussian();
            double jahresrendite = durchschnittlicheRendite + (volatilitaet * zufall);
            kapital *= (1 + jahresrendite / 100);
            kapital += jaehrlicheEinzahlung;
            verlauf.put(jahr, kapital);
        }
        return verlauf;
    }

    public String getName() {
        return name;
    }
}
