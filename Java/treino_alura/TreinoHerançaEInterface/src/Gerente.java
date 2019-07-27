
public class Gerente extends Funcionario {

	private int sala;
	
	public Gerente(String nome, double salario, int sala) {
		super.nome = nome;
		super.cargo = "Gerente";
		super.salario = salario;
		this.sala = sala;
	}
	
	public int getSala() {
		return this.sala;
	}
	
	public void setSala(int sala) {
		this.sala = sala;
	}

	@Override
	public String toString() {
		return "Funcionario [nome=" + super.getNome() + ", cargo=" + super.getCargo() + ", salario=" + super.getSalario() + " sala=" + sala + "]";
	}
	
	
}
