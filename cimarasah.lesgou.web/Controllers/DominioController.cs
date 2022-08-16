using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace cimarasah.lesgou.web.Controllers
{
    public class DominioController : Controller
    {
        // GET: DominioController
        public ActionResult Index()
        {
            return View();
        }

        // GET: DominioController/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: DominioController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: DominioController/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: DominioController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: DominioController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: DominioController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: DominioController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}
