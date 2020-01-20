using MongoDB.Driver;
using MicroBlog.Mongo.Model;
using Microsoft.Extensions.Options;
using MongoDB.Driver.Linq;

namespace MicroBlog.Mongo.Data
{
    public class MongoContext
    {
        private readonly IMongoDatabase mongoDatabase = null;
        public MongoContext(IOptions<Settings> settings)
        {
            var client = new MongoClient(settings.Value.ConnectionString);

            if (client != null)
            {
                mongoDatabase = client.GetDatabase(settings.Value.Database);
            }
        }
        public IMongoCollection<DataModel> PostData
        {
            get
            {
                return mongoDatabase.GetCollection<DataModel>("PostData");
            }
        }
    }

}
