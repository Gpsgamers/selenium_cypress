package runners;

import java.io.IOException;

import org.testng.annotations.BeforeClass;
import org.testng.annotations.Parameters;

import io.cucumber.testng.AbstractTestNGCucumberTests;

public class cypress extends AbstractTestNGCucumberTests  {
	
	@BeforeClass
	@Parameters({ "browser", "environment" })
	public void browserlaunchconfiguration(String browser, String environment) throws InterruptedException {
		System.out.println(browser);
		runCypressTestsInBackground("chrome");
	}
	
	public static void runCypressTestsInBackground(String browser) throws InterruptedException {
		try {
			String os = System.getProperty("os.name").toLowerCase();
			String command;
			String cmd = "npx cypress run --browser";
			if (os.contains("win")) {
				command = "cmd.exe"; // Windows
				ProcessBuilder pb = new ProcessBuilder(command, "/c", cmd, browser);
				pb.redirectOutput(ProcessBuilder.Redirect.INHERIT);
				pb.redirectError(ProcessBuilder.Redirect.INHERIT);
				 // Start the process
	            Process process = pb.start();
	            // Wait for the process to complete
	            int exitCode = process.waitFor();
	            // Check the exit code
	            if (exitCode == 0) {
	                System.out.println("Process completed successfully!");
	            } else {
	                System.out.println("Process failed with exit code: " + exitCode);
	            }
			} else {
				command = "bash"; // Linux/Mac
				ProcessBuilder pb = new ProcessBuilder(command, "-c", cmd, browser);
				pb.redirectOutput(ProcessBuilder.Redirect.INHERIT);
				pb.redirectError(ProcessBuilder.Redirect.INHERIT);
				pb.start();
				pb.wait();
			}

		} catch (IOException e) {
			e.printStackTrace();
			throw new RuntimeException("Failed to start Cypress tests", e);
		}
	}
}
