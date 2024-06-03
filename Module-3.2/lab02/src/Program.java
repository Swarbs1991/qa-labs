/**
package first;

/**
 * @author jswar
 *
 */
public class Program {
	
	/**
	 *  *@param args
	 */
	public static void main(String[] args) {
		int age = 32;
		String name = "Joe";
		int houseNo = 10;
		String street = "Church Street";
		String postCode = "CH44 *XY";
		String phone = "000 000 000";
		String company = "BwD";
		double salary = 1250.0;
		boolean hasDrivingLicence = true;

		System.out.println(age + " " + name + houseNo + " " + street + " " + postCode );
		System.out.println(phone  + " " + company + " " + salary);
		if(hasDrivingLicence == true)
			System.out.println("Holds a driving lience");
		else
			System.out.println("Does not have a driving licence");
	}
}