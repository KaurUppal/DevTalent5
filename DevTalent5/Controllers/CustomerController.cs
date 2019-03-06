using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using DevTalent5.Models;

namespace DevTalent5.Controllers
{
    public class CustomerController : Controller
    {
        TalentDevEntities db = new TalentDevEntities();
        // GET: Customer
        public ActionResult Customers()
        {
            return View();
        }

        // GET: Customer
        public ActionResult GetCustomerList()
        {
            var model = db.Customers.ToList();
            var customers= model.Select(x => new Customer
            {
                Id = x.Id,
                Name = x.Name,
                Address = x.Address,
            });

            return Json(customers, JsonRequestBehavior.AllowGet);
        }

        // GET: Customer/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: Customer/Create
        public ActionResult Create(Customer model)
        {
            Customer customer = new Customer();
            customer.Name = model.Name;
            customer.Address = model.Address;
            try
            {
                db.Customers.Add(customer);
                db.SaveChanges();
                return Json(new { Response = "Success" }, JsonRequestBehavior.AllowGet);
            }
            catch
            {
                return Json(new { Response = "Unsuccess" }, JsonRequestBehavior.AllowGet);
            }
        }

        // POST: Customer/Create
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

        // GET: Customer/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: Customer/Edit/5
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

        // GET: Customer/Delete/5
        public ActionResult DeleteCustomer(int id)
        {
            var customer = db.Customers.Find(id);
            try
            {
                db.Customers.Remove(customer);
                db.Entry(customer);
                db.SaveChanges();
                return Json(new { Response = "Success" }, JsonRequestBehavior.AllowGet);
            }
            catch
            {
                return Json(new { Response = "UnSuccess" }, JsonRequestBehavior.AllowGet);

            }
            
        }

        // POST: Customer/Delete/5
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
