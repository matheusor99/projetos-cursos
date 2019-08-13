package br.com.tvtmatheus.AgendaDeObjetivos.controller;

import org.springframework.http.ResponseEntity;

public class LoginController {

	
	public ResponseEntity<String> validarLogin(Credenciais credenciais) {
		return ResponseEntity.ok("Sucesso");
		
	}
}
