using MongoDB.Bson.Serialization.Attributes;
using System.Collections.Generic;

namespace MicroBlog.Mongo.Model
{
    public class DataModel : MongoModel
    {
        [BsonElement("Title")]
        public string Title { get; set; }

        [BsonElement("Detail")]
        public string Detail { get; set; }

        [BsonElement("Tag")]
        public List<string> Tag { get; set; }
    }
}
