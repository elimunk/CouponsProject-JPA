package com.elimunk.coupons.api;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.elimunk.coupons.beans.Discount;
import com.elimunk.coupons.beans.PostLoginUserData;
import com.elimunk.coupons.exceptions.ApplicationException;
import com.elimunk.coupons.logic.DiscountsController;

@RestController
@RequestMapping("/discountes")
public class DiscountsApi {

	@Autowired
	private DiscountsController discountsController;

	@PostMapping
	public void createCompany(@RequestBody Discount discount, HttpServletRequest request) throws Exception {
		PostLoginUserData userData = (PostLoginUserData) request.getAttribute("userData");
		discountsController.createDiscount(discount, userData);
	}

	@GetMapping("/{code}")
	public Discount getPurchase(@PathVariable String code) throws ApplicationException {
		return discountsController.getDiscount(code);
	}

	@GetMapping
	public List<Discount> getAllDiscounts() throws ApplicationException {
		return discountsController.getAllDiscounts();
	}

	@DeleteMapping("/{code}")
	public void deleteDiscount(@PathVariable("code") String code, HttpServletRequest request) throws ApplicationException {
		System.out.println("test");
		PostLoginUserData userData = (PostLoginUserData) request.getAttribute("userData");
		discountsController.deleteDiscount(code, userData);
	}

}