import java.util.Scanner;

public class ProgramaMatriz2 {

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
		
		int [][] matriz = new int[2][3];
		int [][] matriz2 = new int[2][3];
		int [][] matriz3 = new int[2][3];
		
		inserirValorMatriz(matriz);
		inserirValorMatriz(matriz2);
		
		for(int linha = 0; linha < matriz3.length; linha++) {
			for (int coluna = 0; coluna < matriz3[linha].length; coluna++) {
				int valor = matriz[linha][coluna] + matriz2[linha][coluna];;
				matriz3[linha][coluna] = valor;
			}
		}
		
		exibeMatriz(matriz3);
	}
}
