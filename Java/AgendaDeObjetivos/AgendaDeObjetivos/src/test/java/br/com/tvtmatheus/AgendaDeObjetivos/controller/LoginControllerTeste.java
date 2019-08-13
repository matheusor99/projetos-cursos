package br.com.tvtmatheus.AgendaDeObjetivos.controller;

import static org.junit.Assert.assertEquals;

import org.junit.Test;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public class LoginControllerTeste {

	@Test
	public void loginComSucesso() {
		LoginController controller = new LoginController();
		
		//a resposta da requisição depois de fazer a validação
		ResponseEntity<String> resposta = controller.validarLogin(new Credenciais("login", "senha"));
		
		// assertEquals esta comparando se o status ok do http que é 200 é igual a codigo de status da resposta
		assertEquals(HttpStatus.OK, resposta.getStatusCode());
		
//		compara a mensagem com o corpo da resposta
		assertEquals("Sucesso", resposta.getBody());
	} 
	
	public void loginComFalha() {
		
	}
}
