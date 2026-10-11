
package controller;

import java.io.IOException;
import java.util.List;

import dao.EmployeeDAO;
import model.Employee;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/viewEmployees")
public class ViewEmployeeServlet extends HttpServlet {

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

            List<Employee> employees =
                    employeeDAO.getAllEmployees();

            StringBuilder json = new StringBuilder();

            json.append("[");

            for (int i = 0; i < employees.size(); i++) {

                Employee employee = employees.get(i);

                json.append("{");

                json.append("\"employId\":")
                    .append(employee.getEmployId())
                    .append(",");

                json.append("\"name\":\"")
                    .append(employee.getName())
                    .append("\",");

                json.append("\"fatherName\":\"")
                    .append(employee.getFatherName())
                    .append("\",");

                json.append("\"dob\":\"")
                    .append(employee.getDob())
                    .append("\",");

                json.append("\"salary\":")
                    .append(employee.getSalary())
                    .append(",");

                json.append("\"address\":\"")
                    .append(employee.getAddress())
                    .append("\",");

                json.append("\"phone\":\"")
                    .append(employee.getPhone())
                    .append("\",");

                json.append("\"email\":\"")
                    .append(employee.getEmail())
                    .append("\",");

                json.append("\"education\":\"")
                    .append(employee.getEducation())
                    .append("\",");

                json.append("\"designation\":\"")
                    .append(employee.getDesignation())
                    .append("\",");

                json.append("\"aadhar\":\"")
                    .append(employee.getAadhar())
                    .append("\"");

                json.append("}");

                if (i < employees.size() - 1) {
                    json.append(",");
                }
            }

            json.append("]");

            response.getWriter().write(json.toString());

        } catch (Exception e) {

            e.printStackTrace();

            response.setStatus(
                    HttpServletResponse.SC_INTERNAL_SERVER_ERROR
            );

            response.getWriter().write(
                    "{\"error\":\"Unable to fetch employees\"}"
            );
        }
    }
}