using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.AspNetCore.Mvc;

namespace AzureAlanWei.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class ToolController : ControllerBase
  {
    public async Task<HttpResponseMessage> download(String url)
    {
      HttpClient client = new HttpClient();
      HttpResponseMessage response = await client.GetAsync(url);
      Console.WriteLine($"code: ${response.StatusCode}");
      return response;
    }
    [Route("ip")]
    public String ip()
    {
      String remoteIp = this.Request.HttpContext.Connection.RemoteIpAddress.ToString();
      String remotePort = this.Request.HttpContext.Connection.RemotePort.ToString();
      return $"{remoteIp}:{remotePort}";
    }
  }
}