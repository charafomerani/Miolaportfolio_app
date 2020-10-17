package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Projets;
@Repository
public interface ProjetsRepository extends JpaRepository<Projets,Long>{

}
