package com.investsim.backend.model;

public class Aktien extends Anlageklasse {
    public Aktien(double startkapital, int laufzeit, double jaehrlicheEinzahlung) {
        super("Aktien", startkapital, laufzeit, jaehrlicheEinzahlung, 8.0, 15.0);
    }
}
