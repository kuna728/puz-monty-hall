import type SimulationConfig from "./SimulationConfig";
import type SimulationResult from "./SimulationResult";

export default class SimulationService {
  prepareSimulation(config: SimulationConfig): SimulationResult[] {
    const result: SimulationResult[] = [];
    for (let i = 0; i < config.numberOfExperiments; i++) {
      result.push(this.simulate(config.numberOfDoors));
    }
    return result;
  }

  simulate(numberOfDoors: number): SimulationResult {
    const gates = this.prepareData(numberOfDoors);
    const playerChoice = Math.floor(Math.random() * numberOfDoors);
    const leftByHost = this.getLeftByHost(gates, playerChoice);
    return {
      doorSwapWins: gates[leftByHost] && !gates[playerChoice],
    };
  }

  prepareData(numberOfDoors: number): boolean[] {
    const winningDoor = Math.floor(Math.random() * numberOfDoors);
    const result: boolean[] = [];
    for (let i = 0; i < numberOfDoors; i++) {
      result.push(winningDoor == i);
    }
    return result;
  }

  getLeftByHost(gates: boolean[], playerChoice: number): number {
    const winningDoor = gates.findIndex((gate) => gate);
    if (winningDoor == playerChoice) {
      const doorIndexes = gates.map((gate, index) => index);
      doorIndexes.splice(playerChoice, 1);
      return doorIndexes[Math.floor(Math.random() * doorIndexes.length)];
    } else {
      return winningDoor;
    }
  }
}
