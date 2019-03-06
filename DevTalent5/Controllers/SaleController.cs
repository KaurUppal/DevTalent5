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



            var name = model.Select(x => new Sale
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

            return Json(name, JsonRequestBehavior.AllowGet);
        }

        // GET: Sales/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: Sales/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Sales/Create
        [HttpPost]
        public ActionResult Create(FormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Sales/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: Sales/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Sales/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: Sales/Delete/5
        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
    }
}
