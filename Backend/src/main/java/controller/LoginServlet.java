//package controller;
//
//import java.io.IOException;
//
//import dao.AdminDAO;
//
//import javax.servlet.ServletException;
//import javax.servlet.annotation.WebServlet;
//import javax.servlet.http.HttpServlet;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//
//@WebServlet("/login")
//public class LoginServlet extends HttpServlet {
//
//    private static final long serialVersionUID = 1L;
//
//    private AdminDAO adminDAO = new AdminDAO();
//
//
//    // TESTING WITH BROWSER
//    @Override
//    protected void doGet(HttpServletRequest request,
//                          HttpServletResponse response)
//            throws ServletException, IOException {
//
//        response.setContentType("text/plain");
//
//        response.getWriter().write("Login Servlet Working");
//    }
//
//
//    // ACTUAL LOGIN
//    @Override
//    protected void doPost(HttpServletRequest request,
//                           HttpServletResponse response)
//            throws ServletException, IOException {
//
//        response.setHeader(
//                "Access-Control-Allow-Origin",
//                "http://localhost:5173"
//        );
//
//        response.setHeader(
//                "Access-Control-Allow-Methods",
//                "POST, OPTIONS"
//        );
//
//        response.setHeader(
//                "Access-Control-Allow-Headers",
//                "Content-Type"
//        );
//
//        response.setContentType("text/plain");
//
//
//        String username = request.getParameter("username");
//
//        String password = request.getParameter("password");
//
//
//        boolean valid = adminDAO.login(username, password);
//
//
//        if (valid) {
//
//            response.setStatus(
//                    HttpServletResponse.SC_OK
//            );
//
//            response.getWriter().write(
//                    "Login Successful"
//            );
//
//        } else {
//
//            response.setStatus(
//                    HttpServletResponse.SC_UNAUTHORIZED
//            );
//
//            response.getWriter().write(
//                    "Invalid Username or Password"
//            );
//        }
//    }
//
//
//    // CORS PREFLIGHT
//    @Override
//    protected void doOptions(HttpServletRequest request,
//                             HttpServletResponse response)
//            throws ServletException, IOException {
//
//        response.setHeader(
//                "Access-Control-Allow-Origin",
//                "http://localhost:5173"
//        );
//
//        response.setHeader(
//                "Access-Control-Allow-Methods",
//                "POST, OPTIONS"
//        );
//
//        response.setHeader(
//                "Access-Control-Allow-Headers",
//                "Content-Type"
//        );
//
//        response.setStatus(
//                HttpServletResponse.SC_OK
//        );
//    }
//}
package controller;

import java.io.IOException;

import dao.AdminDAO;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/login")
public class LoginServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    private AdminDAO adminDAO = new AdminDAO();

    @Override
    protected void doGet(HttpServletRequest request,
                         HttpServletResponse response)
            throws ServletException, IOException {

        response.setContentType("text/plain");

        response.getWriter().write("Login Servlet Working");
    }

    @Override
    protected void doPost(HttpServletRequest request,
                          HttpServletResponse response)
            throws ServletException, IOException {

        // CORS
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
        response.setHeader("Access-Control-Allow-Headers", "Content-Type");

        response.setContentType("text/plain");

        String username = request.getParameter("username");
        String password = request.getParameter("password");

        System.out.println("Username: " + username);
        System.out.println("Password: " + password);

        boolean result = adminDAO.login(username, password);

        if (result) {
            response.setStatus(HttpServletResponse.SC_OK);
            response.getWriter().write("Login Successful");
        } else {
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            response.getWriter().write("Invalid Username or Password");
        }
    }

    @Override
    protected void doOptions(HttpServletRequest request,
                             HttpServletResponse response)
            throws ServletException, IOException {

        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
        response.setHeader("Access-Control-Allow-Headers", "Content-Type");

        response.setStatus(HttpServletResponse.SC_OK);
    }
}