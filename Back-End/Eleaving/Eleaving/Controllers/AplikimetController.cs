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
    public class AplikimetController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public AplikimetController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        [HttpGet]

        public JsonResult Get()
        {
            string query = @"
                    select Id, IdUser, Pushimi,convert(varchar(10),DataFillimit,120) as DataFillimit, convert(varchar(10),DataMbarimit,120) as DataMbarimit, Pershkrimi,Aprovimi from Aplikimet";
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

        public JsonResult Post(Aplikimet apliko)
        {
            string query = @"
                    insert into Aplikimet values
                    ('" + apliko.IdUser + @"', 
                     '" + apliko.Pushimi + @"',
                     '" + apliko.DataFillimit + @"',
                     '" + apliko.DataMbarimit + @"',
                     '" + apliko.Pershkrimi + @"',
                     '" + apliko.Aprovimi + @"')
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

            return new JsonResult("Added Successfully");
        }
        [HttpPut]
        public JsonResult Put(Aplikimet apliko)
        {
            string query = @"
                    update Aplikimet set 
                    IdUser = '" + apliko.IdUser + @"',
                    Pushimi = '" + apliko.Pushimi+ @"',
                    DataFillimit = '" + apliko.DataFillimit + @"',
                    DataMbarimit = '" + apliko.DataMbarimit+ @"',
                    Pershkrimi = '" + apliko.Pershkrimi+ @"',
                    Aprovimi = '" + apliko.Aprovimi+ @"'
                    where Id  = " + apliko.Id + @" 
                                        
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

        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"
                    delete from Aplikimet
                    where Id = " + id + @" 
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

            return new JsonResult("Deleted Successfully");
        }
    }
}
