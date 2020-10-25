package com.designbackend.model;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
public class AccountProfile {
  @Getter @Setter private String username;
  @Getter @Setter private String password;
  @Getter @Setter private String firstName;
  @Getter @Setter private String lastName;
  @Getter @Setter private Date dateOfBirth;
}