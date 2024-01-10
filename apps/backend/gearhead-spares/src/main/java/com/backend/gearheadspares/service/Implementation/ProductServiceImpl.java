package com.backend.gearheadspares.service.Implementation;

import com.backend.gearheadspares.model.Product;
import com.backend.gearheadspares.repository.ProductRepository;
import com.backend.gearheadspares.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Override
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }
}
