package mycar;

import static org.junit.jupiter.api.Assertions.assertEquals;

//import org.junit.jupiter.api.
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

//import org.junit.juniper.api.AfterEach;
//import org.junit.juniper.api.BeforeEach;
//import org.junit.juniper.api.Test;

public class TestCar {
	
	Car car;
	
	@BeforeEach
	public void setUp() {
		car = new Car("Ford");
	}
	
	@AfterEach
	public void tearDown() {
		car = null;
	}
	
	@Test
	void testCarAccelerate() {
		System.out.println("@test");
		car.accelerate(10);
		assertEquals(50, car.getSpeed());
	}
	
	@Test
	void testCarLimit() {
		System.out.println("@test2");
		car.accelerate(100);
		assertEquals(60, car.getSpeed());
	}

}
