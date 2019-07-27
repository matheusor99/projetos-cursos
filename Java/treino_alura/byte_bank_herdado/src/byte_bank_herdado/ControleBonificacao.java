package byte_bank_herdado;

public class ControleBonificacao {
	
	private double soma;
	
//	utilizando do polimorfismo posso fazer com que tds as classes que extends funcionario utilizem deste metodo
	public void registra(Funcionario f) {
		double boni = f.getBonificacao();
		this.soma = this.soma + boni;
	}
	
	public double getSoma() {
		return soma;
	}

}
