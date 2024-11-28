using Microsoft.AspNetCore.Mvc;
using Sistema_Residuos_MODEL.Models;
using Sistema_Residuos_MODEL.Services;
using Sistema_Residuos_MODEL.ViewModel;
using System;
using System.IO;
using System.Threading.Tasks;

namespace Sistema_Residuos_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TipoResiduoController : ControllerBase
    {
        private readonly Sistema_ResiduosContext _context;
        private readonly ServiceTipoResiduo _service;

        public TipoResiduoController(Sistema_ResiduosContext context, ServiceTipoResiduo service)
        {
            _context = context;
            _service = service;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var result = await _service.oRepositoryTipoResiduo.SelecionarTodosAsync();
                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal Server error: {ex.Message}");
            }
        }

        [HttpGet("GetTipoResiduoById/{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var result = await _service.oRepositoryTipoResiduo.SelecionarChaveAsync(id);
            if (result == null)
                return NotFound();

            return Ok(result);
        }

        [HttpPost("PostTipoResiduo")]
        public async Task<IActionResult> Post([FromForm] TipoResiduoVM tipoResiduoVM)
        {
            // Assumindo que tipoResiduoVM.FotoResiduo agora é uma string com a URL
            await _service.IncluirTipoResiduoAsync(tipoResiduoVM);
            return Ok("Tipo de Resíduo Cadastrado com Sucesso");
        }

        [HttpPut("PutTipoResiduo")]
        public async Task<IActionResult> Put([FromForm] TipoResiduoVM tipoResiduoVM)
        {
            // Assumindo que tipoResiduoVM.FotoResiduo agora é uma string com a URL
            await _service.AlterarTipoResiduoAsync(tipoResiduoVM);
            return Ok("Tipo de Resíduo Alterado com Sucesso");
        }

        [HttpDelete("DeleteTipoResiduo/{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                await _service.oRepositoryTipoResiduo.ExcluirAsync(id);
                return Ok("Tipo de Resíduo Excluido(a) com sucesso");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}



//using Microsoft.AspNetCore.Mvc;
//using Sistema_Residuos_MODEL.Models;
//using Sistema_Residuos_MODEL.Repositories;
//using Sistema_Residuos_MODEL.Services;
//using Sistema_Residuos_MODEL.ViewModel;
//using Swashbuckle.AspNetCore.Annotations;


//namespace Sistema_Residuos_API.Controllers
//{
//    [Route("api/[controller]")]
//    [ApiController]
//    public class TipoResiduoController : Controller
//    {
//        private Sistema_ResiduosContext _context;
//        private ServiceTipoResiduo _service;

//        public TipoResiduoController(Sistema_ResiduosContext context, ServiceTipoResiduo service)
//        {
//            _context = context;
//            _service = service;
//        }

//        [HttpGet]
//        public async Task<IActionResult> Get()
//        {
//            try
//            {
//                var result = await _service.oRepositoryTipoResiduo.SelecionarTodosAsync();
//                return Ok(result);
//            }
//            catch (Exception ex)
//            {
//                return StatusCode(500, $"Internal Server error: {ex.Message}");
//            }           
//        }

//        [HttpGet("GetTipoResiduoById/{id}")]
//        public async Task<IActionResult> Get(int id)
//        {
//            return Ok(await _service.oRepositoryTipoResiduo.SelecionarChaveAsync(id));
//        }

//        [HttpPost("PostTipoResiduo")]
//        public async Task<IActionResult> Post([FromForm] TipoResiduoVM tipoResiduoVM)
//        {
//            if (tipoResiduoVM.FotoResiduo != null && tipoResiduoVM.FotoResiduo.Length > 0)
//            {
//                using (var ms = new MemoryStream())
//                {
//                    await tipoResiduoVM.FotoResiduo.CopyToAsync(ms);
//                    tipoResiduoVM.FotoResiduo = ms.ToArray(); // Agora convertido para byte[]
//                }
//            }

//            await _service.IncluirTipoResiduoAsync(tipoResiduoVM);
//            return Ok("Tipo de Resíduo Cadastrado com Sucesso");
//        }



//        //[HttpPost("PostTipoResiduo")]
//        //public async Task<IActionResult> Post([FromForm] TipoResiduoVM tipoResiduoVM)
//        //{
//        //    if (Request.Form.Files.Count > 0)
//        //    {
//        //        using (var ms = new MemoryStream())
//        //        {
//        //            Request.Form.Files[0].CopyTo(ms);
//        //            tipoResiduoVM.FotoResiduo = ms.ToArray();
//        //        }
//        //    }

//        //    await _service.IncluirTipoResiduoAsync(tipoResiduoVM);
//        //    return Ok("Tipo de Resíduo Cadastrado com Sucesso");
//        //}

//        [HttpPut("PutTipoResiduo")]
//        public async Task<IActionResult> Put([FromForm] TipoResiduoVM tipoResiduoVM)
//        {
//            if (Request.Form.Files.Count > 0)
//            {
//                using (var ms = new MemoryStream())
//                {
//                    Request.Form.Files[0].CopyTo(ms);
//                    tipoResiduoVM.FotoResiduo = ms.ToArray();
//                }
//            }

//            await _service.AlterarTipoResiduoAsync(tipoResiduoVM);
//            return Ok("Tipo de Resíduo Alterado com Sucesso");
//        }

//        [HttpDelete("DeleteTipoResiduo/{id}")]
//        public async Task<IActionResult> Delete(int id)
//        {
//            try
//            {
//                await _service.oRepositoryTipoResiduo.ExcluirAsync(id);
//                return Ok("Tipo de Resíduo Excluido(a) com sucesso");
//            }
//            catch (Exception ex)
//            {
//                return BadRequest(ex.Message);
//            }
//        }
//    }
//}
