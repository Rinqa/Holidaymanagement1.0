using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Holiday.Models
{
    public class SignUpKompanija
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "Ju lutemi shenoni Emrin e Kompanijes")]
        [Display(Name = "Emri Kompanijes")]
        public string Emri { get; set; }
        [Required(ErrorMessage = "Ju lutemi shenoni Emrin e Juaj")]
        [Display(Name = "Emri Dhe Mbiemri Drejtorit")]
        public string DrejtoriEmri { get; set; }
        [Required(ErrorMessage = "Ju lutemi shenoni e-Mail")]
        [Display(Name = "Email Kopanijes")]
        [EmailAddress(ErrorMessage = "Enter a valid Email Address")]
        public string Email { get; set; }
        
        [Required(ErrorMessage = "Ju lutemi shenoni Passwordin")]
        [Display(Name = "Passwordi")]
        public string Passwordi { get; set; }
        [Required(ErrorMessage = "Ju lutemi shenoni Telefonin Tuaj")]
        [Display(Name = "Telefoni")]
        public string Tel { get; set; }
        
    }
}
