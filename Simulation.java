public class Simulation {



    public static void main(String[] args) {
        Anlageklasse[] investments = new Anlageklasse[0];

        int simulationYears = 5;

        for (int i = 0; i < simulationYears; i++) {
            for (Anlageklasse investment : investments) {
                investment.simulate();
            }
            
        }
    }
    
}
