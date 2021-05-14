using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Holiday.Models
{
    public class Users
    {
        private int Id { get; set; }
        private string Emri { get; set; }
        private string Mbiemri { get; set; }
        private char Gjinia { get; set; }
        private int NrPersonal { get; set; }
        private string Tel { get; set; }

        [JsonIgnore]
        private string Passwordi { get; set; }
        private int Statusi { get; set; }
        private int Pozita { get; set; }
        private int Depratamenti { get; set; }
        private int PushimVjetor { get; set; }
        private  string Viti{get;set;}
        private int Roli { get; set; }

    }
}
