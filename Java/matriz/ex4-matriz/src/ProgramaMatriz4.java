import java.util.Scanner;

public class ProgramaMatriz4 {
	
	public static void inserirValorMatriz(String[][] matriz) {
		Scanner leitor = new Scanner(System.in);
		for(int linha = 0; linha < matriz.length; linha++) {
			for (int coluna = 0; coluna < matriz[linha].length; coluna++) {
				if(coluna == 0) {
					System.out.println("insira um nome");
				} else {
					System.out.println("insira o numero de telefone da pessoa que acabou de digitar");
				}
				matriz[linha][coluna] = leitor.next();
			}
		}
	}
	
	public static void pesquisarPessoa(String nome, String[][] matriz) {
		for(int linha = 0; linha < matriz.length; linha ++) {
			for(int coluna = 0; coluna < matriz[linha].length; coluna++) {
				String nomeMatriz = matriz[linha][coluna];
				if (nome.equals(nomeMatriz)) {
					System.out.print("Nome: " + matriz[linha][coluna] + ", Telefone: " + matriz[linha][coluna+1]);
					return;
				}
			}
		}
	}

	public static void main(String[] args) {
		String[][] matriz = new String[5][2];
		Scanner leitor = new Scanner(System.in);
		
		inserirValorMatriz(matriz);	
		
		System.out.println("Insira um nome que voce digitou");
		String nome = leitor.next();
		pesquisarPessoa(nome, matriz);
	}
}
