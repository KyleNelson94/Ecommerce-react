package com.designbackend.model;

import lombok.Getter;
import lombok.Setter;

public class Product {
  @Getter @Setter private String title;
  @Getter @Setter private String thumbnailImage;
  @Getter @Setter private Object sellers;
  @Getter @Setter private Number price;
  @Getter @Setter private Number id;
  @Getter @Setter private String currency;
}
