using MongoDB.Bson.Serialization.Attributes;
using System.Collections.Generic;

namespace MicroBlog.Mongo.Model
{
    [BsonIgnoreExtraElements]
    public class DataModel : MongoModel
    {
        [BsonElement("postId")]
        public int PostId { get; set; }

        [BsonElement("tite")]
        public string Title { get; set; }

        [BsonElement("detail")]
        public string Detail { get; set; }

        [BsonElement("tag")]
        public List<string> Tag { get; set; }

        [BsonElement("creator")]
        public string Creator { get => "Onur Dikmen"; }
    }
}
