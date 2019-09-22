import java.util.Scanner;

public class ProgramaMatriz3 {
	public static void exibeVetor(int[] vetor) {
		System.out.println("Exibição de Vetor");
		for(int i = 0; i < vetor.length; i++) {
			System.out.print(vetor[i]+ ", ");
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
		int [] vetor = new int [3];
		
		inserirValorMatriz(matriz);
		
		for (int coluna = 0; coluna < matriz.length; coluna++) {
			for (int linha = 0; linha < matriz[coluna].length; linha++) {
				vetor[coluna] += matriz[linha][coluna];
			}
		}
		exibeVetor(vetor);
	}
}
