using System;
using MicroBlog.Mongo.Data;
using MicroBlog.Mongo.Model;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

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
        public async Task<IEnumerable<DataModel>> GetBlogPosts()
        {
            var dataModel = await this.MongoRepository.GetDatasAsync();
            return dataModel;
        }

        // GET: api/BlogPosts/5
        [HttpGet("{postId}")]
        public async Task<IActionResult> GetBlogPost([FromRoute] int postId)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var blogPost = await this.MongoRepository.GetDataAsync(postId);

            if (blogPost == null)
            {
                return NotFound();
            }

            return Ok(blogPost);
        }

        // PUT: api/BlogPosts/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBlogPost([FromRoute] int postId, [FromBody] DataModel blogPost)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (postId != blogPost.PostId)
            {
                return BadRequest();
            }

            try
            {
                await this.MongoRepository.UpdateDataAsync(postId, blogPost);

            }
            catch (Exception)
            {
                throw;
            }

            return Ok();
        }

        // POST: api/BlogPosts
        [HttpPost]
        public async Task<IActionResult> PostBlogPost([FromBody] DataModel blogPost)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            await this.MongoRepository.AddDataSingleAsync(blogPost);

            return CreatedAtAction("GetBlogPosts", new { blogPost }, blogPost);
        }

        // DELETE: api/BlogPosts/5
        [HttpDelete("{postId}")]
        public async Task<IActionResult> DeleteBlogPost([FromRoute] int postId)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            await this.MongoRepository.DeleteDataAsync(postId);
            return Ok();
        }

        [HttpGet]
        [Route("test")]
        public IActionResult Test()
        {
            return Ok("Hello");
        }

    }
}
