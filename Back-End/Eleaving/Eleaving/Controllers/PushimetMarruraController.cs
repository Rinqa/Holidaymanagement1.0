using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Eleaving.Models;
namespace Eleaving.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PushimetMarruraController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public PushimetMarruraController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        [HttpGet]
        public JsonResult Get()
        {
            string query = @"select * from PushimetMarrura";
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
            return new JsonResult(table);
        }

        [HttpPost]
        public JsonResult Post(PushimetMarrura pm)
        {
            string query = @"insert into PushimetMarrura (Users,Pushimi,Ditet,Viti) values (
              '" + pm.Users + @"',
              '" + pm.Pushimi + @"',
              '" + pm.Ditet + @"', 
              '" + pm.Viti + @"'
            )";
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
            return new JsonResult("Added successfully");
        }
    }
}
