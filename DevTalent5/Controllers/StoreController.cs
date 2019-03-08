﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using DevTalent5.Models;

namespace DevTalent5.Controllers
{
    public class StoreController : Controller
    {
        TalentDevEntities db = new TalentDevEntities();
        // GET: Store
        public ActionResult Stores()
        {
            return View();
        }

        // GET: Store
        public ActionResult GetStoreList()
        {
            var model = db.Stores.ToList();
            var stores = model.Select(x => new Store
            {
                Id = x.Id,
                Name = x.Name,
                Address = x.Address
            });
            return Json(stores, JsonRequestBehavior.AllowGet);
        }

        // POST: Store/Create
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

        // GET: Store/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        

        // GET: Store/Delete/5
        public ActionResult Delete(int id)
        {
            Store store = db.Stores.Find(id);
            try
            {
                db.Stores.Remove(store);
                db.SaveChanges();
                return Json(new { Response = "success" }, JsonRequestBehavior.AllowGet);
            }
            catch
            {
                return Json(new { Response = "UnSuccess" }, JsonRequestBehavior.AllowGet);
            }

           
        }

        
    }
}
