﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Eleaving.Models
{
    public class Users
    {
        public int Id { get; set; }
        public string  Emri { get; set; }
        public string Mbiemri { get; set; }
        public char Gjinia { get; set; }
        public int NrPersonal { get; set; }
        public string Tel { get; set; }
        public string Email { get; set; }
        public string Passwordi { get; set; }
        public int Statusi { get; set; }
        public int Pozita { get; set; }
        public int Depratamenti { get; set; }
        public int PushimiVjetor { get; set; }
        public string Viti { get; set; }
        public int Roli { get; set; }
    }
}