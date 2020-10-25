package com.designbackend.utils.Product;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.designbackend.model.Product;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Configuration
class LoadDatabase {
  private static final Logger log = LoggerFactory.getLogger(LoadDatabase.class);
  
  @Bean CommandLineRunner initDatabase(ProductRepository repository) {

    return args -> {
      log.info("Preloading" + repository.save(new Product("iPhone 12"));
    }
  }
}
