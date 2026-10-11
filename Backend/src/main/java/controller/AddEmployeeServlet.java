package controller;

import java.io.IOException;

import dao.EmployeeDAO;
import model.Employee;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/employee")
public class AddEmployeeServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    private EmployeeDAO employeeDAO = new EmployeeDAO();

    @Override
    protected void doPost(HttpServletRequest request,
                           HttpServletResponse response)
            throws ServletException, IOException {

        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
        response.setHeader("Access-Control-Allow-Headers", "Content-Type");
        response.setContentType("text/plain");

        try {

            String name = request.getParameter("name");
            String fatherName = request.getParameter("fatherName");
            String dob = request.getParameter("dob");

            double salary = Double.parseDouble(
                    request.getParameter("salary")
            );

            String address = request.getParameter("address");
            String phone = request.getParameter("phone");
            String email = request.getParameter("email");
            String education = request.getParameter("education");
            String designation = request.getParameter("designation");
            String aadhar = request.getParameter("aadhar");

            Employee employee = new Employee();

            employee.setName(name);
            employee.setFatherName(fatherName);
            employee.setDob(dob);
            employee.setSalary(salary);
            employee.setAddress(address);
            employee.setPhone(phone);
            employee.setEmail(email);
            employee.setEducation(education);
            employee.setDesignation(designation);
            employee.setAadhar(aadhar);

            boolean result = employeeDAO.addEmployee(employee);

            if (result) {

                response.setStatus(HttpServletResponse.SC_OK);
                response.getWriter().write("Employee Added Successfully");

            } else {

                response.setStatus(
                        HttpServletResponse.SC_INTERNAL_SERVER_ERROR
                );

                response.getWriter().write("Employee Not Added");
            }

        } catch (Exception e) {

            e.printStackTrace();

            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            response.getWriter().write("Invalid Employee Data");
        }
    }

    @Override
    protected void doOptions(HttpServletRequest request,
                             HttpServletResponse response)
            throws ServletException, IOException {

        response.setHeader("Access-Control-Allow-Origin", "*");

        response.setHeader(
                "Access-Control-Allow-Methods",
                "POST, GET, OPTIONS"
        );

        response.setHeader(
                "Access-Control-Allow-Headers",
                "Content-Type"
        );

        response.setStatus(HttpServletResponse.SC_OK);
    }
}