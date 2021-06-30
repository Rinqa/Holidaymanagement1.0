using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Eleaving.Models
{
    public class Users
    {
        public int Id { get; set; }
        public string username { get; set; }
        public string  Emri { get; set; }
        public string Mbiemri { get; set; }
        public char Gjinia { get; set; }
        public int NrPersonal { get; set; }
        public string Tel { get; set; }
        public string Email { get; set; }
        public string password { get; set; }
        public string Statusi { get; set; }
        public string Pozita { get; set; }
        public string Departamenti { get; set; }
        public int PushimVjetor { get; set; }
        public string Viti { get; set; }
        public string Roli { get; set; }
        public string Profili { get; set; }
    }
}
