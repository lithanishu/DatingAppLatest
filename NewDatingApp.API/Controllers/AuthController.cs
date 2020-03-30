using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using NewDatingApp.API.Data;
using NewDatingApp.API.Models;

namespace NewDatingApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthRepository _repo;

        public AuthController(IAuthRepository repo)
        {
            _repo = repo;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(string username,string password)
        {
             //validate user

             if(await _repo.UserExists(username))
                return BadRequest("User already exists");

            var userToCreate = new User
            {
                Username = username
            }

            var createdUser = await _repo.Register(userToCreate,password);

            return StatusCode(201);
        }
    }
}