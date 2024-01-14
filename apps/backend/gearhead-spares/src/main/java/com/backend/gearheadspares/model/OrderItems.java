package com.backend.gearheadspares.model;

import jakarta.persistence.*;

import java.math.BigDecimal;
import java.util.UUID;

@Entity
public class OrderItems {

    @Id @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @ManyToOne
    private Orders order;


    @OneToOne
    private Products product;

    private int quantity;

    private BigDecimal unitPrice;
}
