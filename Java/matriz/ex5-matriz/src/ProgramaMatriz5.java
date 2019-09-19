import java.util.Scanner;

public class ProgramaMatriz5 {
	public static void inserirValorMatriz(int[][] matriz) {
		Scanner leitor = new Scanner(System.in);
		for(int linha = 0; linha < matriz.length; linha++) {
			for (int coluna = 0; coluna < matriz[linha].length; coluna++) {
					System.out.println("insira um numero");
				matriz[linha][coluna] = leitor.nextInt();
			}
		}
	}
	
	public static void isertMatriz3(int[][] matriz, int[][] matriz2, int[][] matriz3) {
		for(int linha = 0; linha < matriz3.length; linha++) {
			for(int coluna =0; coluna < matriz[linha].length; coluna++) {
				if(coluna == 0) {
					
				}
			}
		}
	}
	
	public static void main(String[] args) {
		int[][] matriz = new int[1][4];
		int[][] matriz2 = new int[1][4];
		int[][] matriz3 = new int[4][2];
		
		inserirValorMatriz(matriz);
		inserirValorMatriz(matriz2);
		
	}
}
