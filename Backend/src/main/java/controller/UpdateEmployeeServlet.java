
package controller;

import java.io.IOException;

import dao.EmployeeDAO;
import model.Employee;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/updateEmployee")
public class UpdateEmployeeServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    private EmployeeDAO employeeDAO = new EmployeeDAO();

    @Override
    protected void doGet(HttpServletRequest request,
                          HttpServletResponse response)
            throws ServletException, IOException {

        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");

        try {

            int employId = Integer.parseInt(
                    request.getParameter("employId")
            );

            Employee employee =
                    employeeDAO.getEmployeeById(employId);

            if (employee == null) {

                response.setStatus(
                        HttpServletResponse.SC_NOT_FOUND
                );

                response.getWriter().write(
                        "{\"error\":\"Employee not found\"}"
                );

                return;
            }

            String json = "{"
                    + "\"employId\":" + employee.getEmployId() + ","
                    + "\"name\":\"" + employee.getName() + "\","
                    + "\"fatherName\":\"" + employee.getFatherName() + "\","
                    + "\"dob\":\"" + employee.getDob() + "\","
                    + "\"salary\":" + employee.getSalary() + ","
                    + "\"address\":\"" + employee.getAddress() + "\","
                    + "\"phone\":\"" + employee.getPhone() + "\","
                    + "\"email\":\"" + employee.getEmail() + "\","
                    + "\"education\":\"" + employee.getEducation() + "\","
                    + "\"designation\":\"" + employee.getDesignation() + "\","
                    + "\"aadhar\":\"" + employee.getAadhar() + "\""
                    + "}";

            response.getWriter().write(json);

        } catch (Exception e) {

            e.printStackTrace();

            response.setStatus(
                    HttpServletResponse.SC_BAD_REQUEST
            );

            response.getWriter().write(
                    "{\"error\":\"Invalid Employee ID\"}"
            );
        }
    }

    @Override
    protected void doPost(HttpServletRequest request,
                           HttpServletResponse response)
            throws ServletException, IOException {

        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
        response.setHeader("Access-Control-Allow-Headers", "Content-Type");
        response.setContentType("text/plain");

        try {

            int employId = Integer.parseInt(
                    request.getParameter("employId")
            );

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

            employee.setEmployId(employId);
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

            boolean result =
                    employeeDAO.updateEmployee(employee);

            if (result) {

                response.setStatus(
                        HttpServletResponse.SC_OK
                );

                response.getWriter().write(
                        "Employee Updated Successfully"
                );

            } else {

                response.setStatus(
                        HttpServletResponse.SC_NOT_FOUND
                );

                response.getWriter().write(
                        "Employee Not Found"
                );
            }

        } catch (Exception e) {

            e.printStackTrace();

            response.setStatus(
                    HttpServletResponse.SC_BAD_REQUEST
            );

            response.getWriter().write(
                    "Invalid Employee Data"
            );
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

        response.setStatus(
                HttpServletResponse.SC_OK
        );
    }
}