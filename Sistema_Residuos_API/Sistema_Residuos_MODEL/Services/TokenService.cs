using Microsoft.IdentityModel.Tokens;
using Sistema_Residuos_MODEL.Models;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Sistema_Residuos_MODEL.Services
{
    public class TokenService
    {
        private readonly string _secretKey;
        private readonly Sistema_ResiduosContext _context;

        // Construtor que recebe a chave secreta
        public TokenService(string secretKey, Sistema_ResiduosContext context)
        {
            _secretKey = secretKey;
            _context = context;
        }

        public async Task SaveTokenAsync(string tokenValue)
        {
            var token = new Token
            {
                TokenValue = tokenValue,
                CreatedDate = DateTime.UtcNow
            };

            _context.Tokens.Add(token);
            await _context.SaveChangesAsync();
        }

        public string GenerateJwt(Usuario user)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_secretKey);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[]
                {
                    new Claim(ClaimTypes.Name, user.Email),
                    new Claim(ClaimTypes.Role, user.Role)
                }),
                Expires = DateTime.UtcNow.AddHours(1),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}
