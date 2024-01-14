package com.backend.gearheadspares.model;

import jakarta.persistence.*;

import java.util.UUID;

@Entity
public class Reviews {

    @Id @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @ManyToOne
    private Users user;

    @ManyToOne
    private Products product;

    private double rating;

    private String comment;
}
