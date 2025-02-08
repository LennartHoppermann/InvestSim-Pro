package com.investsim.backend.model;

public class Anleihen extends Anlageklasse {
    public Anleihen(double startkapital, int laufzeit, double jaehrlicheEinzahlung) {
        super("Anleihen", startkapital, laufzeit, jaehrlicheEinzahlung, 3.0, 5.0);
    }
}

