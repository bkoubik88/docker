package com.testapp;

import java.io.IOException;
import java.io.PrintWriter;
import java.io.Serializable;

import javax.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class SayHello implements Serializable {

	private static final long serialVersionUID = 1L;
	
	
	@GetMapping("/hello")
	public void hello(HttpServletResponse response) throws IOException
	{
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/html");
		
		
		PrintWriter out = response.getWriter();
		out.write("Hello from the backend");
		out.flush();
	}

}
