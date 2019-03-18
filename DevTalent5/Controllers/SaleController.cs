using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using DevTalent5.Models;
using System.Data.Entity;

namespace DevTalent5.Controllers
{
    public class SaleController : Controller
    {
        TalentDevEntities db = new TalentDevEntities();
        // GET: Sales
        public ActionResult Index()
        {
            return View();
        }

        // GET: Sales
        public ActionResult Sales()
        {
            return View();
        }
        // GET: Sales
        public ActionResult GetSalesList()
        {
            var model = db.Sales.Include("Customer").
                                 Include("Product").
                                 Include("Store").ToList();



            var sale = model.Select(x => new Sale
            {
                Id = x.Id,
                CustomerId = x.CustomerId,
                ProductId = x.ProductId,
                StoreId = x.StoreId,
                DateSold = x.DateSold,
                FormatedDate = x.FormatedDate,
                CName = x.Customer.Name,
                PName = x.Product.Name,
                SName = x.Store.Name
            });

            return Json(sale, JsonRequestBehavior.AllowGet);
        }


        // GET: Sales/Create
        public ActionResult AddNewEdit(Sale model)
        {
            Sale sale = db.Sales.Find(model.Id);
            if(sale != null)
            {
                sale.CustomerId = model.CustomerId;
                sale.ProductId = model.ProductId;
                sale.StoreId = model.StoreId;
                sale.DateSold = model.DateSold;
                db.SaveChanges();
                return Json(new { Response = "success" }, JsonRequestBehavior.AllowGet);
            }
            else
            {
                try
                {
                    db.Sales.Add(model);
                    db.SaveChanges();
                    return Json(new { Response = "success" }, JsonRequestBehavior.AllowGet);
                }
                catch
                {
                    return Json(new { Response = "unsuccess" }, JsonRequestBehavior.AllowGet);
                }
            }
        }


        // GET: Sales/Delete/5
        public ActionResult Delete(int id)
        {
            Sale sale = db.Sales.Find(id);
            try
            {
                db.Sales.Remove(sale);
                db.SaveChanges();
                return Json(new { Response = "success" }, JsonRequestBehavior.AllowGet);
            }
            catch
            {
                return Json(new { Response = "unsuccess" }, JsonRequestBehavior.AllowGet);
            }

        }

        
    }
}
