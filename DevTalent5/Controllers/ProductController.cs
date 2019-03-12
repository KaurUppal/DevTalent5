using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using DevTalent5.Models;

namespace DevTalent5.Controllers
{
    public class ProductController : Controller
    {
        TalentDevEntities db = new TalentDevEntities();
        
        // GET: Product
        public ActionResult Index()
        {
            return View();
        }

        // GET: Product
        public ActionResult Products()
        {
            return View();
        }

        public ActionResult GetProductList()
        {
            var model = db.Products.ToList();
            var products = model.Select(x => new Product
            {
                Id = x.Id,
                Name = x.Name,
                Price = x.Price
            });
            return Json(products, JsonRequestBehavior.AllowGet);
        }

       
        // GET: Product/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: Product/AddNewEdit/5
        [HttpPost]
        public ActionResult AddNewEdit(Product model)
        {
            var product = db.Products.Where(x => x.Id == model.Id).FirstOrDefault();
            Double price = Convert.ToDouble(model.Price);
            if (product != null)
            {
                product.Name = model.Name;
                product.Price = price;
                db.SaveChanges();
                return Json(new { Response = "Success", JsonRequestBehavior.AllowGet });
            }
            else
            {
               
                Product newProduct = new Product();
                newProduct.Name = model.Name;
                newProduct.Price = price;
                try
                {
                    db.Products.Add(newProduct);
                    db.SaveChanges();
                    return Json(new { Response = "Success", JsonRequestBehavior.AllowGet });
                }
                catch
                {
                    return Json(new { Response = "Error", JsonRequestBehavior.AllowGet });
                }
                
            }
        }

        // GET: Product/Delete/5
        public ActionResult DeleteProduct(int id)
        {
           var product = db.Products.Find(id);
            try
            {
                db.Products.Remove(product);
                db.Entry(product);
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
