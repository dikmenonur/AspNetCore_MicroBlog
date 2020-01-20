using System;
using System.Linq;
using MongoDB.Driver;
using MicroBlog.Mongo.Model;
using System.Threading.Tasks;
using System.Linq.Expressions;
using System.Collections.Generic;
using Microsoft.Extensions.Options;

namespace MicroBlog.Mongo.Data
{
    public class MongoRepository : IMongoRepository
    {
        private readonly MongoContext mongoContext = null;

        public MongoRepository(IOptions<Settings> settings)
        {
            mongoContext = new MongoContext(settings);
        }


        public async Task<IEnumerable<DataModel>> GetDatasAsync(string dataId)
        {
            var filter = Builders<DataModel>.Filter.Eq("Id", dataId);
            return await mongoContext.PostData
                                 .Find(filter)
                                 .ToListAsync();
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