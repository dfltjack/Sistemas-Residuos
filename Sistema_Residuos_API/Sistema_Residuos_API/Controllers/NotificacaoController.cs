using Microsoft.AspNetCore.Mvc;
using Sistema_Residuos_MODEL.Models;
using Sistema_Residuos_MODEL.Services;
using Sistema_Residuos_MODEL.ViewModel;

namespace Sistema_Residuos_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotificacaoController : Controller
    {
        private Sistema_ResiduosContext _context;
        private ServiceNotificacao _service;
        private TokenService _tokenService;

        //public NotificacaoController(Sistema_ResiduosContext context, ServiceNotificacao service)
        //{
        //    _context = context;
        //    _service = service;
        //    _tokenService = new TokenService(context);
        //}

        public NotificacaoController(Sistema_ResiduosContext context, ServiceNotificacao service, TokenService tokenService)
        {
            _context = context;
            _service = service;
            _tokenService = tokenService;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok(await _service.oRepositoryNotificacao.SelecionarTodosAsync());
        }

        [HttpGet("GetNotificacaoById/{id}")]
        public async Task<IActionResult> Get(int id)
        {
            return Ok(await _service.oRepositoryNotificacao.SelecionarChaveAsync(id));
        }

        [HttpPost("PostNotificacao")]
        public async Task<IActionResult> Post(NotificacaoVM notificacaoVM)
        {
            await _service.IncluirNotificacaoAsync(notificacaoVM);
            return Ok("Notificação Cadastrada com Sucesso");
        }

        [HttpPut("PutNotificacao")]
        public async Task<IActionResult> Put (NotificacaoVM notificacaoVM)
        {
            await _service.AlterarNotificacaoAsync(notificacaoVM);
            return Ok("Notificação Alterada com Sucesso");
        }

        [HttpDelete("DeleteNotificacao/{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                await _service.oRepositoryNotificacao.ExcluirAsync(id);
                return Ok("Notificação Excluida com sucesso");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("SaveToken")]
        public async Task<IActionResult> SaveToken([FromBody] TokenRequest request)
        {
            try
            {
                await _tokenService.SaveTokenAsync(request.Token);
                return Ok(new { message = "Token salvo com sucesso." });
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }
    }
}
