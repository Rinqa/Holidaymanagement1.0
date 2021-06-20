using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Eleaving.Models;
using Microsoft.Extensions.Configuration;
using System.IO;
using Microsoft.AspNetCore.Hosting;
using Newtonsoft.Json.Linq;

namespace Eleaving.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;
        public UsersController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }
        [HttpGet]
        public JsonResult Get()
        {
            string query = @"select * from Users";
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
        public JsonResult Post(Users u)
        {
            string query = @"insert into Users (username,Emri,Mbiemri,Gjinia,NrPersonal,Tel,Email,password,Statusi,Pozita,Departamenti,PushimiVjetor,Viti,Roli,Profili)values (
              '" + u.username + @"',
              '" + u.Emri + @"',
              '" + u.Mbiemri + @"',
              '" + u.Gjinia + @"',
              '" + u.NrPersonal + @"',
              '" + u.Tel + @"',
              '" + u.Email + @"',
              '" + u.password + @"',
              '" + u.Statusi + @"',
              '" + u.Pozita + @"',
              '" + u.Departamenti + @"',
              '" + u.PushimiVjetor + @"',
              '" + u.Viti + @"',
              '" + u.Roli + @"',
               '"+u.Profili+@"',
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

        [HttpPut]
        public JsonResult Put(Users u)
        {
            string query = @"
                    update Users set 
                    username = '"+u.username+@"',
                    Emri = '" + u.Emri + @"',
                    Mbiemri = '" + u.Mbiemri + @"',
                    Gjinia = '" + u.Gjinia + @"',
                    NrPersonal = '" + u.NrPersonal + @"',
                    Tel = '" + u.Tel + @"',
                    Email = '" + u.Email + @"',
                    Statusi = '" + u.Statusi + @"',
                    Pozita = '" + u.Pozita+ @"',
                    Departamenti = '" + u.Departamenti + @"',
                    PushimVjetor = '" + u.PushimiVjetor+ @"',
                    Viti = '" + u.Viti+ @"',
                    Roli = '" + u.Roli+ @"',
                    Profili= '"+u.Profili+@"'
                    where Id  = " + u.Id + @" 
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
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Added successfully");
        }
        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"
                    delete from Users
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

        [Route("SaveFile")]
        [HttpPost]

        public JsonResult SaveFile() 
        {
            try
            {
                var HttpRequest = Request.Form;
                var postedFile = HttpRequest.Files[0];
                string filename = postedFile.FileName;
                var physicalPath = _env.ContentRootPath + "/Photos/" + filename;

                using(var stream = new FileStream(physicalPath, FileMode.Create)) 
                {
                    postedFile.CopyTo(stream);
                }

                return new JsonResult(filename);
            }
            catch (Exception)
            {
                return new JsonResult("anonymous.png");
            }
        }
    }
}
