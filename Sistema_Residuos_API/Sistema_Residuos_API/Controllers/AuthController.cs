using LoginRequestModel = Sistema_Residuos_MODEL.ViewModel.LoginRequest;
using Microsoft.AspNetCore.Mvc;
using Sistema_Residuos_MODEL.Services;
using Sistema_Residuos_MODEL.Models;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Sistema_Residuos_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly UserService _userService;
        private readonly TokenService _tokenService;

        public AuthController(UserService userService, TokenService tokenService)
        {
            _userService = userService;
            _tokenService = tokenService;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequestModel loginRequest)
        {
            // Verifica se o usuário existe
            var user = await _userService.GetUserByCredentialsAsync(loginRequest.Email, loginRequest.Password);
            if (user == null)
                return Unauthorized("Invalid credentials");

            // Gera o token JWT
            var generatedToken = _tokenService.GenerateJwt(user); // Corrigido para usar generatedToken

            // Retorna o token e o nome do usuário
            return Ok(new { token = generatedToken, userName = user.Nome });
        }

        [Authorize]
        [HttpGet("Me")]
        public IActionResult GetUserInfo()
        {
            var userIdString = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

            // Tenta converter o userId de string para int
            if (!int.TryParse(userIdString, out int userId))
            {
                return BadRequest("User ID is invalid");
            }

            var user = _userService.GetUserById(userId);

            if (user == null)
                return NotFound();

            return Ok(new { userName = user.Nome });
        }

    }
}
