package exProduto;

public class TesteComprar {
	
	public static void main(String[] args) {
		Compra compras = new Compra("chocolate", 5.50, 9);
		Compra compras1 = new Compra("chocolate", 5.50, 11);
		Compra compras2 = new Compra("chocolate", 5.50, 22);
		Compra compras3 = new Compra("chocolate", 5.50, 55);
		
		System.out.println(compras);
		System.out.println(compras1);
		System.out.println(compras2);
		System.out.println(compras3);
	}
}
