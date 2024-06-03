package mycar;

public class Car {
	final private int maxSpeed = 60;
	private String make;
	private int speed;
	
	public Car(String make) {
		this(make, 40);
	}
	
	public Car(String make, int speed) {
		this.make = make;
		this.speed = 40;
	}
	
	public String getMake() {
		return this.make;
	}
	public void accelerate(int i) {
		setSpeed(getSpeed() + i);
	}
	public int getSpeed() {
		return this.speed;
	}
	public void setSpeed(int speed) {
		this.speed = speed;
		if(this.speed > maxSpeed)
			this.speed = maxSpeed;
	}
}
