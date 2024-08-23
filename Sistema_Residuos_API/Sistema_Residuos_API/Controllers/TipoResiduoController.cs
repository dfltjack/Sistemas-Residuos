using Microsoft.AspNetCore.Mvc;
using Sistema_Residuos_MODEL.Models;
using Sistema_Residuos_MODEL.Services;
using Sistema_Residuos_MODEL.ViewModel;

namespace Sistema_Residuos_API.Controllers
{
    [Route("api/{Controller}")]
    [ApiController]
    public class TipoResiduoController : Controller
    {
        private Sistema_ResiduosContext _context;
        private ServiceTipoResiduo _service;

        public TipoResiduoController(Sistema_ResiduosContext context, ServiceTipoResiduo service)
        {
            _context = context;
            _service = service;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok(await _service.oRepositoryTipoResiduo.SelecionarTodosAsync());
        }

        [HttpGet("GetTipoResiduoById/{id}")]
        public async Task<IActionResult> Get(int id)
        {
            return Ok(await _service.oRepositoryTipoResiduo.SelecionarChaveAsync(id));
        }

        [HttpPost("PostTipoResiduo")]
        public async Task<IActionResult> Post(TipoResiduoVM tipoResiduoVM)
        {
            await _service.IncluirTipoResiduoAsync(tipoResiduoVM);
            return Ok("Tipo de Resíduo Cadastrado com Sucesso");
        }

        [HttpPut("PutTipoResiduo")]
        public async Task<IActionResult> Put(TipoResiduoVM tipoResiduoVM)
        {
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
