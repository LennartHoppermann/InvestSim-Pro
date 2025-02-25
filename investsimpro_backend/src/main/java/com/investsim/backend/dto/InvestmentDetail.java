package com.investsim.backend.dto;

/**
 * Die Klasse InvestmentDetail repräsentiert die Details einer Investition.
 * Sie enthält Informationen über das Startkapital und die jährlichen Einzahlungen.
 */
public class InvestmentDetail {
    private double startkapital;
    private double jaehrlicheEinzahlung;

    public double getStartkapital() {
        return startkapital;
    }

    public void setStartkapital(double startkapital) {
        this.startkapital = startkapital;
    }

    public double getJaehrlicheEinzahlung() {
        return jaehrlicheEinzahlung;
    }

    public void setJaehrlicheEinzahlung(double jaehrlicheEinzahlung) {
        this.jaehrlicheEinzahlung = jaehrlicheEinzahlung;
    }
}
