package com.investsim.backend.model;

/**
 * Die abstrakte Klasse Anlageklasse repräsentiert eine allgemeine Anlageklasse.
 * Sie enthält grundlegende Informationen wie Name, Startkapital, Laufzeit, jährliche Einzahlung,
 * durchschnittliche Rendite und Volatilität.
 */
public abstract class Anlageklasse {
    protected String name;
    protected double startkapital;
    protected int laufzeit;
    protected double jaehrlicheEinzahlung;
    protected double durchschnittlicheRendite;
    protected double volatilitaet;

    /**
     * Konstruktor für die Anlageklasse.
     * 
     * @param name der Name der Anlageklasse
     * @param startkapital das Startkapital
     * @param laufzeit die Laufzeit in Jahren
     * @param jaehrlicheEinzahlung die jährliche Einzahlung
     * @param rendite die durchschnittliche Rendite
     * @param volatilitaet die Volatilität
     */
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
