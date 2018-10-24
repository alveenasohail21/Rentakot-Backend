/**
 * Created by rohai on 1/12/2017.
 */

module.exports = function (Schema) {
  return new Schema({
    _id : Schema.Types.ObjectId,
    userId : {
      type : String
    },
    productId : {
      type : Schema.Types.ObjectId,
      ref : 'User'
    },
    thumbnailImageUrl : {
      type : String
    },
    previewImageUrl : {
      type : String
    },
    extention : {
      type : String
    },
    videoUrl : {
      type : String
    },
  },{
    timestamps: true
  });
};