using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Holiday.Models;
using Holiday.Services;

namespace Holiday.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private IUserServices _userService;
        public UsersController(IUserService usersService)
        {
            _userService = _userService;
        }
        [HttpPost("authenticate")]
        public IActionResult Authenticate(AuthenticateRequest model)
        {
            var response = _userService.Authenticate(model);
            if(response == null)
            {
                return BadRequest(new { message = "Username or password is incorrect" });
            }
            return Ok(response);
        }
    }
}
