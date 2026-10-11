package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import model.Employee;
import util.DBConnection;

public class EmployeeDAO {

    // =========================
    // ADD EMPLOYEE
    // =========================
    public boolean addEmployee(Employee employee) {

        String sql = "INSERT INTO employees "
                + "(name, father_name, dob, salary, address, phone, email, education, designation, aadhar) "
                + "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

        try {
            Connection con = DBConnection.getConnection();

            PreparedStatement ps = con.prepareStatement(sql);

            ps.setString(1, employee.getName());
            ps.setString(2, employee.getFatherName());
            ps.setString(3, employee.getDob());
            ps.setDouble(4, employee.getSalary());
            ps.setString(5, employee.getAddress());
            ps.setString(6, employee.getPhone());
            ps.setString(7, employee.getEmail());
            ps.setString(8, employee.getEducation());
            ps.setString(9, employee.getDesignation());
            ps.setString(10, employee.getAadhar());

            int rows = ps.executeUpdate();

            return rows > 0;

        } catch (Exception e) {
            e.printStackTrace();
        }

        return false;
    }


    // =========================
    // VIEW ALL EMPLOYEES
    // =========================
    public List<Employee> getAllEmployees() {

        List<Employee> employees = new ArrayList<>();

        String sql = "SELECT * FROM employees";

        try {
            Connection con = DBConnection.getConnection();

            PreparedStatement ps = con.prepareStatement(sql);

            ResultSet rs = ps.executeQuery();

            while (rs.next()) {

                Employee employee = new Employee();

                employee.setEmployId(rs.getInt("employ_id"));
                employee.setName(rs.getString("name"));
                employee.setFatherName(rs.getString("father_name"));
                employee.setDob(rs.getString("dob"));
                employee.setSalary(rs.getDouble("salary"));
                employee.setAddress(rs.getString("address"));
                employee.setPhone(rs.getString("phone"));
                employee.setEmail(rs.getString("email"));
                employee.setEducation(rs.getString("education"));
                employee.setDesignation(rs.getString("designation"));
                employee.setAadhar(rs.getString("aadhar"));

                employees.add(employee);
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        return employees;
    }


    // =========================
    // GET EMPLOYEE BY ID
    // =========================
    public Employee getEmployeeById(int employId) {

        String sql = "SELECT * FROM employees WHERE employ_id = ?";

        try {
            Connection con = DBConnection.getConnection();

            PreparedStatement ps = con.prepareStatement(sql);

            ps.setInt(1, employId);

            ResultSet rs = ps.executeQuery();

            if (rs.next()) {

                Employee employee = new Employee();

                employee.setEmployId(rs.getInt("employ_id"));
                employee.setName(rs.getString("name"));
                employee.setFatherName(rs.getString("father_name"));
                employee.setDob(rs.getString("dob"));
                employee.setSalary(rs.getDouble("salary"));
                employee.setAddress(rs.getString("address"));
                employee.setPhone(rs.getString("phone"));
                employee.setEmail(rs.getString("email"));
                employee.setEducation(rs.getString("education"));
                employee.setDesignation(rs.getString("designation"));
                employee.setAadhar(rs.getString("aadhar"));

                return employee;
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        return null;
    }


    // =========================
    // UPDATE EMPLOYEE
    // =========================
    public boolean updateEmployee(Employee employee) {

        String sql = "UPDATE employees SET "
                + "name = ?, father_name = ?, dob = ?, salary = ?, "
                + "address = ?, phone = ?, email = ?, education = ?, "
                + "designation = ?, aadhar = ? "
                + "WHERE employ_id = ?";

        try {
            Connection con = DBConnection.getConnection();

            PreparedStatement ps = con.prepareStatement(sql);

            ps.setString(1, employee.getName());
            ps.setString(2, employee.getFatherName());
            ps.setString(3, employee.getDob());
            ps.setDouble(4, employee.getSalary());
            ps.setString(5, employee.getAddress());
            ps.setString(6, employee.getPhone());
            ps.setString(7, employee.getEmail());
            ps.setString(8, employee.getEducation());
            ps.setString(9, employee.getDesignation());
            ps.setString(10, employee.getAadhar());
            ps.setInt(11, employee.getEmployId());

            int rows = ps.executeUpdate();

            return rows > 0;

        } catch (Exception e) {
            e.printStackTrace();
        }

        return false;
    }


    // =========================
    // DELETE EMPLOYEE
    // =========================
    public boolean deleteEmployee(int employId) {

        String sql = "DELETE FROM employees WHERE employ_id = ?";

        try {
            Connection con = DBConnection.getConnection();

            PreparedStatement ps = con.prepareStatement(sql);

            ps.setInt(1, employId);

            int rows = ps.executeUpdate();

            return rows > 0;

        } catch (Exception e) {
            e.printStackTrace();
        }

        return false;
    }
}