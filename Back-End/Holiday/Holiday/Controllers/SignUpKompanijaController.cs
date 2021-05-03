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

    public class kompKompanijaController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public kompKompanijaController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        [HttpPost]
        public JsonResult Post(Kompania komp)
        {
            string query = @"insert into Kompania (Emri,DrejtoriEmri,Email,Passwordi,Tel) values (
                                            '"+komp.Emri+@"',
                                            '"+komp.DrejtoriEmri+@"',
                                            '"+komp.Email+ @"',
                                            '" + komp.Passwordi+@"',
                                            '" + komp.Tel + @"'
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
