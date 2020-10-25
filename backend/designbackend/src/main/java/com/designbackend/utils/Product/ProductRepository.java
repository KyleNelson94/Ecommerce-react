import com.designbackend.model.Product;

import org.springframework.data.jpa.repository.JpaRepository;

interface ProductRepository extends JpaRepository<Product, Long> {

}
