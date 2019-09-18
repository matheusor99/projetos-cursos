import java.util.Scanner;

public class ProgramaMatriz3 {
	public static void exibeMatriz(int[][] matriz) {
		System.out.println("Exibição de Matriz");
		for(int linha = 0; linha < matriz.length; linha++) {
			for(int coluna = 0; coluna < matriz[linha].length; coluna++) {
				System.out.print(matriz[linha][coluna]);
			}
			System.out.println();
		}
	}
	
	public static void inserirValorMatriz(int[][] matriz) {
		Scanner leitor = new Scanner(System.in);
		for(int linha = 0; linha < matriz.length; linha++) {
			for (int coluna = 0; coluna < matriz[linha].length; coluna++) {
				System.out.println("insira o valor na posição ["+ linha + "] [" + coluna + "]");
				matriz[linha][coluna] = leitor.nextInt();
			}
		}
	}
	
	public static void main(String[] args) {
		int [][] matriz = new int[3][3];
		int [][] matrizSoma = new int [1][3];
		
		inserirValorMatriz(matriz);		
		
		for(int linha = 0; linha < matrizSoma.length; linha ++) {
			for(int coluna = 0; coluna < matrizSoma[linha].length; coluna++) {
				int valorColuna = 0;
					for (int coluna2 = 0; coluna2 < matriz[linha].length; coluna2++) {
						valorColuna += matriz[linha][coluna2];
					}
				matrizSoma[0][coluna] = valorColuna; 
			}
		}
		
		exibeMatriz(matrizSoma);
	}
}
