/*
RockPaperScissors.java
BHarnett
23.2.2023
*/

import java.util.Scanner;
import java.util.Random;

public class RockPaperScissors {
    public static void main(String[] args) {


		Scanner input = new Scanner(System.in);
		Random rand = new Random();

		String[] choose = {"rock","paper","scissors"};
		int userWins = 0;
		int computerWins = 0;
		int ties = 0;

		System.out.println("Rock, Paper or Scissors?");
		for (int i = 0; i < 3; i++) {
			System.out.println("Round " + (i + 1));

				String userChoice = input.nextLine().toLowerCase();

				int computerChoiceIndex = rand.nextInt(choose.length);

				String computerChoice = choose[computerChoiceIndex];



				System.out.println("Computer choice: " + computerChoice);

				if (userChoice.equals(computerChoice)) {
					System.out.println("Draw");
					ties++;
				} else if ((userChoice.equals("rock") && computerChoice.equals("scissors")) |
							(userChoice.equals("paper") && computerChoice.equals("rock")) |
							(userChoice.equals("scissors") && computerChoice.equals("paper"))) {
					System.out.println("Win");
					userWins++;
				} else {
					System.out.println("Lose");
					computerWins++;
				}
		}

    }
}