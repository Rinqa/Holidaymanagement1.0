﻿using Eleaving.Models;
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
    public class PushimVjetorController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public PushimVjetorController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        [HttpPut]
        public JsonResult Put(Users us)
        {
            string query = @"
                    update Users set 
                    PushimVjetor = PushimVjetor - '" + us.PushimiVjetor + @"'
                    where Id  = " + us.Id + @"                   
                    ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ElavingApp");
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

            return new JsonResult("Updated Successfully");
        }
    }
}
