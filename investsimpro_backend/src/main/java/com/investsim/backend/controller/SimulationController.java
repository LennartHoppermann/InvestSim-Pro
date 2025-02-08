package com.investsim.backend.controller;

import com.investsim.backend.model.Anlageklasse;
import com.investsim.backend.model.Aktien;
import com.investsim.backend.model.Anleihen;
import com.investsim.backend.model.Immobilien;
import com.investsim.backend.model.Rohstoffe;
import com.investsim.backend.service.SimulationService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/simulation")
@CrossOrigin(origins = "http://localhost:5173") // React-Frontend erlauben
public class SimulationController {

    private final SimulationService simulationService;

    public SimulationController(SimulationService simulationService) {
        this.simulationService = simulationService;
    }

    @GetMapping("/run")
    public Map<Integer, Double> runSimulation(
            @RequestParam double startkapital,
            @RequestParam int laufzeit,
            @RequestParam List<String> anlageklassen
    ) {
        return simulationService.simuliereInvestition(startkapital, laufzeit, anlageklassen);
    }
}
