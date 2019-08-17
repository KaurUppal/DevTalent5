using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using DevTalent5.Models;

namespace DevTalent5.Models.ViewModel
{
    public class SaleTable
    {
        public int Id { get; set; }
        public int ProductId { get; set; }
        public int CustomerId { get; set; }
        public int StoreId { get; set; }
        public System.DateTime DateSold { get; set; }
        public String CName { get; set; }
        public String PNmae { get; set; }
        public String SName { get; set; }

    }
}