package com.investsim.backend.model;

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

    public String getName() {
        return name;
    }

    public double getStartkapital() {
        return startkapital;
    }

    public int getLaufzeit() {
        return laufzeit;
    }

    public double getJaehrlicheEinzahlung() {
        return jaehrlicheEinzahlung;
    }

    public double getDurchschnittlicheRendite() {
        return durchschnittlicheRendite;
    }

    public double getVolatilitaet() {
        return volatilitaet;
    }
}
