using MongoDB.Bson.Serialization.Attributes;
using System;
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

        [BsonElement("email")]
        public string Email { get; set; }

        [BsonElement("tag")]
        public List<Tag> Tag { get; set; }

        [BsonElement("creator")]
        public string Creator { get => "Onur Dikmen"; }

        [BsonElement("dt")]
        public DateTime CreatTime { get; set; }
    }

    public class Tag
    {
        [BsonElement("display")]
        public string Display { get; set; }

        [BsonElement("value")]
        public string Value { get; set; }

    }
}
