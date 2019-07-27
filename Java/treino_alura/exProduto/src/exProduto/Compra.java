package exProduto;

public class Compra {
	
	private String nomeProduto;
	private double preco;
	private int quantidade;
	
	public Compra(String nomeProduto, double preco, int quantidade) {
		this.nomeProduto = nomeProduto;
		this.preco = preco;
		this.quantidade = quantidade;
	}

	public String getNomeProduto() {
		return nomeProduto;
	}

	public double getPreco() {
		return preco;
	}

	public int getQuantidade() {
		return quantidade;
	}
	
	public double valorCompra() {
		double valor = this.getPreco() * this.getQuantidade();
		
		if( this.getQuantidade() > 10 && this.getQuantidade() <= 20 ) {
			double desconto = ( valor*10 ) / 100;
			valor -= desconto;
			
		}
		
		if( this.getQuantidade() > 20 && this.getQuantidade() <= 50 ) {
			double desconto = ( valor*20 ) / 100;
			valor -= desconto;
		}
		
		if( this.getQuantidade() > 50) {
			double desconto = ( valor*25 ) / 100;
			valor -= desconto;
		}
		
		return valor;
	}

	@Override
	public String toString() {
		return "Compra \n nomeProduto: " + nomeProduto + 
				" \n preco da Unid.: " + 
				preco + "\n quantidade: " + quantidade +
				"\n SUBTOTAL: "+ this.valorCompra()+
				"\n----------------------------------------------------------------------\n";
	}
}
