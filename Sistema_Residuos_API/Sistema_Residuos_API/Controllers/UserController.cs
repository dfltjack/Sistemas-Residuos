using Microsoft.AspNetCore.Mvc;
using Sistema_Residuos_MODEL.Services;
using Sistema_Residuos_MODEL.Models;
using System.Threading.Tasks;

[Route("api/[controller]")]
[ApiController]
public class UserController : ControllerBase
{
    private readonly UserService _userService;

    public UserController(UserService userService)
    {
        _userService = userService;
    }

    [HttpPost]
    public async Task<IActionResult> Post([FromBody] Usuario usuario)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        await _userService.CreateUserAsync(usuario.Nome, usuario.Email, usuario.Senha, usuario.Role);
        return Ok("Usuário criado com sucesso");
    }
}
