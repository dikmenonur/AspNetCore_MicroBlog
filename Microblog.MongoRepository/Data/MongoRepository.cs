using MicroBlog.Mongo.Model;
using Microsoft.Extensions.Options;
using MongoDB.Bson;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MicroBlog.Mongo.Data
{
    public class MongoRepository : IMongoRepository
    {
        private readonly MongoContext mongoContext = null;

        public MongoRepository(IOptions<Settings> settings)
        {
            mongoContext = new MongoContext(settings);
            
        }


        public async Task<DataModel> GetDataAsync(int dataId)
        {
            var filter = Builders<DataModel>.Filter.Eq("PostId", dataId);
            return await mongoContext.PostData
                                 .Find(filter)
                                 .FirstOrDefaultAsync();
        }

        public async Task<IEnumerable<DataModel>> GetDatasAsync()
        {
            try
            {
                return await mongoContext.PostData.AsQueryable().ToListAsync();
            }
            catch (Exception ex)
            {
                // log or manage the exception
                throw ex;
            }
        }

        public async Task UpdateDataAsync(int postId, DataModel dataModels)
        {
            try
            {
                var filter = new QueryDocument { { "postId", postId } };
                var postUpdateData = new UpdateDocument { { "$set", new BsonDocument(dataModels.ToBsonDocument()) } };
                await mongoContext.PostData.UpdateOneAsync(filter, postUpdateData);
            }
            catch (Exception ex)
            {
                // log or manage the exception
                throw ex;
            }
        }

        public async Task DeleteDataAsync(int postId)
        {
            try
            {
                var filter = new QueryDocument { { "postId", postId } };
                await mongoContext.PostData.DeleteOneAsync(filter);
            }
            catch (Exception ex)
            {
                // log or manage the exception
                throw ex;
            }
        }

        public async Task AddDataAsync(IEnumerable<DataModel> dataModels)
        {
            try
            {
                await mongoContext.PostData.InsertManyAsync(dataModels);
            }
            catch (Exception ex)
            {
                // log or manage the exception
                throw ex;
            }
        }

        public async Task AddDataSingleAsync(DataModel dataModel)
        {
            try
            {
                await mongoContext.PostData.InsertOneAsync(dataModel);
            }
            catch (Exception ex)
            {
                // log or manage the exception
                throw ex;
            }
        }
    }
}