using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Sistema_Residuos_MODEL.Models;
using Sistema_Residuos_MODEL.Repositories;
using Sistema_Residuos_MODEL.Services;

var builder = WebApplication.CreateBuilder(args);
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection")
    ?? throw new InvalidOperationException("Connection string 'DefaultConnection' not found.");

// Add services to the container.
builder.Services.AddDbContext<Sistema_ResiduosContext>(opt => opt.UseSqlServer(connectionString));
builder.Services.AddControllers();

// Configure the services
builder.Services.AddScoped<RepositoryCalendario>();
builder.Services.AddScoped<ServiceCalendario>();
builder.Services.AddScoped<ServiceNotificacao>();
builder.Services.AddScoped<UserService>();
builder.Services.AddScoped<UserService>();
builder.Services.AddScoped<TokenService>(provider =>
{
    var context = provider.GetRequiredService<Sistema_ResiduosContext>();
    var secretKey = "g6FgCExbTWNC6jmHaK+Fm2WiHRYP8iAQBJcAba2zNmquWSLSw2adkLoqqvlH2JIQqUcbMeZ9J0HT3lROd1WMmA=="; // Sua chave secreta
    return new TokenService(secretKey, context);
});

// Configure JWT Authentication
var secretKey = "g6FgCExbTWNC6jmHaK+Fm2WiHRYP8iAQBJcAba2zNmquWSLSw2adkLoqqvlH2JIQqUcbMeZ9J0HT3lROd1WMmA==";
builder.Services.AddScoped<TokenService>(provider => new TokenService(secretKey, provider.GetRequiredService<Sistema_ResiduosContext>()));

var key = Encoding.ASCII.GetBytes(secretKey);
builder.Services.AddAuthentication(x =>
{
    x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(x =>
{
    x.RequireHttpsMetadata = false;
    x.SaveToken = true;
    x.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(key),
        ValidateIssuer = false,
        ValidateAudience = false
    };
});

// Configure Swagger/OpenAPI
builder.Services.AddSwaggerGen(options =>
{
    options.SwaggerDoc("v1", new OpenApiInfo { Title = "Sistema Resíduos API", Version = "v1" });

    options.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        Name = "Authorization",
        Type = SecuritySchemeType.ApiKey,
        Scheme = "bearer",
        BearerFormat = "JWT",
        In = ParameterLocation.Header,
        Description = "JWT Authorization header using the Bearer scheme."
    });

    options.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference
                {
                    Type = ReferenceType.SecurityScheme,
                    Id = "Bearer"
                }
            },
            new string[] { }
        }
    });

    options.MapType<TimeOnly>(() => new OpenApiSchema
    {
        Type = "string",
        Format = "Time"
    });
});

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();

builder.Services.AddCors(policyBuilder =>
    policyBuilder.AddDefaultPolicy(policy =>
        policy.WithOrigins("*")
        .AllowAnyHeader()
        .AllowAnyMethod())
);

builder.Services.AddCors(policyBuilder =>
    policyBuilder.AddDefaultPolicy(policy =>
        policy.AllowAnyOrigin()
        .AllowAnyHeader()
        .AllowAnyMethod())
);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.Use(async (context, next) =>
{
    try
    {
        await next.Invoke();
    }
    catch (Exception ex)
    {
        Console.WriteLine($"Erro durante a requisição: {ex.Message}");
        throw; // Re-throw the exception to ensure it gets logged elsewhere
    }
});

//app.UseEndpoints(endpoints =>
//{
//    endpoints.MapControllers(); // Certifique-se de que isso está presente
//});

app.UseCors();
app.UseAuthentication(); // Adicione esta linha
app.UseAuthorization();
app.MapControllers();

app.Run();
