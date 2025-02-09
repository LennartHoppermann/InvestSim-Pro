package com.investsim.backend.controller;

import com.investsim.backend.dto.SimulationRequest;
import com.investsim.backend.service.SimulationService;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/simulation")
@CrossOrigin(origins = "http://localhost:5173") // React-Frontend erlauben
public class SimulationController {

    private final SimulationService simulationService;

    public SimulationController(SimulationService simulationService) {
        this.simulationService = simulationService;
    }

    @PostMapping("/run")
    public Map<Integer, Double> runSimulation(@RequestBody SimulationRequest request) {
        return simulationService.simuliereInvestition(request.getInvestitionen(), request.getLaufzeit());
    }
}

