
public class Testes {

	public static void main(String[] args) {
//		aqui apliquei polimorfismo aonde estou referenciando um objeto do tipo Gerente para uma classe mais generica que neste caso é a Funcionario
		Funcionario g = new Gerente("Matheus", 1.400, 56);
		
		System.out.println(  g);
	}
}
