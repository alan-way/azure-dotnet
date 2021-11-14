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
    public async Task<String> GetHello()
    {
      HttpClient client = new HttpClient();
      String result = await client.GetStringAsync("https://api.ituring.com.cn/api/Page/Home");
      this.Response.Headers.ContentType = "application/json";
      return result;
    }
  }
}