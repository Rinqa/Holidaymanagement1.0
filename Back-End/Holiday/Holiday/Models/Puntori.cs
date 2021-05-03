using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Holiday.Models
{
    public class Puntori
    {
        public int Id { get; set; }
        public string Emri { get; set; }
        public string Mbiemri { get; set; }
        public string Gjinia { get; set; }
        public string Email { get; set; }
        public string Passwordi { get; set; }
        public int NumriPersonal { get; set; }
        public int Lokacioni { get; set; }
        public string Tel { get; set; }
        public int Statusi { get; set; }
        public int Pozita { get; set; }
        public int EkipiId { get; set; }
    }
}
