import java.util.Scanner;

public class ProgramaMatriz1 {
	
	public static void main(String[] args) {
		int[][] matriz = new int[2][3];
		Scanner leitor = new Scanner(System.in);
		
		for (int linha = 0; linha < matriz.length; linha++) {
			for (int coluna = 0; coluna < matriz[linha].length; coluna ++ ) {
				System.out.println("digite um numero para a posição [" + linha + "] [" + coluna + "]");
				matriz[linha] [coluna] = leitor.nextInt();
			}
		}
		
		System.out.println("Exibição de Matriz");
		for(int linha = 0; linha < matriz.length; linha++) {
			for(int coluna = 0; coluna < matriz[linha].length; coluna++) {
				System.out.print(matriz[linha][coluna]);
			}
			System.out.println();
		}
	}
}
