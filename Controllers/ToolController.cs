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
  public class ToolController : ControllerBase
  {
    public async Task<String> qrCode(String text)
    {
      return "ok";
    }
  }
}