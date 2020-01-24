using MicroBlog.Mongo.Model;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MicroBlog.Mongo.Data
{
    public interface IMongoRepository
    {
        Task<IEnumerable<DataModel>> GetDatasAsync();
        Task<DataModel> GetDataAsync(int dataId);
        Task AddDataAsync(IEnumerable<DataModel> dataModels);
        Task AddDataSingleAsync(DataModel dataModel);
        Task UpdateDataAsync(int postId,DataModel dataModels);
        Task DeleteDataAsync(int postId);
    }
}
