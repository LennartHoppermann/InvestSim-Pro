package com.investsim.backend.controller;

import com.investsim.backend.dto.SimulationRequest;
import com.investsim.backend.service.SimulationService;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

/**
 * Die Klasse SimulationController stellt Endpunkte für die Simulation von Investitionen bereit.
 * Sie empfängt HTTP-Anfragen, leitet diese an den SimulationService weiter und gibt die Ergebnisse zurück.
 */
@RestController
@RequestMapping("/api/simulation")
@CrossOrigin(origins = "http://localhost:5173")
public class SimulationController {

    private final SimulationService simulationService;

    /**
     * Konstruktor für SimulationController.
     * 
     * @param simulationService der Service, der die Simulationslogik behandelt
     */
    public SimulationController(SimulationService simulationService) {
        this.simulationService = simulationService;
    }

    /**
     * Endpunkt zum Ausführen einer Simulation.
     * 
     * @param request die Simulationsanfrage, die Investitionsdetails und Laufzeit enthält
     * @return eine Map, die die Ergebnisse der Simulation enthält
     */
    @PostMapping("/run")
    public Map<String, Object> runSimulation(@RequestBody SimulationRequest request) {
        return simulationService.simuliereInvestition(request.getInvestitionen(), request.getLaufzeit());
    }
}