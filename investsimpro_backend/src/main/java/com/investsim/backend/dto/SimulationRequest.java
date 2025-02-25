package com.investsim.backend.dto;

import java.util.Map;

/**
 * Die Klasse SimulationRequest repräsentiert eine Anfrage zur Durchführung einer Investitionssimulation.
 * Sie enthält die Investitionsdetails und die Laufzeit der Simulation.
 */
public class SimulationRequest {
    private Map<String, InvestmentDetail> investitionen;
    private int laufzeit;

    public Map<String, InvestmentDetail> getInvestitionen() {
        return investitionen;
    }

    public void setInvestitionen(Map<String, InvestmentDetail> investitionen) {
        this.investitionen = investitionen;
    }

    public int getLaufzeit() {
        return laufzeit;
    }

    public void setLaufzeit(int laufzeit) {
        this.laufzeit = laufzeit;
    }
}
