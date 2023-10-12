import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;
import java.sql.*;

public class SignInServlet extends HttpServlet {
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Database connection parameters
        String url = "jdbc:mysql://your_db_host/your_db_name";
        String username = "your_db_user";
        String password = "your_db_password";

        try {
            // Get user input from the form
            String enteredUsername = request.getParameter("username");
            String enteredPassword = request.getParameter("password");

            // Establish a database connection
            Connection conn = DriverManager.getConnection(url, username, password);

            // Prepare a SQL query to check user credentials
            String query = "SELECT * FROM users WHERE username = ? AND password = ?";
            PreparedStatement statement = conn.prepareStatement(query);
            statement.setString(1, enteredUsername);
            statement.setString(2, enteredPassword);

            // Execute the query
            ResultSet result = statement.executeQuery();

            if (result.next()) {
                // Valid credentials
                // You can set a session variable to remember the user or perform any other action.
                response.getWriter().write("Sign in successful!");
            } else {
                // Invalid credentials
                response.getWriter().write("Invalid username or password.");
            }

            // Close the database resources
            result.close();
            statement.close();
            conn.close();
        } catch (SQLException e) {
            e.printStackTrace();
            response.getWriter().write("Database error: " + e.getMessage());
        }
    }
}
