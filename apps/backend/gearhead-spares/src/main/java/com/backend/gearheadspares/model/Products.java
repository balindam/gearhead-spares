package com.backend.gearheadspares.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.UUID;

@Entity
@Getter @Setter
public class Products {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    private String name;

    private BigDecimal price;

    private String description;

    private int currentStockQuantity;

    @ManyToOne
    private Manufacturers manufacturer;

    private double averageRating;

    private int totalNumberOfRatings;
}
