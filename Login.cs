using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Login.Models
{
    public class Login
    {
        public string Email { get; }
        [System.ComponentModel.DataAnnotations.Required(ErrorMessage = "Email is incorrect!, Please try again.")]
        public string Password { get; }
        [System.ComponentModel.DataAnnotations.Required(ErrorMessage = "Password is incorrect!, Please try again.")]

    }
}
