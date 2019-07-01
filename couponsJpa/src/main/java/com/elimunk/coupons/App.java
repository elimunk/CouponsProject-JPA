package com.elimunk.coupons;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.elimunk.coupons.exceptions.ApplicationException;

@SpringBootApplication
public class App {
	public static void main(String[] args) throws ApplicationException, InterruptedException {

		SpringApplication.run(App.class, args);


	}
}
