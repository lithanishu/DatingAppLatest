using System.ComponentModel.DataAnnotations;

namespace NewDatingApp.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }

        [Required]
        [StringLength(8,MinimumLength=4,ErrorMessage="length btw 4 and 8")]
        public string Password { get; set; }
    }
}