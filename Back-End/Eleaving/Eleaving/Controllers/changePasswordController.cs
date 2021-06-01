using Eleaving.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace Eleaving.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class changePasswordController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public changePasswordController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        [HttpPut("{id}")]
        public JsonResult Put(Users u, int id)
        {
            string query = @"update Users set  Password = '" + u.password + @"' where Id=" + id + @"";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ElavingApp");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Passwordi u ndryshua");
        }
    }
}
