using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;
using System.Data;
using Holiday.Models;
namespace Holiday.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class SignUpKompanijaController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public SignUpKompanijaController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        [HttpPost]
        public JsonResult Post(SignUpKompanija signup)
        {
            string query = @"insert into Kompania (Emri,DrejtoriEmri,Email,Passwordi,Tel) values (
                                            '"+signup.Emri+@"',
                                            '"+signup.DrejtoriEmri+@"',
                                            '"+signup.Email+ @"',
                                            '" + signup.Passwordi+@"',
                                            '" + signup.Tel + @"'
                                            );";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Added Successfully");
        }
    }
}
