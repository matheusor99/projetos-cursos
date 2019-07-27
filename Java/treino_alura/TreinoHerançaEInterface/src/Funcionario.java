
public abstract class Funcionario {
	
	protected String nome;
	protected String cargo;
	protected double salario;

	public String getNome() {
		return nome;
	}

	public String getCargo() {
		return cargo;
	}

	public void setCargo(String cargo) {
		this.cargo = cargo;
	}

	public double getSalario() {
		return salario;
	}

	public void setSalario(double salario) {
		this.salario = salario;
	}
}
