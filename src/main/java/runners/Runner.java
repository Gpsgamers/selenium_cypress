package runners;

import java.io.IOException;
import java.time.Duration;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.edge.EdgeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.safari.SafariDriver;
import org.openqa.selenium.safari.SafariOptions;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;

import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;

//@CucumberOptions(features = { "src\\main\\java\\feature_file\\OTF_offline.feature",
//
//}, // Path to feature files
//		glue = { "sanity_script" }, // Package for step definitions
//		plugin = { "pretty", // For console output
//				"html:target/cucumber-reports/Cucumber.html", // HTML report
//				"json:target/cucumber-reports/Cucumber.json" // JSON report
//		}, monochrome = true // To make console output more readable
//
//)
public class Runner extends AbstractTestNGCucumberTests {
	public static WebDriver driver;
	public static String Browser, Owner, Admin, cohost, Owner_password, Admin_password, cohost_password, url;
	@BeforeClass
	@Parameters({ "browser", "environment" })
	public void browserlaunchconfiguration(String browser, String environment) throws InterruptedException {
		Browser = browser;
		System.out.println(Browser);
		driver = seleniumlaunchbrowser(browser);
		Environment(environment);
		driver.manage().window().maximize();
		driver.manage().timeouts().pageLoadTimeout(Duration.ofSeconds(20));
		driver.get(url);
		System.out.println("nuooo");		
	}
	
	@AfterClass
	public void browserQuitconfiguration() {
		driver.quit();
	}
	
	public WebDriver seleniumlaunchbrowser(String browser) {
		if (browser.equals("chrome")) {
			ChromeOptions options = new ChromeOptions();
			options.addArguments("--use-fake-ui-for-media-stream");
//			options.addArguments("--headless"); // Enable headless mode
//			options.addArguments("--disable-gpu"); // Optional: For Windows systems
//			options.addArguments("--window-size=1920,1080"); // Optional: Set window size
			return new ChromeDriver(options);
		} else if (browser.equals("edge")) {
			EdgeOptions options = new EdgeOptions();
			return new EdgeDriver(options);
		} else if (browser.equals("firefox")) {
			FirefoxOptions options = new FirefoxOptions();
			return new FirefoxDriver(options);
		} else if (browser.equals("safari")) {
			SafariOptions options = new SafariOptions();
			return new SafariDriver(options);
		} else {
			return null;
		}
	}

	public void Environment(String Env) {
		switch (Env) {
		case "QA":
			url = "https://onthefly-qa.contus.us/";

			Owner = "guruprasad.b@contus.in";
			Owner_password = "Welcome@123";
			Admin = "SuperAdmin!@#$1234";
			Admin_password = "";
			cohost = "rahul.s@contus.in";
			cohost_password = "";
			break;

		case "DEV":
			url = "https://onthefly-dev.contus.us/";

			Owner = "rahul.s@contus.in";
			Owner_password = "";
			Admin = "SuperAdmin!@#$1234";
			Admin_password = "";
			cohost = "rahul.s@contus.in";
			cohost_password = "";
			break;

		case "Live":
			url = "https://console.onthefly.stream/";

			Owner = "guruprasad.b@contus.in";
			Owner_password = "Welcome@123";
			Admin = "SuperAdmin!@#$1234";
			Admin_password = "";
			cohost = "rahul.s@contus.in";
			cohost_password = "";
			break;
		}
	}
}
