package com.designbackend.controller;

import com.designbackend.model.Product;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
class MainController {

  private final ProductRepository repository;

  @GetMapping("/") public String getMain() {
    return "All sytems running";
  }

  @GetMapping("/products")
  Product newProduct(@RequestBody Product newProduct) {
    return ;
  }

  @GetMapping("/products/{id}")
  Product one(@PathVariable Long id);

  @GetMapping("/") public String getAccountProfile() {
    return "All sytems running";
  }
}
