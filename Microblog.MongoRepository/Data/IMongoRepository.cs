using MicroBlog.Mongo.Model;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MicroBlog.Mongo.Data
{
    public interface IMongoRepository
    {
        Task<IEnumerable<DataModel>> GetDatasAsync();
        Task<IEnumerable<DataModel>> GetDatasAsync(string postDataTitle);
        Task AddDataAsync(IEnumerable<DataModel> dataModels);
        Task AddDataSingleAsync(DataModel dataModel);
    }
}
