using System.ComponentModel.DataAnnotations;

namespace EmployeeAPIs.Models
{
    public class Employee
    {
        [Key]
        public int EmployeeId { get; set; }

        public string EmployeeName { get; set; }
        public string EmployeeEmail { get; set; }
        public string EmployeePhone { get; set; }
        public string EmployeeAge { get; set; }
        public string EmployeeSalary { get; set; }

    }
}
