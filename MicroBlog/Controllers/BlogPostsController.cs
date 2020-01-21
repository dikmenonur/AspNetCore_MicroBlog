using MicroBlog.Mongo.Data;
using MicroBlog.Mongo.Model;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Blog.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class BlogPostsController : ControllerBase
    {
        private readonly IMongoRepository MongoRepository;

        public BlogPostsController(IMongoRepository mongoRepository)
        {
            this.MongoRepository = mongoRepository;
        }

        // GET: api/BlogPosts
        [HttpGet]
        public Task<IEnumerable<DataModel>> GetBlogPosts()
        {
            return this.MongoRepository.GetDatasAsync();
        }

        // GET: api/BlogPosts/5
        [HttpGet("{title}")]
        public async Task<IActionResult> GetBlogPost([FromRoute] string title)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var blogPost = await this.MongoRepository.GetDatasAsync(title);

            if (blogPost == null)
            {
                return NotFound();
            }

            return Ok(blogPost);
        }

        // PUT: api/BlogPosts/5
        //[HttpPut("{id}")]
        //public async Task<IActionResult> PutBlogPost([FromRoute] int id, [FromBody] DataModel blogPost)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    if (id != blogPost.Id)
        //    {
        //        return BadRequest();
        //    }

        //    _context.Entry(blogPost).State = EntityState.Modified;

        //    try
        //    {
        //        _repo.Update(blogPost);
        //        var save = await _repo.SaveAsync(blogPost);
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!BlogPostExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return NoContent();
        //}

        // POST: api/BlogPosts
        [HttpPost]
        public async Task<IActionResult> PostBlogPost([FromBody] DataModel blogPost)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            await this.MongoRepository.AddDataSingleAsync(blogPost);

            return CreatedAtAction("GetBlogPost", new { blogPost }, blogPost);
        }

        // DELETE: api/BlogPosts/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBlogPost([FromRoute] string title)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var blogPost = await this.MongoRepository.GetDatasAsync(title);

            if (blogPost == null)
            {
                return NotFound();
            }

            return Ok(blogPost);
        }

        [HttpGet]
        [Route("test")]
        public IActionResult Test()
        {
            return Ok("Hello");
        }

    }
}
