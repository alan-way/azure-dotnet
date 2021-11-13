using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AzureAlanWei.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class HelloController : ControllerBase
  {
    public String GetHello()
    {
      return "Now " + DateTime.Now.ToString();
    }
  }
}