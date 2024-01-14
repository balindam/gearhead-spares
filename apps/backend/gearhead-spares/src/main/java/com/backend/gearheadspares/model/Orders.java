package com.backend.gearheadspares.model;

import jakarta.persistence.*;

import java.math.BigDecimal;
import java.util.Date;
import java.util.UUID;

@Entity
public class Orders {

    @Id @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @ManyToOne
    private Users user;

    private Date orderDate;

    private BigDecimal totalAmount;
}
