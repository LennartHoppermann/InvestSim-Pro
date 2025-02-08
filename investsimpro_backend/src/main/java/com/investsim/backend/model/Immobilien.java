package com.investsim.backend.model;

public class Immobilien extends Anlageklasse {
    public Immobilien(double startkapital, int laufzeit, double jaehrlicheEinzahlung) {
        super("Immobilien", startkapital, laufzeit, jaehrlicheEinzahlung, 5.0, 7.0);
    }
}
