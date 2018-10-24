/**
 * Created by rohai on 1/12/2017.
 */
module.exports = function(Schema){

  return new Schema({

    // Systems setting Admin can change from Admin Panel (If Any)
    _id : Schema.Types.ObjectId,

  },{
    timestamps: true
  });
};