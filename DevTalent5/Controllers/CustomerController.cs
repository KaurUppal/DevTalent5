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

        // GET: CustomerList
        public ActionResult GetCustomerList()
        {
            var model = db.Customers.ToList();
            var customers = model.Select(x => new Customer
            {
                Id = x.Id,
                Name = x.Name,
                Address = x.Address,
            });

            return Json(customers, JsonRequestBehavior.AllowGet);
        }


        // GET: Customer/CreateAndEdit
        public ActionResult CreateAndEdit(Customer model)
        {
            var customer = db.Customers.Where(x => x.Id == model.Id).FirstOrDefault();
            if (customer != null)
            {
                customer.Name = model.Name;
                customer.Address = model.Address;
                db.SaveChanges();
                return Json(new { Response = "Success" }, JsonRequestBehavior.AllowGet);
            }
            else
            {
                Customer newCustomer = new Customer();
                newCustomer.Name = model.Name;
                newCustomer.Address = model.Address;
                try
                {
                    db.Customers.Add(newCustomer);
                    db.SaveChanges();
                    //var returnCustomer = Json
                    int id = newCustomer.Id;
                    //Console.Write("here is the id" + id);
                    return Json(new { Response = id }, JsonRequestBehavior.AllowGet);

                }
                catch
                {
                    return Json(new { Response = "Error" }, JsonRequestBehavior.AllowGet);
                }
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
    }
}
