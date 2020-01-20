using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace MicroBlog.Mongo.Model
{
    public abstract class MongoModel
    {
        [BsonId]
        public ObjectId Id { get; set; }
    }
}
